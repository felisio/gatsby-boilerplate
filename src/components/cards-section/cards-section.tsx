import Img, { FluidObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import { Maybe, WpCategory, WpPost } from '../../../graphql-types';
import { WpSearchResultPostProps } from '../../hooks/use-search';
import { DynamicType } from '../../utils/typeUtils';
import EmptySection, { SectionType } from '../empty-section/empty-section';
import SearchEmptyStateSection from '../search-empty-state-section/search-empty-state-section';
import {
    StyledCardsSection,
    StyledCardsSectionCardLoading,
    StyledCardsSectionGrid,
    StyledCardsSectionHeader,
    StyledCardsSectionPaginator,
} from './cards-section.styles';

export type CardSectionDataType = WpPost | WpCategory | WpSearchResultPostProps;

export type CardsSectionProps = {
    title?: string;
    isTitleBold?: boolean;
    isLoading?: boolean;
    strapline?: string;
    icon?: FluidObject;
    iconAltText?: string;
    search?: ReactElement;
    paginator?: ReactElement | null;
    data?: Maybe<DynamicType<CardSectionDataType>[]>;
    renderItem: (item: DynamicType<CardSectionDataType>, index: number) => ReactElement;
    emptyStateSectionType?: SectionType;
};

export default function CardsSection({
    title,
    strapline,
    icon,
    iconAltText = '',
    isTitleBold = false,
    isLoading = false,
    search,
    paginator,
    data,
    renderItem,
    emptyStateSectionType,
}: CardsSectionProps) {
    const renderHeader = () => (
        <StyledCardsSectionHeader hasIcon={!!icon}>
            {strapline && <p className="strapline">{strapline}</p>}
            <div className="header-title">
                {icon && (
                    <div className="icon">
                        <Img className="category-icon" fluid={icon} alt={iconAltText} />
                    </div>
                )}
                {title && (
                    <div className="title">
                        <h2 className={isTitleBold ? 'bold' : ''}>{title}</h2>
                    </div>
                )}
            </div>
        </StyledCardsSectionHeader>
    );

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    <StyledCardsSectionCardLoading />
                    <StyledCardsSectionCardLoading />
                    <StyledCardsSectionCardLoading />
                </>
            );
        }
        if (data?.length) {
            return data.map((item: DynamicType<CardSectionDataType>, index: number) => {
                const key = (item as WpSearchResultPostProps).ID
                    ? (item as WpSearchResultPostProps).ID
                    : (item as WpPost | WpCategory).id;
                return <React.Fragment key={`item-${key}`}>{renderItem(item, index)}</React.Fragment>;
            });
        }
        if (emptyStateSectionType) {
            return <EmptySection sectionType={emptyStateSectionType} />;
        }
        if (search != null) {
            return <SearchEmptyStateSection />;
        }
        return null;
    };

    const renderPaginator = () => {
        if (paginator && data?.length) {
            return <StyledCardsSectionPaginator>{paginator}</StyledCardsSectionPaginator>;
        }
        return null;
    };

    return (
        <StyledCardsSection>
            {search || renderHeader()}
            <StyledCardsSectionGrid>{renderContent()}</StyledCardsSectionGrid>
            {renderPaginator()}
        </StyledCardsSection>
    );
}
