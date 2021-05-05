import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon, { IconProps } from './icon';
import { GlobalIconName } from './iconData';
import { ComponentState } from '../../utils/componentState';

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
        iconName: {
            control: {
                type: 'select',
                options: Object.values(GlobalIconName),
            },
        },
        state: {
            control: {
                type: 'select',
                options: Object.values(ComponentState),
            },
        },
    },
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Plus = Template.bind({});
Plus.args = {
    iconName: GlobalIconName.plus12,
    state: ComponentState.normal,
};
export const Minus = Template.bind({});
Minus.args = {
    iconName: GlobalIconName.minus12,
    state: ComponentState.normal,
};
export const Home = Template.bind({});
Home.args = {
    iconName: GlobalIconName.home16,
    state: ComponentState.normal,
};
export const UpChevron = Template.bind({});
UpChevron.args = {
    iconName: GlobalIconName.upChevron16,
    state: ComponentState.normal,
};
export const UpChevronWhite = Template.bind({});
UpChevronWhite.args = {
    iconName: GlobalIconName.upChevronWhite16,
    state: ComponentState.normal,
};
export const DownChevron = Template.bind({});
DownChevron.args = {
    iconName: GlobalIconName.downChevron16,
    state: ComponentState.normal,
};
export const DownChevronWhite = Template.bind({});
DownChevronWhite.args = {
    iconName: GlobalIconName.downChevronWhite16,
    state: ComponentState.normal,
};
export const LeftChevron = Template.bind({});
LeftChevron.args = {
    iconName: GlobalIconName.leftChevron16,
    state: ComponentState.normal,
};
export const RightChevron = Template.bind({});
RightChevron.args = {
    iconName: GlobalIconName.rightChevron16,
    state: ComponentState.normal,
};
export const Close = Template.bind({});
Close.args = {
    iconName: GlobalIconName.close16,
    state: ComponentState.normal,
};
export const Check = Template.bind({});
Check.args = {
    iconName: GlobalIconName.check16,
    state: ComponentState.normal,
};
export const Apple = Template.bind({});
Apple.args = {
    iconName: GlobalIconName.apple18,
    state: ComponentState.normal,
};
export const Android = Template.bind({});
Android.args = {
    iconName: GlobalIconName.android18,
    state: ComponentState.normal,
};
export const Search = Template.bind({});
Search.args = {
    iconName: GlobalIconName.search24,
    state: ComponentState.normal,
};
export const Facebook24 = Template.bind({});
Facebook24.args = {
    iconName: GlobalIconName.facebook24,
    state: ComponentState.normal,
};
export const Twitter24 = Template.bind({});
Twitter24.args = {
    iconName: GlobalIconName.twitter24,
    state: ComponentState.normal,
};
export const Instagram24 = Template.bind({});
Instagram24.args = {
    iconName: GlobalIconName.instagram24,
    state: ComponentState.normal,
};
export const LinkedIn24 = Template.bind({});
LinkedIn24.args = {
    iconName: GlobalIconName.linkedin24,
    state: ComponentState.normal,
};
export const WhatsApp24 = Template.bind({});
WhatsApp24.args = {
    iconName: GlobalIconName.whatsApp24,
    state: ComponentState.normal,
};
export const Mail24 = Template.bind({});
Mail24.args = {
    iconName: GlobalIconName.mail24,
    state: ComponentState.normal,
};
export const Link24 = Template.bind({});
Link24.args = {
    iconName: GlobalIconName.link24,
    state: ComponentState.normal,
};
export const Facebook32 = Template.bind({});
Facebook32.args = {
    iconName: GlobalIconName.facebook32,
    state: ComponentState.normal,
};
export const Twitter32 = Template.bind({});
Twitter32.args = {
    iconName: GlobalIconName.twitter32,
    state: ComponentState.normal,
};
export const Instagram32 = Template.bind({});
Instagram32.args = {
    iconName: GlobalIconName.instagram32,
    state: ComponentState.normal,
};
export const LinkedIn32 = Template.bind({});
LinkedIn32.args = {
    iconName: GlobalIconName.linkedin32,
    state: ComponentState.normal,
};
export const GooglePlay = Template.bind({});
GooglePlay.args = {
    iconName: GlobalIconName.googlePlay128,
    state: ComponentState.normal,
};
export const AppStore = Template.bind({});
AppStore.args = {
    iconName: GlobalIconName.appStore128,
    state: ComponentState.normal,
};
