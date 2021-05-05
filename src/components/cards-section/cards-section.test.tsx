import renderer from 'react-test-renderer';
import React from 'react';
import CardsSection, { CardsSectionProps } from './cards-section';
import { generateRandomWpPosts, getMockCardBanner } from '../../utils/wpMockUtils';
import { WpPost } from '../../../graphql-types';
import BlogPostCard from '../blog-post-card/blog-post-card';
import { getPostDate } from '../../utils/wpPostUtils';

const createTestProps = (props: CardsSectionProps) => ({
    ...props,
});

test('should verify CardsSection Component props', () => {
    const props = createTestProps({
        title: 'Related Posts',
        data: generateRandomWpPosts(10) as WpPost[],
        renderItem: (item, index) => {
            const post = item as WpPost;
            return (
                <BlogPostCard
                    index={index}
                    fluidImage={getMockCardBanner()}
                    altText="AltText"
                    category="Category"
                    title={post.title || ''}
                    description={post.excerpt || ''}
                    link={post.link || ''}
                    date={getPostDate(post)}
                />
            );
        },
    });

    const tree = renderer.create(<CardsSection {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
