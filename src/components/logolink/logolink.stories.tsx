import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logolink, LogolinkProps } from './logolink';
import { LogoVariation } from '../logo/logo';

export default {
    title: 'Components/Logolink',
    component: Logolink,
    argTypes: {
        variation: {
            control: {
                type: 'select',
                options: Object.values(LogoVariation),
            },
        },
    },
} as Meta;

const Template: Story<LogolinkProps> = args => <Logolink {...args} />;

export const HorizontalWhite = Template.bind({});
HorizontalWhite.args = {
    variation: LogoVariation.horizontalWhite,
    to: 'https://quantic.edu/',
};
HorizontalWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const HorizontalColor = Template.bind({});
HorizontalColor.args = {
    variation: LogoVariation.horizontalColor,
    to: 'https://quantic.edu/',
};
export const WordmarkWhite = Template.bind({});
WordmarkWhite.args = {
    variation: LogoVariation.wordmarkWhite,
    to: 'https://quantic.edu/',
};
WordmarkWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const WordmarkColor = Template.bind({});
WordmarkColor.args = {
    variation: LogoVariation.wordmarkColor,
    to: 'https://quantic.edu/',
};
export const VerticalWhite = Template.bind({});
VerticalWhite.args = {
    variation: LogoVariation.verticalWhite,
    to: 'https://quantic.edu/',
};
VerticalWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const VerticalColor = Template.bind({});
VerticalColor.args = {
    variation: LogoVariation.verticalColor,
    to: 'https://quantic.edu/',
};
export const SymbolWhite = Template.bind({});
SymbolWhite.args = {
    variation: LogoVariation.symbolWhite,
    to: 'https://quantic.edu/',
};
SymbolWhite.parameters = {
    backgrounds: { default: 'dark' },
};
export const SymbolColor = Template.bind({});
SymbolColor.args = {
    variation: LogoVariation.symbolColor,
    to: 'https://quantic.edu/',
};
