import React, { useLayoutEffect, useState } from 'react';
import LatestBlogPostCard from '../latest-blog-post-card/latest-blog-post-card';
import { ComponentOrientation } from '../../utils/componentOrientation';
import { StyledLatestPostsSection } from './latest-posts-section.styles';
import { WpPost } from '../../../graphql-types';
import { getPostAltText, getPostDate, getPostCategory, getPostImage } from '../../utils/wpPostUtils';

export type LatestPostsSectionProps = {
    posts: Array<WpPost>;
};

export default function LatestPostsSection({ posts }: LatestPostsSectionProps) {
    const [isMobile, setMobile] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState<WpPost[]>([]);

    useLayoutEffect(() => {
        setFilteredPosts(posts.filter((_, i) => i < 3));
        function updateDeviceType() {
            setMobile(!!(window.innerWidth && window.innerWidth < 1200));
        }
        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);
        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, [setMobile, posts]);

    function getCard(post: WpPost, index: number, imageOrientation: ComponentOrientation) {
        return (
            <div className="card" key={post.id}>
                <LatestBlogPostCard
                    index={index}
                    altText={getPostAltText(post, imageOrientation)}
                    fluidImage={
                        getPostImage(post, imageOrientation) || getPostImage(post, ComponentOrientation.horizontal)
                    }
                    category={getPostCategory(post)?.name ?? ''}
                    title={post.title ?? ''}
                    description={post.excerpt ?? ''}
                    link={post.uri ?? ''}
                    date={getPostDate(post)}
                    orientation={imageOrientation}
                />
            </div>
        );
    }
    return (
        <StyledLatestPostsSection>
            <h2>Latest Posts</h2>
            {(filteredPosts.length <= 2 || isMobile) && (
                <div className="cards-container center">
                    {filteredPosts.map((post, index) => {
                        return getCard(post, index, ComponentOrientation.vertical);
                    })}
                </div>
            )}
            {filteredPosts.length === 3 && !isMobile && (
                <div className="cards-container table">
                    <div className="horizontal-card-wrapper">
                        {getCard(filteredPosts[0], 0, ComponentOrientation.vertical)}
                    </div>
                    <div className="vertical-cards-wrapper">
                        {getCard(filteredPosts[1], 1, ComponentOrientation.horizontal)}
                        {getCard(filteredPosts[2], 2, ComponentOrientation.horizontal)}
                    </div>
                </div>
            )}
        </StyledLatestPostsSection>
    );
}
