import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BlogPostTags, { BlogPostTagsProps } from './blog-post-tags';
import { generateDeterministicWpTags } from '../../utils/wpMockUtils';

export default {
    title: 'Components/BlogPostTags',
    component: BlogPostTags,
} as Meta;

const Template: Story<BlogPostTagsProps> = args => <BlogPostTags {...args} />;

export const Default = Template.bind({});
Default.args = {
    tags: generateDeterministicWpTags(10),
};
