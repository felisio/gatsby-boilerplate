import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Breadcrumb, { BreadcrumbProps, BreadcrumbPage } from './breadcrumb';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = args => <Breadcrumb {...args} />;

const homePage: BreadcrumbPage = { title: 'Home', link: '#home' };
const innovationPage: BreadcrumbPage = { title: 'Innovation', link: '#innovation' };
const blogPostPage: BreadcrumbPage = {
    title: 'Dr Noble Adapts to Create Solutions During the Pandemic',
    link: '#dr-noble-adapts-to-create-solutions-during-the-pandemic',
};

export const Example1 = Template.bind({});
Example1.args = {
    dirStructure: [homePage],
};

export const Example2 = Template.bind({});
Example2.args = {
    dirStructure: [homePage, innovationPage],
};

export const Example3 = Template.bind({});
Example3.args = {
    dirStructure: [homePage, innovationPage, blogPostPage],
};
