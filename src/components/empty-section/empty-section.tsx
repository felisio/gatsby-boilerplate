import React from 'react';
import { StyledEmptySection } from './empty-section.styles';
import emptyStateSm from '../../assets/images/empty-state-sm.svg';
import emptyStateLg from '../../assets/images/empty-state-lg.svg';

export type EmptySectionProps = {
    sectionType: SectionType;
};

export enum SectionType {
    category = 'category',
    tag = 'tag',
}

export default function EmptySection({ sectionType }: EmptySectionProps) {
    const alt = 'No blog posts found';
    return (
        <StyledEmptySection>
            <div>
                <img className="mobile" alt={alt} src={emptyStateSm} />
                <img className="desktop" alt={alt} src={emptyStateLg} />
            </div>
            <div className="description">
                <p>
                    We have found <span className="bolder">0 blog posts</span> for this {sectionType}
                </p>
            </div>
        </StyledEmptySection>
    );
}
