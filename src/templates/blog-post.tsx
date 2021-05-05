import React, { useEffect } from 'react';
import BlogPostHeader from  '../components/blog-post-header/blog-post-header';
import BlogPostContent from '../components/blog-post-content/blog-post-content';
import Share from '../components/share/share';
import { ComponentOrientation } from '../utils/componentOrientation';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import BlogPostTags from '../components/blog-post-tags/blog-post-tags';
import { 
    getPostAltText, 
    getPostAuthorName, 
    getPostAvatar, 
    getPostBreadcrumbData, 
    getPostCategory, 
    getPostDate, 
    getPostImage, 
    getPostTags 
} from '../utils/wpPostUtils';
import { SectionWithGradientBackground } from '../styles/SectionWithGradientBackground';
import CardsSection, { CardSectionDataType } from '../components/cards-section/cards-section';
import BlogPostCard from '../components/blog-post-card/blog-post-card';
import { 
    StyledBlogPostWrapperContainer, 
    StyledBlogPostContainer, 
    StyledBlogPostSharedContainer, 
    StyledBlogPostDivider, 
    StyledBlogPostBottom 
} from '../styles/BlogPostStyles';
import { DynamicType } from '../utils/typeUtils';
import { WpPost, WpTag } from '../../graphql-types';
import BlogLayout from '../components/blog-layout/blog-layout';
import Seo, { WpPageSeoData } from '../components/seo/seo';

export type BlogPostProps = {
    pageContext: {
        baseUrl: string;
        post: WpPost;
        relatedPosts: Array<WpPost>;
        seo: WpPageSeoData;
    }
};

export default function BlogPost({ pageContext }: BlogPostProps) {
    const twitterHandle = 'QuanticSchool';
    const emailIntro = "Check out this article on Quantic's Blog:";
    const title = pageContext.post.title ?? '';
    const { date } = pageContext.post;
    const postDate = date ? new Date(date) : undefined;
    const postCategory = getPostCategory(pageContext.post);
    const tags = getPostTags(pageContext.post);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, []);

    const renderBlogPostCard = (item: DynamicType<CardSectionDataType>, index: number) => {
        const post = item as WpPost;
        return (
            <BlogPostCard
                key={post.id}
                index={index}
                fluidImage={getPostImage(post, ComponentOrientation.horizontal)}
                altText={getPostAltText(post, ComponentOrientation.horizontal)}
                category={getPostCategory(post)?.name ?? ''}
                title={post.title ?? ''}
                description={post.excerpt ?? ''}
                link={post.uri ?? ''}
                date={getPostDate(post)!!}
            />
        )
    }
    
    return (
        <BlogLayout categoryLink={postCategory?.uri ?? ''} hasCtabanner={true}>
            <Seo seo={pageContext.seo}/>
            <StyledBlogPostWrapperContainer>
                <StyledBlogPostContainer>
                    <StyledBlogPostSharedContainer>
                        <Share
                            orientation={ComponentOrientation.vertical}
                            hasTopBanner={true}
                            title={title}
                            url={`${pageContext.baseUrl}${pageContext.post.link}`}
                            emailIntro={emailIntro}
                            twitterHandle={twitterHandle}
                        />
                    </StyledBlogPostSharedContainer>
                    <div className="blog-post-content">
                        <Breadcrumb dirStructure={getPostBreadcrumbData(pageContext.post)} />
                        <BlogPostHeader
                            category={postCategory?.name ?? ''}
                            title={title}
                            showAuthor={pageContext.post.custom?.showAuthor ?? false}
                            authorAvatar={getPostAvatar(pageContext.post)}
                            authorName={getPostAuthorName(pageContext.post)}
                            postDate={postDate}
                        />
                        <BlogPostContent 
                            banner={getPostImage(pageContext.post, ComponentOrientation.horizontal)} 
                            bannerAltText={getPostAltText(pageContext.post, ComponentOrientation.horizontal)}
                            html={pageContext.post.content ?? ''} 
                        />
                    </div>
                </StyledBlogPostContainer>
                <StyledBlogPostDivider/>
                <StyledBlogPostBottom>
                    <div className="content">
                        <div>
                            <Share
                                orientation={ComponentOrientation.horizontal}
                                title={title}
                                url={`${pageContext.baseUrl}${pageContext.post.link}`}
                                emailIntro={emailIntro}
                                twitterHandle={twitterHandle}
                            />
                        </div>
                        <BlogPostTags tags={tags as WpTag[]} />
                    </div>
                </StyledBlogPostBottom>
            </StyledBlogPostWrapperContainer>
            {
                pageContext.relatedPosts?.length &&
                (
                    <SectionWithGradientBackground>
                        <CardsSection 
                            title="Trending now" 
                            isTitleBold={true}
                            data={pageContext.relatedPosts as WpPost[]}
                            renderItem={renderBlogPostCard}
                        />
                    </SectionWithGradientBackground>
                )
            }
        </BlogLayout>
    );
}
