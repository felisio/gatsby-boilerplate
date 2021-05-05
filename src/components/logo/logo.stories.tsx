import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo, { LogoProps, LogoVariation } from './logo';

export default {
    title: 'Components/Logo',
    component: Logo,
    argTypes: {
        variation: {
            control: {
                type: 'select',
                options: Object.keys(LogoVariation),
            },
        },
    },
} as Meta;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const HorizontalWhite = Template.bind({});
HorizontalWhite.args = {
    variation: LogoVariation.horizontalWhite,
};
HorizontalWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const HorizontalColor = Template.bind({});
HorizontalColor.args = {
    variation: LogoVariation.horizontalColor,
};
export const WordmarkWhite = Template.bind({});
WordmarkWhite.args = {
    variation: LogoVariation.wordmarkWhite,
};
WordmarkWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const WordmarkColor = Template.bind({});
WordmarkColor.args = {
    variation: LogoVariation.wordmarkColor,
};
export const VerticalWhite = Template.bind({});
VerticalWhite.args = {
    variation: LogoVariation.verticalWhite,
};
VerticalWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const VerticalColor = Template.bind({});
VerticalColor.args = {
    variation: LogoVariation.verticalColor,
};
export const SymbolWhite = Template.bind({});
SymbolWhite.args = {
    variation: LogoVariation.symbolWhite,
};
SymbolWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const SymbolColor = Template.bind({});
SymbolColor.args = {
    variation: LogoVariation.symbolColor,
};
