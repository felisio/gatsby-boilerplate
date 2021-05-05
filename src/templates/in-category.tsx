import React, { useCallback, useEffect } from 'react';
import { navigate } from 'gatsby';
import { WpCategory, WpPost } from '../../graphql-types';
import { ComponentOrientation } from '../utils/componentOrientation';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import { getPostAltText, getPostCategory, getPostDate, getPostImage } from '../utils/wpPostUtils';
import CardsSection, { CardSectionDataType } from '../components/cards-section/cards-section';
import CategoryCard from '../components/category-card/category-card';
import Paginator from '../components/paginator/paginator';
import BlogPostCard from '../components/blog-post-card/blog-post-card';
import { SectionType } from '../components/empty-section/empty-section';
import { Container } from '../styles/Container';
import { BreadcrumbInset } from '../styles/BreadcrumbInset';
import { SectionWithGradientBackground } from '../styles/SectionWithGradientBackground';
import { BreadcrumbPage } from '../components/breadcrumb/breadcrumb';
import { FluidObject } from 'gatsby-image';
import { DynamicType } from '../utils/typeUtils';
import BlogLayout from '../components/blog-layout/blog-layout';
import Seo from '../components/seo/seo';
import usePaginator from '../hooks/use-paginator';

export type InCategoryProps = {
    pageContext: {
        category: WpCategory;
        posts: Array<WpPost>;
        relatedCategories: Array<WpCategory>;
        currentPage: number;
        totalPageCount: number;
    }
};

function getCategoryBreadcrumbData(category: WpCategory) {
    const data: Array<BreadcrumbPage> = [];
    data.push({ title: 'Home', link: '/' });
    if (category.ancestors?.nodes?.length) {
        const parent = category.ancestors.nodes[0];
        if (parent) {
            data.push({ title: parent.name ?? '', link: parent.uri ?? '' });
        }
    }
    data.push({ title: category.name ?? '', link: category.uri ?? '' });
    return data;
}

export default function InCategory({ pageContext }: InCategoryProps) {
    const { getNextPage, getPreviousPage } = usePaginator();
    const { currentPage, totalPageCount, category } = pageContext;
    const categoryIcon = category.custom?.categoryIcon?.localFile?.childImageSharp?.fluid as FluidObject;

    const handlePageChange = useCallback((newPage: number) => {
        navigate(newPage > 1 ? `${pageContext.category.link}${newPage}` : pageContext.category.link ?? '')
    }, [navigate, pageContext.category.link]);

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


    const renderCategoryCard = (item: DynamicType<CardSectionDataType>, index: number) => {
        const category = item as WpCategory;
        const categoryBanner = category.custom?.categoryBanner?.localFile?.childImageSharp?.fluid as FluidObject;
        return (
            <CategoryCard
                key={category.name ?? ''}
                index={index}
                fluidImage={categoryBanner}
                title={category.name ?? ''}
                description={category.description ?? ''}
                categoryLink={item.link ?? ''}
            />
        )
    }

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

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, []);

    return (
        <BlogLayout categoryLink={pageContext.category.uri ?? ''} hasCtabanner={true}>
            <Seo 
                prev={getPreviousPage(currentPage)} 
                next={getNextPage(currentPage, totalPageCount)}
                title={`Category: ${pageContext.category.name ?? ''}`}
            />
            <Container>
                <BreadcrumbInset>
                    <Breadcrumb dirStructure={getCategoryBreadcrumbData(pageContext.category)} />
                </BreadcrumbInset>
                <CardsSection 
                    strapline="In category" 
                    title={pageContext.category.name ?? ''} 
                    icon={categoryIcon}
                    iconAltText={pageContext.category.name ?? ''}
                    isTitleBold={true} 
                    isLoading={false} 
                    paginator={renderPaginator()}
                    emptyStateSectionType={SectionType.category}
                    data={pageContext.posts as WpPost[]} 
                    renderItem={renderBlogPostCard}
                />
            </Container>
            { 
                pageContext.relatedCategories?.length && 
                <SectionWithGradientBackground>
                    <Container>
                        <CardsSection 
                            title="Related Categories" 
                            isTitleBold={true} 
                            isLoading={false} 
                            data={pageContext.relatedCategories as WpCategory[]}
                            renderItem={renderCategoryCard}
                        />
                    </Container>
                </SectionWithGradientBackground>
            }
        </BlogLayout>
    );
}
