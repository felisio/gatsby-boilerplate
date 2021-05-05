import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import MobileCategoryMenu, { MobileCategoryMenuProps } from './mobile-category-menu';
import categoryList from '../../../__mocks__/category-menu';
import { WpCategory } from '../../../graphql-types';

export default {
    title: 'Components/MobileCategoryMenu',
    component: MobileCategoryMenu,
    decorators: [
        StoryContainer => (
            <div>
                <StoryContainer />
            </div>
        ),
    ],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6',
        },
        chromatic: { viewports: [375] }, // width of iPhone 6
    },
} as Meta;

const Template: Story<MobileCategoryMenuProps> = args => <MobileCategoryMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Select Category',
    categoryList: categoryList as WpCategory[],
};

export const WithSearchValue = Template.bind({});
WithSearchValue.args = {
    title: 'Select Category',
    categoryList: categoryList as WpCategory[],
    searchValue: 'Quantic search',
};

export const WithActiveLink = Template.bind({});
WithActiveLink.args = {
    title: 'Select Category',
    categoryList: categoryList as WpCategory[],
    urlActive: '/category/entrepreneurship/',
};
