import { render, screen } from '@testing-library/react';
import React from 'react';
import { getMockCardBanner } from '../../utils/wpMockUtils';
import BlogPostCard, { BlogPostCardProps } from './blog-post-card';

const august272020Date = new Date(1598541186000);

const mockBlogPostCardProps: BlogPostCardProps = {
    index: 0,
    altText: 'leadership',
    title: 'Sneakerhead, Kenneth Anand',
    link: 'https://quantic.edu/',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum nunc vitae massa tincidunt facilisis. Nulla ipsum velit, ornare posuere feugiat sit amet, consequat sit amet arcu. Praesent tincidunt ipsum vitae augue venenatis auctor. Donec tincidunt, mauris a cursus sagittis, nisl ipsum gravida massa, in euismod leo erat sit amet eros. Mauris erat velit, laoreet sit amet semper in, faucibus sed nulla. Suspendisse accumsan metus quis tortor venenatis, eu semper risus ornare. Nulla tempor diam at ex lobortis commodo. Sed posuere rutrum ipsum sit amet laoreet. Vivamus sagittis fermentum massa, quis rutrum massa. Maecenas consequat, eros ullamcorper tempus scelerisque, augue felis pretium urna, ac hendrerit magna odio in nisl. Sed pellentesque, urna vel vehicula vulputate, eros tortor aliquet arcu, volutpat gravida mauris ante non lectus. Cras euismod eget turpis eget blandit. Proin eu tempus tortor. Nunc tristique maximus est et condimentum.',
    category: 'Leadership',
    date: august272020Date,
};

test('should verify BlogPostCard Component props', () => {
    render(<BlogPostCard {...mockBlogPostCardProps} fluidImage={getMockCardBanner()} />);
    expect(screen.getByTestId('category')).toHaveTextContent(mockBlogPostCardProps.category.toUpperCase());
    expect(screen.getByTestId('title')).toHaveTextContent(mockBlogPostCardProps.title);
    expect(screen.getByTestId('description')).toHaveTextContent(mockBlogPostCardProps.description!);
    expect(screen.getByTestId('title')).toHaveAttribute('href', mockBlogPostCardProps.link);
});

test('should verify that BlogPostCard Component has empty image', () => {
    render(<BlogPostCard {...mockBlogPostCardProps} fluidImage={undefined} />);
    expect(screen.getByAltText(mockBlogPostCardProps.title)).toHaveAttribute('src', 'test-file-stub');
});
