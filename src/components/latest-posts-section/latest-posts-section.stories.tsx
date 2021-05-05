import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import LatestPostsSection, { LatestPostsSectionProps } from './latest-posts-section';
import { generateRandomWpPosts } from '../../utils/wpMockUtils';

export default {
    title: 'Components/LatestPostsSection',
    component: LatestPostsSection,
} as Meta;

const Template: Story<LatestPostsSectionProps> = args => <LatestPostsSection {...args} />;

export const OnePost = Template.bind({});
OnePost.args = {
    posts: generateRandomWpPosts(1),
};

export const TwoPosts = Template.bind({});
TwoPosts.args = {
    posts: generateRandomWpPosts(2),
};

export const ThreePosts = Template.bind({});
ThreePosts.args = {
    posts: generateRandomWpPosts(3),
};

export const ManyPosts = Template.bind({});
ManyPosts.args = {
    posts: generateRandomWpPosts(20),
};
