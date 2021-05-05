import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { StyledBlogPostCard } from './blog-post-card.styles';
import emptyState from '../../assets/images/card-empty-state.svg';
import AnchorLink from '../anchor-link/anchor-link';
import { formatDateToString } from '../../utils/dateUtils';

export type BlogPostCardProps = {
    index: number;
    fluidImage?: FluidObject;
    searchResultImage?: string;
    altText?: string;
    title: string;
    link: string;
    category: string;
    date?: Date;
    description?: string;
};

export default function BlogPostCard({
    index,
    fluidImage,
    searchResultImage,
    altText,
    title,
    description,
    category,
    date,
    link,
}: BlogPostCardProps) {
    const renderDescription = () => {
        if (!description) {
            return null;
        }
        const isHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(description);

        if (isHTML) {
            return <div className="description" dangerouslySetInnerHTML={{ __html: description }} />;
        }
        return (
            <div className="description">
                <p data-testid="description">{description}</p>
            </div>
        );
    };

    return (
        <StyledBlogPostCard>
            <AnchorLink to={link} className="thumbnail">
                {fluidImage && <Img key={index} fluid={fluidImage} alt={altText} />}
                {!fluidImage && searchResultImage && <img src={searchResultImage} alt={title} />}
                {!fluidImage && !searchResultImage && <img src={emptyState} alt={title} />}
            </AnchorLink>
            <div className="content-wrapper">
                <div className="meta">
                    <span data-testid="category" className="category">
                        {category.toUpperCase()}
                    </span>
                    {date && (
                        <>
                            <span className="dot">•</span>
                            <span data-testid="date" className="date">
                                {formatDateToString(date)}
                            </span>
                        </>
                    )}
                </div>
                <div className="main">
                    <Link data-testid="title" className="title" to={link}>
                        {title}
                    </Link>
                    {renderDescription()}
                </div>
            </div>
        </StyledBlogPostCard>
    );
}
