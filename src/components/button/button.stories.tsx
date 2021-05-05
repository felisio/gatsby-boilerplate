import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps, ButtonType } from './button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        buttonType: {
            control: {
                type: 'select',
                options: Object.values(ButtonType),
            },
        },
    },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const MediumSize = Template.bind({});
MediumSize.args = {
    buttonType: ButtonType.whiteOnBlue,
    title: 'Try a Lesson',
    to: 'https://quantic.edu/',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    buttonType: ButtonType.whiteOnBlue,
    title: 'Try a Lesson',
    to: 'https://quantic.edu/',
    size: 'large',
};

export const Block = Template.bind({});
Block.args = {
    buttonType: ButtonType.whiteOnBlue,
    title: 'Try a Lesson',
    to: 'https://quantic.edu/',
    size: 'large',
    isBlock: true,
};

export const TwoLines = Template.bind({});
TwoLines.args = {
    buttonType: ButtonType.whiteOnBlue,
    size: 'large',
    title: 'Try one of our many free lessons now!',
    to: 'https://quantic.edu/',
};

export const WhiteOnBlue = Template.bind({});
WhiteOnBlue.args = {
    buttonType: ButtonType.whiteOnBlue,
    title: 'Try a Lesson',
    to: 'https://quantic.edu/',
};

export const WatermelonOnWhite = Template.bind({});
WatermelonOnWhite.args = {
    buttonType: ButtonType.watermelonOnWhite,
    title: "Sign up - It's free",
    to: 'https://quantic.edu/',
};

export const WhiteOnWatermelon = Template.bind({});
WhiteOnWatermelon.args = {
    buttonType: ButtonType.whiteOnWatermelon,
    title: "Sign up - It's free",
    to: 'https://quantic.edu/',
};
