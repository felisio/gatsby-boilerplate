import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Iconlink, { IconlinkProps } from './iconlink';
import { GlobalIconName } from '../icon/iconData';

export default {
    title: 'Components/Iconlink',
    component: Iconlink,
    argTypes: {
        iconName: {
            control: {
                type: 'select',
                options: Object.keys(GlobalIconName),
            },
        },
        enabled: [true, false],
    },
} as Meta;

const Template: Story<IconlinkProps> = args => <Iconlink {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
    iconName: GlobalIconName.facebook32,
    to: 'https://www.facebook.com/QuanticSchool',
    enabled: true,
};

export const Twitter = Template.bind({});
Twitter.args = {
    iconName: GlobalIconName.twitter32,
    to: 'https://www.twitter.com/QuanticSchool',
    enabled: true,
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
    iconName: GlobalIconName.linkedin32,
    to: 'https://www.linkedin.com/school/quanticschool/',
    enabled: true,
};

export const Instagram = Template.bind({});
Instagram.args = {
    iconName: GlobalIconName.instagram32,
    to: 'https://www.instagram.com/QuanticSchool',
    enabled: true,
};
