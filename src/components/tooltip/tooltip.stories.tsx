import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Tooltip, { ArrowPosition, TooltipProps } from './tooltip';
import { GlobalIconName } from '../icon/iconData';
import Button, { ButtonType } from '../button/button';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        iconName: {
            control: {
                type: 'select',
                options: Object.keys(GlobalIconName),
            },
        },
        arrowPosition: {
            control: {
                type: 'select',
                options: Object.keys(ArrowPosition),
            },
        },
    },
    decorators: [
        StoryContainer => (
            <div style={{ padding: '10rem' }}>
                <StoryContainer />
            </div>
        ),
    ],
} as Meta;

const Template: Story<TooltipProps> = args => <Tooltip {...args} />;

export const TopArrow = Template.bind({});
TopArrow.args = {
    isVisible: true,
    message: 'This is a tooltip',
    iconName: GlobalIconName.close16,
    arrowPosition: ArrowPosition.top,
    children: <Button buttonType={ButtonType.whiteOnBlue} title="Tooltip Top Arrow" to="/" />,
};
TopArrow.parameters = {
    backgrounds: { default: 'light' },
};

export const BottomArrow = Template.bind({});
BottomArrow.args = {
    isVisible: true,
    message: 'This is a tooltip',
    iconName: GlobalIconName.close16,
    arrowPosition: ArrowPosition.bottom,
    children: <Button buttonType={ButtonType.whiteOnBlue} title="Tooltip Bottom Arrow" to="/" />,
};
BottomArrow.parameters = {
    backgrounds: { default: 'light' },
};
