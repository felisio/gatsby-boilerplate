import React, { ReactElement } from 'react';
import { StyledBlogHeader, StyledBlogTitle } from './blog-header.styles';

export type BlogHeaderProps = {
    title: string;
    navbar?: ReactElement;
    hasTopBanner?: boolean;
};

export default function BlogHeader({ title, navbar, hasTopBanner = false }: BlogHeaderProps) {
    return (
        <StyledBlogHeader hasTopBanner={hasTopBanner}>
            {navbar && navbar}
            <div className="bg-left-bottom" />
            <div className="bg-left">
                <span className="bg-right-bottom-desktop" />
            </div>
            <div className="bg-right-top" />
            <div className="bg-left-top" />
            <StyledBlogTitle>
                <h1>{title}</h1>
            </StyledBlogTitle>
        </StyledBlogHeader>
    );
}
