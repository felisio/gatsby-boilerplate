import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardsSection, { CardsSectionProps, CardSectionDataType } from './cards-section';
import SearchResultsHeader from '../search-results-header/search-results-header';
import Paginator from '../paginator/paginator';
import { generateDeterministicWpCategories, generateRandomWpPosts, getMockCardBanner } from '../../utils/wpMockUtils';
import { WpCategory, WpPost } from '../../../graphql-types';
import CategoryCard from '../category-card/category-card';
import BlogPostCard from '../blog-post-card/blog-post-card';
import { SectionType } from '../empty-section/empty-section';
import { getPostDate } from '../../utils/wpPostUtils';
import { DynamicType } from '../../utils/typeUtils';

export default {
    title: 'Components/CardsSection',
    component: CardsSection,
} as Meta;

const renderItem = (item: DynamicType<CardSectionDataType>, index: number) => {
    const post = item as WpPost;
    return (
        <BlogPostCard
            index={index}
            fluidImage={getMockCardBanner()}
            altText="AltText"
            category="category"
            title={post.title || ''}
            description={post.excerpt || ''}
            link={post.uri || ''}
            date={getPostDate(post)}
        />
    );
};

const Template: Story<CardsSectionProps> = args => <CardsSection {...args} />;

export const TrendingNow = Template.bind({});
TrendingNow.args = {
    title: 'Trending Now',
    data: generateRandomWpPosts(6) as WpPost[],
    renderItem,
};

export const RelatedPosts = Template.bind({});
RelatedPosts.args = {
    title: 'Related Posts',
    data: generateRandomWpPosts(10) as WpPost[],
    renderItem,
};

export const RelatedCategory = Template.bind({});
RelatedCategory.args = {
    title: 'Related Categories',
    isTitleBold: true,
    data: generateDeterministicWpCategories(10),
    renderItem: (item: DynamicType<WpCategory>, index: number) => {
        const { name, description, uri } = item;
        return (
            <CategoryCard
                index={index}
                fluidImage={getMockCardBanner()}
                title={name || ''}
                description={description ?? ''}
                categoryLink={uri || ''}
            />
        );
    },
};

export const InCategory = Template.bind({});
InCategory.args = {
    title: 'Companies & Universities',
    strapline: 'In category',
    isTitleBold: true,
    icon: getMockCardBanner(),
    iconAltText: 'Bill Murray',
    data: generateRandomWpPosts(10) as WpPost[],
    renderItem,
};

export const InCategoryNoResults = Template.bind({});
InCategoryNoResults.args = {
    title: 'Innovation',
    strapline: 'In category',
    isTitleBold: true,
    icon: getMockCardBanner(),
    iconAltText: 'Bill Murray',
    emptyStateSectionType: SectionType.category,
};

export const TaggedIn = Template.bind({});
TaggedIn.args = {
    title: 'category',
    isTitleBold: true,
    strapline: 'Tagged in',
    data: generateRandomWpPosts(10) as WpPost[],
    renderItem,
};

export const TaggedInNoResults = Template.bind({});
TaggedInNoResults.args = {
    title: 'category',
    isTitleBold: true,
    strapline: 'Tagged in',
    emptyStateSectionType: SectionType.tag,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
    search: <SearchResultsHeader searchTerm="Marketing" isSearching />,
    isLoading: true,
    data: null,
};

export const SearchWithResult = Template.bind({});
SearchWithResult.args = {
    search: <SearchResultsHeader searchTerm="Marketing" isSearching={false} resultCount={5} />,
    data: generateRandomWpPosts(3) as WpPost[],
    renderItem,
};

export const WithPaginator = Template.bind({});
WithPaginator.args = {
    title: 'Related Posts',
    paginator: <Paginator pageCount={4} currentPage={1} visiblePages={4} handlePageChange={() => {}} />,
    data: generateRandomWpPosts(9) as WpPost[],
    renderItem,
};
