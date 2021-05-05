import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchResultsHeader, { SearchResultsHeaderProps } from './search-results-header';

export default {
    title: 'Components/SearchResultsHeader',
    component: SearchResultsHeader,
} as Meta;

const Template: Story<SearchResultsHeaderProps> = args => <SearchResultsHeader {...args} />;

export const IsSearching = Template.bind({});
IsSearching.args = {
    searchTerm: 'Marketing',
    isSearching: true,
};

export const FoundZeroResults = Template.bind({});
FoundZeroResults.args = {
    searchTerm: 'Marketing',
    isSearching: false,
    resultCount: 0,
};

export const FoundFiveResults = Template.bind({});
FoundFiveResults.args = {
    searchTerm: 'Marketing',
    isSearching: false,
    resultCount: 5,
};
