import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Tag, { TagProps } from './tag';

export default {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        selected: [true, false],
    },
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const NotSelected = Template.bind({});
NotSelected.args = {
    title: 'Innovation',
    selected: false,
};
NotSelected.parameters = {
    backgrounds: { default: 'dark' },
};
export const Selected = Template.bind({});
Selected.args = {
    title: 'Innovation',
    selected: true,
};
Selected.parameters = {
    backgrounds: { default: 'dark' },
};
