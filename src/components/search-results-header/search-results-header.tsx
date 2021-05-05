import React from 'react';
import { StyledSearchResultsHeader } from './search-results-header.styles';

export type SearchResultsHeaderProps = {
    searchTerm: string;
    isSearching: boolean;
    resultCount?: number;
};

export default function SearchResultsHeader({ searchTerm, isSearching, resultCount }: SearchResultsHeaderProps) {
    return (
        <StyledSearchResultsHeader>
            <h2>
                Search results for:{' '}
                <span data-testid="search" className="bolder">
                    “{searchTerm}”
                </span>
            </h2>
            {isSearching && (
                <p data-testid="searching" className="description">
                    Searching for results...
                </p>
            )}
            {!isSearching && resultCount != null && (
                <p data-testid="description" className="description">
                    We have found <span className="bolder">{resultCount} results</span> for this search
                </p>
            )}
        </StyledSearchResultsHeader>
    );
}
