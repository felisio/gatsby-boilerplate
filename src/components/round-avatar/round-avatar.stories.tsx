import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RoundAvatar, { RoundAvatarProps } from './round-avatar';
import { getMockAvatar } from '../../utils/wpMockUtils';

export default {
    title: 'Components/RoundAvatar',
    component: RoundAvatar,
} as Meta;

const Template: Story<RoundAvatarProps> = args => <RoundAvatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    avatar: getMockAvatar(),
    alt: 'author-avatar',
};
