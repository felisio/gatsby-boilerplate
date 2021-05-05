import React from 'react';
import { StyledSearchEmptyStateSection } from './search-empty-state-section.styles';
import emptyStateSm from '../../assets/images/search-empty-state-sm.svg';
import emptyStateLg from '../../assets/images/search-empty-state-lg.svg';

export default function SearchEmptyStateSection() {
    const alt = 'Search found no results';
    return (
        <StyledSearchEmptyStateSection>
            <img className="mobile" alt={alt} src={emptyStateSm} />
            <img className="desktop" alt={alt} src={emptyStateLg} />
        </StyledSearchEmptyStateSection>
    );
}
