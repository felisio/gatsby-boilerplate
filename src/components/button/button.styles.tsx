import React from 'react';
import styled from 'styled-components';
import AnchorLink from '../anchor-link/anchor-link';

const StyledButton = styled(props => <AnchorLink {...props} />)<{ block: boolean }>`
    --standard-box-shadow: 0 1px 4px 0 var(--black-transparent-8), 0 4px 6px 0 rgba(92, 92, 92, 0.12);
    --white-on-blue-hover-box-shadow: 0 8px 12px 0 rgba(233, 253, 216, 0.02), 0 3px 8px 0 rgba(92, 92, 92, 0.12);
    --watermelon-on-white-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 6px 0 rgba(92, 92, 92, 0.12);
    --watermelon-on-white-hover-box-shadow: 0 8px 12px 0 rgba(233, 253, 216, 0.02),
        0 3px 8px 0 var(--black-transparent-12);
    --white-on-watermelon-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 6px 0 rgba(92, 92, 92, 0.12);
    --white-on-watermelon-hover-box-shadow: 0 8px 12px 0 rgba(233, 253, 216, 0.02), 0 3px 8px 0 rgba(0, 0, 0, 0.12);

    display: inline-block;
    width: ${props => (props.block ? '28.8rem' : 'auto')};
    max-width: 28.8rem;
    border-radius: 4px;
    box-shadow: var(--standard-box-shadow);
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    outline-style: none;

    &.medium {
        font-size: 1.3rem;
        line-height: 1.23;
        letter-spacing: 0.6px;
        padding: 1.2rem 2rem;
    }

    &.large {
        font-size: 1.5rem;
        line-height: normal;
        letter-spacing: 0.9px;
        padding: 1.5rem 2rem;
    }

    &.white-on-blue {
        color: var(--white);
        background-color: var(--dodger-blue);

        &:hover,
        &::selection {
            background-color: var(--dodger-blue-light);
            box-shadow: var(--white-on-blue-hover-box-shadow);
        }
    }

    &.white-on-watermelon {
        color: var(--white);
        background-color: var(--wild-watermelon);
        box-shadow: var(--white-on-watermelon-box-shadow);

        &:hover,
        &::selection {
            background-color: var(--wild-watermelon-light);
            box-shadow: var(--white-on-watermelon-hover-box-shadow);
        }
    }

    &.watermelon-on-white {
        color: var(--wild-watermelon);
        background-color: var(--white);
        box-shadow: var(--watermelon-on-white-box-shadow);

        &:hover,
        &::selection {
            opacity: 0.95;
            box-shadow: var(--watermelon-on-white-hover-box-shadow);
        }
    }
`;

export { StyledButton };
