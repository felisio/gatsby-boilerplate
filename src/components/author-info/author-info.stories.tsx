import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AuthorInfo, AuthorInfoProps } from './author-info';
import { getMockAvatar } from '../../utils/wpMockUtils';

export default {
    title: 'Components/AuthorInfo',
    component: AuthorInfo,
} as Meta;

const Template: Story<AuthorInfoProps> = args => <AuthorInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    avatar: getMockAvatar(),
    name: 'Lydia Douglas',
};
