import React from 'react';
import renderer from 'react-test-renderer';
import BlogPostContent, { BlogPostContentProps } from './blog-post-content';
import mockBlogPost from '../../../__mocks__/blog-post';
import { getMockCardBanner } from '../../utils/wpMockUtils';

const createTestProps = (props: BlogPostContentProps) => ({
    ...props,
});

test('should verify that BlogPostContent Component has the correct styles', () => {
    const props = createTestProps({
        html: mockBlogPost.paragraphs,
        banner: getMockCardBanner(),
        bannerAltText: 'This is the post mock image',
    });
    const tree = renderer.create(<BlogPostContent {...props} />).toJSON();
    expect(tree).toHaveStyleRule('font-family', `'CaladeaRegular'`);
    expect(tree).toHaveStyleRule('font-size', '1.8rem');
    expect(tree).toHaveStyleRule('font-size', '2rem', { media: '(min-width: 992px)' });
});
