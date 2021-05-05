import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BlogPostHeader, { BlogPostHeaderProps } from './blog-post-header';
import { getMockAvatar } from '../../utils/wpMockUtils';

export default {
    title: 'Components/BlogPostHeader',
    component: BlogPostHeader,
} as Meta;

const Template: Story<BlogPostHeaderProps> = args => <BlogPostHeader {...args} />;
const august272020Date = new Date(1598541186000);

export const WithAuthor = Template.bind({});
WithAuthor.args = {
    category: 'Innovation',
    title: 'Dr. Noble Adapts to Create Solutions During the Pandemic',
    authorAvatar: getMockAvatar(),
    authorName: 'Lydia Douglas',
    showAuthor: true,
    postDate: august272020Date,
};

export const WithoutAuthor = Template.bind({});
WithoutAuthor.args = {
    category: 'Innovation',
    title: 'Dr. Noble Adapts to Create Solutions During the Pandemic',
    postDate: august272020Date,
};
