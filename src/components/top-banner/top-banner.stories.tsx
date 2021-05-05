import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TopBanner, { TopBannerProps } from './top-banner';

export default {
    title: 'Components/TopBanner',
    component: TopBanner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TopBannerProps> = args => <TopBanner {...args} />;

export const BackgroundRed = Template.bind({});
BackgroundRed.args = {
    text: 'Here for the free MBA? Round 1 applications close May 14.',
    linkText: 'Apply now',
    linkUri: '#',
};
