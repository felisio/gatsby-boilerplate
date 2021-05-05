import { render, screen } from '@testing-library/react';
import React from 'react';
import LatestBlogPostCard, { LatestBlogPostCardProps } from './latest-blog-post-card';
import { ComponentOrientation } from '../../utils/componentOrientation';
import { getMockCardBanner } from '../../utils/wpMockUtils';

const august272020Date = new Date(1598541186000);

const mockBlogPostCardProps: LatestBlogPostCardProps = {
    index: 0,
    altText: 'mock alt text',
    title: 'Sneakerhead, Kenneth Anand',
    link: 'https://quantic.edu/',
    fluidImage: getMockCardBanner(),
    description:
        '<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum nunc vitae massa tincidunt facilisis. Nulla ipsum velit, ornare posuere feugiat sit amet, consequat sit amet arcu. Praesent tincidunt ipsum vitae augue venenatis auctor. Donec tincidunt, mauris a cursus sagittis, nisl ipsum gravida massa, in euismod leo erat sit amet eros. Mauris erat velit, laoreet sit amet semper in, faucibus sed nulla. Suspendisse accumsan metus quis tortor venenatis, eu semper risus ornare. Nulla tempor diam at ex lobortis commodo. Sed posuere rutrum ipsum sit amet laoreet. Vivamus sagittis fermentum massa, quis rutrum massa. Maecenas consequat, eros ullamcorper tempus scelerisque, augue felis pretium urna, ac hendrerit magna odio in nisl. Sed pellentesque, urna vel vehicula vulputate, eros tortor aliquet arcu, volutpat gravida mauris ante non lectus. Cras euismod eget turpis eget blandit. Proin eu tempus tortor. Nunc tristique maximus est et condimentum.</p></div>',
    category: 'Yahoo Finance',
    date: august272020Date,
    orientation: ComponentOrientation.horizontal,
};

const sanitizedDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum nunc vitae massa tincidunt facilisis. Nulla ipsum velit, ornare posuere feugiat sit amet, consequat sit amet arcu. Praesent tincidunt ipsum vitae augue venenatis auctor. Donec tincidunt, mauris a cursus sagittis, nisl ipsum gravida massa, in euismod leo erat sit amet eros. Mauris erat velit, laoreet sit amet semper in, faucibus sed nulla. Suspendisse accumsan metus quis tortor venenatis, eu semper risus ornare. Nulla tempor diam at ex lobortis commodo. Sed posuere rutrum ipsum sit amet laoreet. Vivamus sagittis fermentum massa, quis rutrum massa. Maecenas consequat, eros ullamcorper tempus scelerisque, augue felis pretium urna, ac hendrerit magna odio in nisl. Sed pellentesque, urna vel vehicula vulputate, eros tortor aliquet arcu, volutpat gravida mauris ante non lectus. Cras euismod eget turpis eget blandit. Proin eu tempus tortor. Nunc tristique maximus est et condimentum.';

test('should verify LatestBlogPostCard Component props', () => {
    render(<LatestBlogPostCard {...mockBlogPostCardProps} />);
    expect(screen.getByTestId('category')).toHaveTextContent(mockBlogPostCardProps.category.toUpperCase());
    expect(screen.getByTestId('description')).toHaveTextContent(sanitizedDescription);
    expect(screen.getByTestId('link')).toHaveAttribute('href', mockBlogPostCardProps.link);
    expect(screen.getByAltText(mockBlogPostCardProps.altText)).toBeDefined();
    expect(screen.getByTestId('date')).toHaveTextContent('August 27, 2020');
    expect(screen.getByAltText('mock alt text')).toHaveAttribute('src', 'test-file-stub');
});
