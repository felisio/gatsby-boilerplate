import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledTag = styled(props => <Link {...props} />)`
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--shuttle-grey);
    border-radius: 4px;
    border: solid 1px var(--athens-grey);
    background-color: var(--athens-grey-light);
    :hover {
        border: solid 1px var(--athens-grey);
        background-color: var(--athens-grey);
    }
    &::selection,
    &:active,
    &.selected {
        border: solid 1px var(--lynch);
        background-color: var(--lynch);
        color: white;
    }
`;

export { StyledTag };
