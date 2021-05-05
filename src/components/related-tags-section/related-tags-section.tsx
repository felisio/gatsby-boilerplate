import React from 'react';
import Tag from '../tag/tag';
import { StyledRelatedTagsSection } from './related-tags-section.styles';
import { WpTag } from '../../../graphql-types';

export type RelatedTagsSectionProps = {
    tags: Array<WpTag>;
};

export default function RelatedTags({ tags }: RelatedTagsSectionProps) {
    return (
        <StyledRelatedTagsSection>
            <div className="container">
                <h2>Related tags</h2>
                <div className="tags">
                    {tags.map(tag => {
                        return (
                            <Tag key={tag.name} title={tag.name ?? ''} selected={false} enabled to={tag.link ?? ''} />
                        );
                    })}
                </div>
            </div>
        </StyledRelatedTagsSection>
    );
}
