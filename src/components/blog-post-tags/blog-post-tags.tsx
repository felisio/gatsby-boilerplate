import React from 'react';
import Tag from '../tag/tag';
import { WpTag } from '../../../graphql-types';
import { StyledBlogPostTags } from './blog-post-tags.styles';

export type BlogPostTagsProps = {
    tags: WpTag[];
};

export default function BlogPostTags({ tags }: BlogPostTagsProps) {
    if (!tags.length) {
        return null;
    }

    return (
        <StyledBlogPostTags>
            <p className="title">TAGS</p>
            <div className="tags">
                {tags.map(tag => {
                    return <Tag key={tag.name} title={tag.name ?? ''} selected={false} enabled to={tag.uri ?? ''} />;
                })}
            </div>
        </StyledBlogPostTags>
    );
}
