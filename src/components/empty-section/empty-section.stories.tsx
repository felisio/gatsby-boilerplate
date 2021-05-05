import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import EmptySection, { EmptySectionProps, SectionType } from './empty-section';

export default {
    title: 'Components/EmptySection',
    component: EmptySection,
} as Meta;

const Template: Story<EmptySectionProps> = args => <EmptySection {...args} />;

export const CategorySection = Template.bind({});
CategorySection.args = {
    sectionType: SectionType.category,
};

export const TagSection = Template.bind({});
TagSection.args = {
    sectionType: SectionType.tag,
};
