import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { WpPost } from '../../graphql-types';
import { getPostAltText, getPostCategory, getPostDate, getPostImage } from '../utils/wpPostUtils';
import { ComponentOrientation } from '../utils/componentOrientation';
import { Container } from '../styles/Container';
import { SectionWithGradientBackground } from '../styles/SectionWithGradientBackground';
import LatestPostsSection from '../components/latest-posts-section/latest-posts-section';
import CardsSection, { CardSectionDataType } from '../components/cards-section/cards-section';
import BlogPostCard from '../components/blog-post-card/blog-post-card';
import Paginator from '../components/paginator/paginator';
import Seo from '../components/seo/seo';
import { DynamicType } from '../utils/typeUtils';
import usePaginator from '../hooks/use-paginator';
import BlogLayout from '../components/blog-layout/blog-layout';


export type HomeProps = {
    pageContext: {
        currentPage: number;
        totalPageCount: number;
        latestPosts: Array<WpPost>;
        trendingPosts: Array<WpPost>;
    }
};

const trendingAnchor = '#trending';

function handlePageChange(newPage: number) {
    navigate(newPage > 1 ? `/${newPage}${trendingAnchor}` : `/${trendingAnchor}`,)
}

function useHookWithRefCallback() {
    const callback = useCallback(node => {
        const categoryMenuHeight = 70;
        setTimeout(() => {
            if (window.location.href.indexOf(trendingAnchor) > -1 && node && node.offsetTop) {
                window.scrollTo(0, node.offsetTop - categoryMenuHeight);
            }
        }, 0);
    }, []);
    return [callback];
}


export default function Home({ pageContext }: HomeProps) {
    const [trendingNowRef] = useHookWithRefCallback()
    const { getNextPage, getPreviousPage } = usePaginator();
    const { currentPage, totalPageCount } = pageContext;
        
    const renderPaginator = () => {
        if (pageContext.totalPageCount <= 1) {
            return null;
        }

        return (
            <Paginator
                handlePageChange={handlePageChange}
                pageCount={pageContext.totalPageCount}
                currentPage={pageContext.currentPage}
            />
        );
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
        <BlogLayout categoryLink="/" hasCtabanner={true} >
            <Seo 
                title="Blog" 
                prev={getPreviousPage(currentPage)} 
                next={getNextPage(currentPage, totalPageCount)}
            />
            <Container>
                <LatestPostsSection posts={pageContext.latestPosts} />
            </Container>
            { 
                pageContext.trendingPosts.length &&
                <SectionWithGradientBackground>
                    <Container>
                        <div ref={trendingNowRef}>
                            <CardsSection 
                                title="Trending now" 
                                isTitleBold={true} 
                                isLoading={false} 
                                paginator={renderPaginator()} 
                                data={pageContext.trendingPosts as WpPost[]}
                                renderItem={renderBlogPostCard}
                            />
                        </div>
                    </Container>
                </SectionWithGradientBackground>
            }
        </BlogLayout>
    );
}
