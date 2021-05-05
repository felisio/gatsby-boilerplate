import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { ComponentOrientation } from '../../utils/componentOrientation';
import { StyledLatestBlogPostCard } from './latest-blog-post-card.styles';
import emptyState from '../../assets/images/card-empty-state.svg';
import AnchorLink from '../anchor-link/anchor-link';
import { formatDateToString } from '../../utils/dateUtils';

export type LatestBlogPostCardProps = {
    index: number;
    fluidImage?: FluidObject;
    altText: string;
    title: string;
    link: string;
    category: string;
    date?: Date;
    description: string;
    orientation: ComponentOrientation;
};

export default function LatestBlogPostCard({
    index,
    fluidImage,
    altText,
    title,
    category,
    date,
    description,
    link,
    orientation,
}: LatestBlogPostCardProps) {
    return (
        <StyledLatestBlogPostCard className={`wrapper-${orientation}`}>
            <AnchorLink to={link} className="thumbnail">
                {fluidImage ? (
                    <Img key={index} fluid={fluidImage} alt={altText} />
                ) : (
                    <img src={emptyState} alt={title} />
                )}
            </AnchorLink>
            <div className="content-wrapper">
                <div className="meta">
                    <span data-testid="category" className="category">
                        {category.toUpperCase()}
                    </span>
                    <span className="dot">•</span>
                    <span data-testid="date" className="date">
                        {formatDateToString(date!)}
                    </span>
                </div>
                <div className="main">
                    <Link data-testid="link" className="title" to={link}>
                        {title}
                    </Link>
                    <div
                        data-testid="description"
                        className="description"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
            </div>
        </StyledLatestBlogPostCard>
    );
}
