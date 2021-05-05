import { render, screen } from '@testing-library/react';
import React from 'react';
import BlogPostHeader, { BlogPostHeaderProps } from './blog-post-header';
import { blogPostProps, withoutAuthorProps } from '../../../__mocks__/blog-post-header';

const createTestProps = (props: BlogPostHeaderProps) => ({
    ...props,
});

test('should verify BlogPostHeader Component props', () => {
    const props = createTestProps(blogPostProps);
    render(<BlogPostHeader {...props} />);
    expect(screen.getByTestId('category')).toHaveTextContent(props.category.toUpperCase());
    expect(screen.getByTestId('title')).toHaveTextContent(props.title);
    expect(screen.getByTestId('date')).toHaveTextContent('August 27, 2020');
    expect(screen.getByTestId('author-name')).toHaveTextContent(props.authorName!);
});

test('should verify BlogPostHeader Component props without author', () => {
    const props = createTestProps(withoutAuthorProps);
    render(<BlogPostHeader {...props} />);
    expect(screen.getByTestId('category')).toHaveTextContent(props.category.toUpperCase());
    expect(screen.getByTestId('title')).toHaveTextContent(props.title);
    expect(screen.getByTestId('date')).toHaveTextContent('August 27, 2020');
    expect(screen.queryByTestId('author-name')).toBeNull();
});
