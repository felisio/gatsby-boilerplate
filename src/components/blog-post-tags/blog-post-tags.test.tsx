import { render, screen } from '@testing-library/react';
import React from 'react';
import BlogPostTags, { BlogPostTagsProps } from './blog-post-tags';
import controlledMockData from '../../../__mocks__/blog-post-tags';

const createTestProps = (props: BlogPostTagsProps) => ({
    ...props,
});

test('should verify BlogPostTags Component props', () => {
    const props = createTestProps(controlledMockData);
    render(<BlogPostTags {...props} />);

    expect(screen.getByText(props.tags[0].name!)).toBeDefined();
    expect(screen.getByText(props.tags[0].name!)).toHaveAttribute('href', props.tags[0].uri!);
});
