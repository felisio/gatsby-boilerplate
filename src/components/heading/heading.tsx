import React, { ReactNode } from 'react';
import { StyledH1, StyledH2, StyledH3, StyledH4 } from './heading.styles';

export type HeadingTagTypes = 'h1' | 'h2' | 'h3' | 'h4';

export type HeadingProps = {
    tag: HeadingTagTypes;
    numberOfLines?: number;
    children: ReactNode;
    isBlogPost?: boolean;
};

export default function Heading({ tag = 'h1', children, isBlogPost = false, ...props }: HeadingProps) {
    switch (tag) {
        case 'h2':
            return (
                <StyledH2 className={isBlogPost ? 'blog-post' : ''} {...props}>
                    {children}
                </StyledH2>
            );
        case 'h3':
            return (
                <StyledH3 className={isBlogPost ? 'blog-post' : ''} {...props}>
                    {children}
                </StyledH3>
            );
        case 'h4':
            return (
                <StyledH4 className={isBlogPost ? 'blog-post' : ''} {...props}>
                    {children}
                </StyledH4>
            );
        default:
            return (
                <StyledH1 className={isBlogPost ? 'blog-post' : ''} {...props}>
                    {children}
                </StyledH1>
            );
    }
}
