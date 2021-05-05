import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import { WpPost } from '../../graphql-types';
import { Container } from '../styles/Container';
import { SectionWithGradientBackground } from '../styles/SectionWithGradientBackground';
import CardsSection, { CardSectionDataType } from '../components/cards-section/cards-section';
import Paginator from '../components/paginator/paginator';
import { getPostAltText, getPostCategory, getPostDate, getPostImage } from '../utils/wpPostUtils';
import { ComponentOrientation } from '../utils/componentOrientation';
import BlogPostCard from '../components/blog-post-card/blog-post-card';
import SearchResultsHeader from '../components/search-results-header/search-results-header';
import useSearch, { WpSearchResultPostProps } from '../hooks/use-search';
import { DynamicType } from '../utils/typeUtils';
import BlogLayout from '../components/blog-layout/blog-layout';
import { sanitizeDate } from '../utils/dateUtils';


export type SearchProps = {
    location: Location;
    pageContext: {
        latestPosts: Array<WpPost>;
    }
};

export default function Search({ pageContext, location }: SearchProps) {
    const { getSearch, isLoading, totalPageCount, totalResultsCount, results } = useSearch();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('query') ?? '';
    const pageParam = searchParams.get('page');
    const currentPage = pageParam && parseInt(pageParam) ? parseInt(pageParam) : 1;

    function handlePageChange(newPage: number) {
        navigate(newPage > 1 ? `/search?query=${searchTerm}&page=${newPage}` : `/search?query=${searchTerm}`);
    }

    useEffect(() => {
        getSearch(searchTerm, currentPage);
    }, [searchTerm, currentPage]);
    
    const renderPaginator = () => {
        if (totalPageCount <= 1) {
            return null;
        }

        return (
            <Paginator
                handlePageChange={handlePageChange}
                pageCount={totalPageCount}
                currentPage={currentPage}
            />
        );
    }
    const renderSearchResultHeader = () => {
        return <SearchResultsHeader searchTerm={searchTerm} isSearching={isLoading} resultCount={totalResultsCount}/>
    }

    const renderSearchBlogPostCard = (item: DynamicType<CardSectionDataType>, index: number) => {
        const post = item as WpSearchResultPostProps;
        return (
            <BlogPostCard
                key={index}
                index={index}
                searchResultImage={post.horizontalImageUri}
                altText={post.altText ?? ''}
                category={post.category ?? ''}
                title={post.title ?? ''}
                description={post.description ?? ''}
                link={post.link ?? ''}
                date={sanitizeDate(post.date!)}
            />
        )
    }

    const renderBlogPostCard = (item: DynamicType<CardSectionDataType>, index: number) => {
        const post = item as WpPost;
        return (
            <BlogPostCard
                index={index}
                fluidImage={getPostImage(post, ComponentOrientation.horizontal)}
                altText={getPostAltText(post, ComponentOrientation.horizontal)}
                category={getPostCategory(post)?.name ?? ''}
                title={post.title ?? ''}
                description={post.excerpt ?? ''}
                link={post.uri ?? ''}
                date={getPostDate(post)}
             />
        )
    }

    return (
        <BlogLayout categoryLink="/" hasCtabanner={true} searchValue={searchTerm}>
            <Container>
                <CardsSection 
                    isLoading={isLoading}
                    search={renderSearchResultHeader()}
                    paginator={renderPaginator()} 
                    data={results as WpSearchResultPostProps[]}
                    renderItem={renderSearchBlogPostCard}
                />
            </Container>
            {
                !isLoading && !results?.length && 
                <SectionWithGradientBackground>
                    <Container>
                        <CardsSection 
                            isLoading={isLoading}
                            title="Latest Posts" 
                            isTitleBold={true} 
                            data={pageContext.latestPosts as WpPost[]}
                            renderItem={renderBlogPostCard}
                        />
                    </Container>
                </SectionWithGradientBackground>
            }                
        </BlogLayout>
    );
}
