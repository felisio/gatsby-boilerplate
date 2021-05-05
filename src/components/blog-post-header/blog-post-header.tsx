import { FluidObject } from 'gatsby-image';
import React from 'react';
import { formatDateToString } from '../../utils/dateUtils';
import { AuthorInfo } from '../author-info/author-info';
import Heading from '../heading/heading';
import { StyledBlogPostHeader } from './blog-post-header.styles';

export type BlogPostHeaderProps = {
    category: string;
    title: string;
    showAuthor: boolean;
    authorAvatar?: FluidObject;
    authorName?: string;
    postDate?: Date;
};

export default function BlogPostHeader({
    category,
    title,
    authorAvatar,
    authorName,
    showAuthor,
    postDate,
}: BlogPostHeaderProps) {
    const includeAuthor = authorAvatar && authorName && showAuthor;
    return (
        <StyledBlogPostHeader>
            <header>
                <p data-testid="category" className="category">
                    {category.toUpperCase()}
                </p>
                <Heading data-testid="title" tag="h1" isBlogPost>
                    {title}
                </Heading>
                <div data-testid="metadata" className="metadata">
                    {includeAuthor && (
                        <>
                            <AuthorInfo avatar={authorAvatar!} name={authorName!} />
                            <span className="dot">•</span>
                        </>
                    )}
                    <p data-testid="date" className={includeAuthor ? 'date' : 'date lower'}>
                        {formatDateToString(postDate!)}
                    </p>
                </div>
            </header>
        </StyledBlogPostHeader>
    );
}
