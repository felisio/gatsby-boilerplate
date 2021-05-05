import React, { useCallback, useEffect } from 'react';
import { navigate } from 'gatsby';
import { WpPost, WpTag } from '../../graphql-types';
import { getTagBreadcrumbData } from '../utils/wpTagUtils';
import { ComponentOrientation } from '../utils/componentOrientation';
import { getPostAltText, getPostCategory, getPostDate, getPostImage } from '../utils/wpPostUtils';
import { Container } from '../styles/Container';
import { SectionWithGradientBackground } from '../styles/SectionWithGradientBackground';
import { BreadcrumbInset } from '../styles/BreadcrumbInset';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import RelatedTags from '../components/related-tags-section/related-tags-section';
import BlogPostCard from '../components/blog-post-card/blog-post-card';
import CardsSection, { CardSectionDataType } from '../components/cards-section/cards-section';
import Paginator from '../components/paginator/paginator';
import { SectionType } from '../components/empty-section/empty-section';
import { DynamicType } from '../utils/typeUtils';
import BlogLayout from '../components/blog-layout/blog-layout';
import Seo from '../components/seo/seo';
import usePaginator from '../hooks/use-paginator';

export type TaggedInProps = {
    pageContext: {
        tag: WpTag;
        posts: Array<WpPost>;
        relatedTags: Array<WpTag>;
        currentPage: number;
        totalPageCount: number;
    }
};

export default function TaggedIn({ pageContext }: TaggedInProps) {
    const { getNextPage, getPreviousPage } = usePaginator();
    const { currentPage, totalPageCount } = pageContext;
    
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, []);

    
   const handlePageChange = useCallback((newPage: number) => {
        navigate(newPage > 1 ? `${pageContext.tag.link}${newPage}` : pageContext.tag.link ?? '')
    }, [navigate, pageContext.tag.link]);

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
        )
    };

    const renderBlogPostCard = (item: DynamicType<CardSectionDataType>, index: number) => {
        const post = item as WpPost;
        const postMainCategory = getPostCategory(post);
        return (
            <BlogPostCard 
                key={post.id}
                index={index}
                category={postMainCategory?.name ?? ''}
                title={post.title ?? ''}
                description={post.excerpt ?? ''}
                altText={getPostAltText(post, ComponentOrientation.horizontal)}
                fluidImage={getPostImage(post, ComponentOrientation.horizontal)}
                link={post.uri ?? ''}
                date={getPostDate(post)}
            />
        )
    }
    
    return (
        <BlogLayout categoryLink="/" hasCtabanner={true}>
            <Seo 
                prev={getPreviousPage(currentPage)} 
                next={getNextPage(currentPage, totalPageCount)} 
                title={`Tag: ${pageContext.tag.name ?? ''}`}
            />
            <Container>
                <BreadcrumbInset>
                    <Breadcrumb dirStructure={getTagBreadcrumbData(pageContext.tag)} />
                </BreadcrumbInset>
                <CardsSection 
                    strapline="Tagged in" 
                    title={pageContext.tag.name ?? ''} 
                    isTitleBold={true}
                    isLoading={false} 
                    paginator={renderPaginator()} 
                    emptyStateSectionType={SectionType.tag}
                    data={pageContext.posts as WpPost[]}
                    renderItem={renderBlogPostCard}
                />
            </Container>
            { 
                pageContext.relatedTags?.length > 0 &&
                <SectionWithGradientBackground>
                    <Container>
                        <RelatedTags tags={pageContext.relatedTags}/>
                    </Container>
                </SectionWithGradientBackground>
            }
        </BlogLayout>
    );
}
