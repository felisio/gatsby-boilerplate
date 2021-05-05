import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Paginator, { PaginatorProps } from './paginator';

export default {
    title: 'Components/Paginator',
    component: Paginator,
} as Meta;

const Template: Story<PaginatorProps> = args => <Paginator {...args} />;

export const Page1 = Template.bind({});
Page1.args = {
    pageCount: 4,
    currentPage: 1,
    visiblePages: 4,
    handlePageChange: () => {},
};

export const Page2 = Template.bind({});
Page2.args = {
    pageCount: 4,
    currentPage: 2,
    visiblePages: 4,
    handlePageChange: () => {},
};

export const Page3 = Template.bind({});
Page3.args = {
    pageCount: 4,
    currentPage: 3,
    visiblePages: 4,
    handlePageChange: () => {},
};

export const Page4 = Template.bind({});
Page4.args = {
    pageCount: 4,
    currentPage: 4,
    visiblePages: 4,
    handlePageChange: () => {},
};
