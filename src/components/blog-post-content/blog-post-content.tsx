import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { StyledBlogPostContent } from './blog-post-content.styles';

export type BlogPostContentProps = {
    banner?: FluidObject;
    bannerAltText?: string;
    html: string;
};

export default function BlogPostContent({ html, banner, bannerAltText }: BlogPostContentProps) {
    return (
        <StyledBlogPostContent>
            {banner && <Img className="banner" fluid={banner} alt={bannerAltText ?? ''} />}
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledBlogPostContent>
    );
}
