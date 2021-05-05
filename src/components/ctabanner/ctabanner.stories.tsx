import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Ctabanner, { CtabannerProps } from './ctabanner';

export default {
    title: 'Components/Ctabanner',
    component: Ctabanner,
} as Meta;

const Template: Story<CtabannerProps> = args => <Ctabanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Ready to jump start your career?',
    subtitle: 'Start learning with Quantic.',
    buttonCta: 'Try a lesson',
    buttonDestination: 'https://quantic.edu/',
};
Primary.parameters = {
    backgrounds: { default: 'dark' },
};
