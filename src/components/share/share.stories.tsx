import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Share, { ShareProps } from './share';
import { ComponentOrientation } from '../../utils/componentOrientation';

export default {
    title: 'Components/Share',
    component: Share,
} as Meta;

const Template: Story<ShareProps> = args => <Share {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
    title: 'This is the blog post title',
    url: 'https://quantic.edu',
    twitterHandle: 'QuanticSchool',
    emailIntro: "Check out this article on Quantic's Blog:",
    orientation: ComponentOrientation.vertical,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    title: 'This is the blog post title',
    url: 'https://quantic.edu',
    twitterHandle: 'QuanticSchool',
    emailIntro: "Check out this article on Quantic's Blog:",
    orientation: ComponentOrientation.horizontal,
};
