import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import BlogHeader, { BlogHeaderProps } from './blog-header';

export default {
    title: 'Components/BlogHeader',
    component: BlogHeader,
} as Meta;

const Template: Story<BlogHeaderProps> = args => <BlogHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Quantic Blog',
    navbar: <></>,
};
