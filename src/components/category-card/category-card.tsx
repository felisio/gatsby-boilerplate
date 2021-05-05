import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { StyledCategoryCard } from './category-card.styles';
import emptyState from '../../assets/images/card-empty-state.svg';
import AnchorLink from '../anchor-link/anchor-link';

export type CategoryCardProps = {
    index: number;
    fluidImage?: FluidObject;
    title: string;
    description: string;
    categoryLink: string;
};

export default function CategoryCard({ index, fluidImage, title, description, categoryLink }: CategoryCardProps) {
    return (
        <StyledCategoryCard>
            <AnchorLink to={categoryLink} className="thumbnail">
                {fluidImage ? <Img key={index} fluid={fluidImage} alt={title} /> : <img src={emptyState} alt={title} />}
            </AnchorLink>
            <div className="content-wrapper">
                <Link data-testid="link" className="title" to={categoryLink}>
                    {title}
                </Link>
                <p data-testid="description" className="description">
                    {description}
                </p>
            </div>
        </StyledCategoryCard>
    );
}
