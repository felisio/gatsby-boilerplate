import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchResultsHeader, { SearchResultsHeaderProps } from './search-results-header';

const createTestProps = (props: SearchResultsHeaderProps) => ({
    ...props,
});

test('should verify SearchResultsHeader Component props - isSearching', () => {
    const isSearchingProps = createTestProps({
        searchTerm: 'Marketing',
        isSearching: true,
    });
    render(<SearchResultsHeader {...isSearchingProps} />);

    expect(screen.getByTestId('search')).toHaveTextContent('Marketing');
    expect(screen.getByTestId('searching')).toHaveTextContent('Searching for results...');
});

test('should verify SearchResultsHeader Component props - found zero results', () => {
    const foundZeroResultsProps = createTestProps({
        searchTerm: 'Marketing',
        isSearching: false,
        resultCount: 0,
    });
    render(<SearchResultsHeader {...foundZeroResultsProps} />);

    expect(screen.getByTestId('search')).toHaveTextContent('Marketing');
    expect(screen.getByTestId('description')).toHaveTextContent('We have found 0 results for this search');
});

test('should verify SearchResultsHeader Component props - found 5 results', () => {
    const foundZeroResultsProps = createTestProps({
        searchTerm: 'Marketing',
        isSearching: false,
        resultCount: 5,
    });
    render(<SearchResultsHeader {...foundZeroResultsProps} />);

    expect(screen.getByTestId('search')).toHaveTextContent('Marketing');
    expect(screen.getByTestId('description')).toHaveTextContent('We have found 5 results for this search');
});
