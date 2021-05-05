import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion, { AccordionProps } from './accordion';
import Logo, { LogoVariation } from '../logo/logo';
import Heading from '../heading/heading';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import { ComponentState } from '../../utils/componentState';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = args => <Accordion {...args} />;

const Section1 = {
    title: 'Section with headlines',
    content: (
        <div>
            <Heading tag="h1">This is an H1 element.</Heading>
            <Heading tag="h2">This is an H2 element.</Heading>
            <Heading tag="h3">This is an H3 element.</Heading>
            <Heading tag="h4">This is an H4 element.</Heading>
        </div>
    ),
};
const Section2 = {
    title: 'Section with icons',
    content: (
        <div>
            <Icon iconName={GlobalIconName.facebook32} state={ComponentState.normal} />
            <Icon iconName={GlobalIconName.twitter32} state={ComponentState.normal} />
            <Icon iconName={GlobalIconName.instagram32} state={ComponentState.normal} />
            <Icon iconName={GlobalIconName.linkedin32} state={ComponentState.normal} />
        </div>
    ),
};
const Section3 = {
    title: 'Section with logos',
    content: (
        <div>
            <Logo variation={LogoVariation.horizontalColor} />
        </div>
    ),
};

export const Default = Template.bind({});
Default.args = {
    sections: [Section1, Section2, Section3],
    defaultOpenSectionTitle: Section1.title,
};
