import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import LatestBlogPostCard, { LatestBlogPostCardProps } from './latest-blog-post-card';
import { ComponentOrientation } from '../../utils/componentOrientation';
import { getMockCardBanner } from '../../utils/wpMockUtils';

export default {
    title: 'Components/LatestBlogPostCard',
    component: LatestBlogPostCard,
} as Meta;

const Template: Story<LatestBlogPostCardProps> = args => <LatestBlogPostCard {...args} />;
const august272020Date = new Date(1598541186000);
const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum nunc vitae massa tincidunt facilisis. Nulla ipsum velit, ornare posuere feugiat sit amet, consequat sit amet arcu. Praesent tincidunt ipsum vitae augue venenatis auctor. Donec tincidunt, mauris a cursus sagittis, nisl ipsum gravida massa, in euismod leo erat sit amet eros. Mauris erat velit, laoreet sit amet semper in, faucibus sed nulla. Suspendisse accumsan metus quis tortor venenatis, eu semper risus ornare. Nulla tempor diam at ex lobortis commodo. Sed posuere rutrum ipsum sit amet laoreet. Vivamus sagittis fermentum massa, quis rutrum massa. Maecenas consequat, eros ullamcorper tempus scelerisque, augue felis pretium urna, ac hendrerit magna odio in nisl. Sed pellentesque, urna vel vehicula vulputate, eros tortor aliquet arcu, volutpat gravida mauris ante non lectus. Cras euismod eget turpis eget blandit. Proin eu tempus tortor. Nunc tristique maximus est et condimentum.';

export const HorizontalTitle1Description1 = Template.bind({});
HorizontalTitle1Description1.args = {
    index: 0,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: 'This is a short title',
    link: 'https://quantic.edu/',
    description: '<p>This is a short description</p>',
    category: 'Yahoo Finance',
    date: august272020Date,
    orientation: ComponentOrientation.horizontal,
};

export const VerticalTitle1Description1 = Template.bind({});
VerticalTitle1Description1.args = {
    index: 1,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: 'This is a short title',
    link: 'https://quantic.edu/',
    description: '<p>This is a short description</p>',
    category: 'Yahoo Finance',
    date: august272020Date,
    orientation: ComponentOrientation.vertical,
};

export const HorizontalTitleMaxDescription1 = Template.bind({});
HorizontalTitleMaxDescription1.args = {
    index: 2,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: loremIpsum,
    link: 'https://quantic.edu/',
    description: '<p>This is a short description</p>',
    category: 'Yahoo Finance',
    date: august272020Date,
    orientation: ComponentOrientation.horizontal,
};

export const VerticalTitleMaxDescription1 = Template.bind({});
VerticalTitleMaxDescription1.args = {
    index: 4,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: loremIpsum,
    link: 'https://quantic.edu/',
    description: '<p>This is a short description</p>',
    category: 'Yahoo Finance',
    date: august272020Date,
    orientation: ComponentOrientation.vertical,
};

export const HorizontalTitleMaxDescriptionMax = Template.bind({});
HorizontalTitleMaxDescriptionMax.args = {
    index: 3,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: loremIpsum,
    link: 'https://quantic.edu/',
    description: `<div><p>${loremIpsum}</p></div>`,
    category: 'Yahoo Finance',
    date: august272020Date,
    orientation: ComponentOrientation.horizontal,
};

export const VerticalTitleMaxDescriptionMax = Template.bind({});
VerticalTitleMaxDescriptionMax.args = {
    index: 4,
    fluidImage: getMockCardBanner(),
    altText: 'mock alt text',
    title: loremIpsum,
    link: 'https://quantic.edu/',
    description: `<div><p>${loremIpsum}</p></div>`,
    category: 'Yahoo Finance',
    date: august272020Date,
    orientation: ComponentOrientation.vertical,
};
