import { render } from '@testing-library/react';
import React from 'react';
import LatestPostsSection, { LatestPostsSectionProps } from './latest-posts-section';
import { generateRandomWpPosts } from '../../utils/wpMockUtils';

const createTestProps = (props: LatestPostsSectionProps) => ({
    ...props,
});

test('should verify LatestPostsSection Component props - 3 or more posts', () => {
    const posts = generateRandomWpPosts(20);
    const props = createTestProps({ posts });
    const { container } = render(<LatestPostsSection {...props} />);
    const mainDiv = container.children[0];
    const cardsDiv = mainDiv.children[1];
    // when window width is not specified, desktop version is default
    expect(cardsDiv).toHaveClass('cards-container center');
    expect(cardsDiv.childElementCount).toBe(3);
});

test('should verify LatestPostsSection Component props - 2 posts', () => {
    const posts = generateRandomWpPosts(2);
    const props = createTestProps({ posts });
    const { container } = render(<LatestPostsSection {...props} />);
    const mainDiv = container.children[0];
    const cardsDiv = mainDiv.children[1];
    // when window width is not specified, desktop version is default
    expect(cardsDiv).toHaveClass('cards-container center');
    expect(cardsDiv.childElementCount).toBe(posts.length);
});

test('should verify LatestPostsSection Component props - 1 post', () => {
    const posts = generateRandomWpPosts(1);
    const props = createTestProps({ posts });
    const { container } = render(<LatestPostsSection {...props} />);
    const mainDiv = container.children[0];
    const cardsDiv = mainDiv.children[1];
    // when window width is not specified, desktop version is default
    expect(cardsDiv).toHaveClass('cards-container center');
    expect(cardsDiv.childElementCount).toBe(posts.length);
});
