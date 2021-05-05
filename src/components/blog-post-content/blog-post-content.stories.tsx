import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BlogPostContent, { BlogPostContentProps } from './blog-post-content';
import mockBlogPost from '../../../__mocks__/blog-post';

export default {
    title: 'Components/BlogPostContent',
    component: BlogPostContent,
} as Meta;

const Template: Story<BlogPostContentProps> = args => <BlogPostContent {...args} />;

export const Headings = Template.bind({});
Headings.args = {
    html: mockBlogPost.headings,
};

export const TextTypes = Template.bind({});
TextTypes.args = {
    html: mockBlogPost.text,
};

export const Paragraphs = Template.bind({});
Paragraphs.args = {
    html: mockBlogPost.paragraphs,
};

export const Links = Template.bind({});
Links.args = {
    html: mockBlogPost.links,
};

export const Lists = Template.bind({});
Lists.args = {
    html: mockBlogPost.lists,
};

export const Quotes = Template.bind({});
Quotes.args = {
    html: mockBlogPost.quotes,
};

export const Table = Template.bind({});
Table.args = {
    html: mockBlogPost.table,
};
