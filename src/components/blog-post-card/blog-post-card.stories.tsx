import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BlogPostCard, { BlogPostCardProps } from './blog-post-card';
import { getMockCardBanner } from '../../utils/wpMockUtils';

export default {
    title: 'Components/BlogPostCard',
    component: BlogPostCard,
} as Meta;

const Template: Story<BlogPostCardProps> = args => <BlogPostCard {...args} />;
const august272020Date = new Date(1598541186000);
const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum nunc vitae massa tincidunt facilisis. Nulla ipsum velit, ornare posuere feugiat sit amet, consequat sit amet arcu. Praesent tincidunt ipsum vitae augue venenatis auctor. Donec tincidunt, mauris a cursus sagittis, nisl ipsum gravida massa, in euismod leo erat sit amet eros. Mauris erat velit, laoreet sit amet semper in, faucibus sed nulla. Suspendisse accumsan metus quis tortor venenatis, eu semper risus ornare. Nulla tempor diam at ex lobortis commodo. Sed posuere rutrum ipsum sit amet laoreet. Vivamus sagittis fermentum massa, quis rutrum massa. Maecenas consequat, eros ullamcorper tempus scelerisque, augue felis pretium urna, ac hendrerit magna odio in nisl. Sed pellentesque, urna vel vehicula vulputate, eros tortor aliquet arcu, volutpat gravida mauris ante non lectus. Cras euismod eget turpis eget blandit. Proin eu tempus tortor. Nunc tristique maximus est et condimentum.';

const longDescription =
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum nunc vitae massa tincidunt facilisis. Nulla ipsum velit, ornare posuere feugiat sit amet, consequat sit amet arcu. Praesent tincidunt ipsum vitae augue venenatis auctor. Donec tincidunt, mauris a cursus sagittis, nisl ipsum gravida massa, in euismod leo erat sit amet eros. Mauris erat velit, laoreet sit amet semper in, faucibus sed nulla. Suspendisse accumsan metus quis tortor venenatis, eu semper risus ornare. Nulla tempor diam at ex lobortis commodo. Sed posuere rutrum ipsum sit amet laoreet. Vivamus sagittis fermentum massa, quis rutrum massa. Maecenas consequat, eros ullamcorper tempus scelerisque, augue felis pretium urna, ac hendrerit magna odio in nisl. Sed pellentesque, urna vel vehicula vulputate, eros tortor aliquet arcu, volutpat gravida mauris ante non lectus. Cras euismod eget turpis eget blandit. Proin eu tempus tortor. Nunc tristique maximus est et condimentum.</p>';

export const Title1Description1 = Template.bind({});
Title1Description1.args = {
    index: 0,
    title: 'This is a short title',
    link: 'https://quantic.edu/',
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    description: '<p>This is a short description</p>',
    category: 'Leadership',
    date: august272020Date,
};

export const Title1Description1WithoutDate = Template.bind({});
Title1Description1WithoutDate.args = {
    index: 0,
    title: 'This is a short title',
    link: 'https://quantic.edu/',
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    description: '<p>This is a short description</p>',
    category: 'Leadership',
};

export const Title1Description2 = Template.bind({});
Title1Description2.args = {
    index: 1,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: 'This is a short title',
    link: 'https://quantic.edu/',
    description: '<p>This is a longer description that occupies 2 lines</p>',
    category: 'Leadership',
    date: august272020Date,
};

export const Title2Description1 = Template.bind({});
Title2Description1.args = {
    index: 2,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: 'This is a longer title that occupies 2 lines',
    link: 'https://quantic.edu/',
    description: '<p>This is a short description</p>',
    category: 'Leadership',
    date: august272020Date,
};

export const Title2Description2 = Template.bind({});
Title2Description2.args = {
    index: 3,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: 'This is a longer title that occupies 2 lines',
    link: 'https://quantic.edu/',
    description: '<p>This is a longer description that occupies 2 lines</p>',
    category: 'Leadership',
    date: august272020Date,
};

export const TitleMaxDescription1 = Template.bind({});
TitleMaxDescription1.args = {
    index: 4,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: loremIpsum,
    link: 'https://quantic.edu/',
    description: '<p>This is a short description</p>',
    category: 'Leadership',
    date: august272020Date,
};

export const TitleMaxDescription2 = Template.bind({});
TitleMaxDescription2.args = {
    index: 5,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: loremIpsum,
    link: 'https://quantic.edu/',
    description: '<p>This is a longer description that occupies 2 lines</p>',
    category: 'Leadership',
    date: august272020Date,
};

export const TitleMaxDescriptionMax = Template.bind({});
TitleMaxDescriptionMax.args = {
    index: 6,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: loremIpsum,
    link: 'https://quantic.edu/',
    description: longDescription,
    category: 'Leadership',
    date: august272020Date,
};
