import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RelatedTagsSection, { RelatedTagsSectionProps } from './related-tags-section';
import { generateDeterministicWpTags } from '../../utils/wpMockUtils';

export default {
    title: 'Components/RelatedTagsSection',
    component: RelatedTagsSection,
} as Meta;

const Template: Story<RelatedTagsSectionProps> = args => <RelatedTagsSection {...args} />;

export const Default = Template.bind({});
Default.args = {
    tags: generateDeterministicWpTags(10),
};
