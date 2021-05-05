import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { DropdownProps } from './dropdown';

import { simpleDropdownMenuList, nestedDropdownMenuList } from '../../../__mocks__/dropdown';
import { ListItemAnchorProps } from '../list-item-anchor/list-item-anchor';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    decorators: [
        StoryContainer => (
            <div style={{ padding: '3rem' }}>
                <StoryContainer />
            </div>
        ),
    ],
} as Meta;

const Template: Story<DropdownProps> = args => <Dropdown {...args} />;

export const SimpleList = Template.bind({});
SimpleList.args = {
    title: 'For Students',
    menuList: simpleDropdownMenuList as [ListItemAnchorProps],
};
SimpleList.parameters = {
    backgrounds: { default: 'dark' },
};

export const NestedList = Template.bind({});
NestedList.args = {
    title: 'For Students',
    menuList: nestedDropdownMenuList as [[ListItemAnchorProps]],
};
NestedList.parameters = {
    backgrounds: { default: 'dark' },
};

export const DarkLink = Template.bind({});
DarkLink.args = {
    title: 'For Students',
    menuList: simpleDropdownMenuList as [ListItemAnchorProps],
    isDarkColor: true,
};

export const CategoryLink = Template.bind({});
CategoryLink.args = {
    title: 'Fields of Study',
    linkType: 'category',
    menuList: nestedDropdownMenuList as [[ListItemAnchorProps]],
};

export const CategoryLinkActive = Template.bind({});
CategoryLinkActive.args = {
    title: 'Fields of Study',
    linkType: 'category',
    isActive: true,
    dropdownUrlActive: 'https://quantic.edu/executive-mba',
    menuList: nestedDropdownMenuList as [[ListItemAnchorProps]],
};
