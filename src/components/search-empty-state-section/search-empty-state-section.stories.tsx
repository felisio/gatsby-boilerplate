import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import SearchEmptyStateSection from './search-empty-state-section';

export default {
    title: 'Components/SearchEmptyStateSection',
    component: SearchEmptyStateSection,
} as Meta;

const Template: Story = args => <SearchEmptyStateSection {...args} />;

export const Primary = Template.bind({});
