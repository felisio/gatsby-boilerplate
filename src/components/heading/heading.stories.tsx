import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from './heading';

export default {
    title: 'Components/Heading',
    component: Heading,
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
    children: 'Header Component H1',
};

export const H1BlogPost = Template.bind({});
H1BlogPost.args = {
    isBlogPost: true,
    children: 'Header Component H1 class Blog Post',
};

export const H2 = Template.bind({});
H2.args = {
    tag: 'h2',
    children: 'Header Component H2',
};

export const H2BlogPost = Template.bind({});
H2BlogPost.args = {
    tag: 'h2',
    isBlogPost: true,
    children: 'Header Component H2 class Blog Post',
};

export const H3 = Template.bind({});
H3.args = {
    tag: 'h3',
    children: 'Header Component H3',
};

export const H3BlogPost = Template.bind({});
H3BlogPost.args = {
    tag: 'h3',
    isBlogPost: true,
    children: 'Header Component H3 class Blog Post',
};

export const H4 = Template.bind({});
H4.args = {
    tag: 'h4',
    children: 'Header Component H4',
};

export const H4BlogPost = Template.bind({});
H4BlogPost.args = {
    tag: 'h4',
    isBlogPost: true,
    children: 'Header Component H4 class Blog Post',
};
