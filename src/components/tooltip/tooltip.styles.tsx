import styled from 'styled-components';

const StyledTooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledTooltip = styled.div`
    --arrow-size: 0.4rem;
    --arrow-border-size: 0.6rem;
    --border-color: var(--athens-grey);
    --tooltip-animation: ease-in-out 0.8;
    --background: var(--white);
    --box-shadow-top: 0 5px 10px 0 var(--black-transparent-12);
    --box-shadow-bottom: 0 5px 10px 0 var(--black-transparent-12);

    position: absolute;
    z-index: 2;
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;

    width: 170px;
    padding: 0.9rem 1rem;
    line-height: normal;
    text-decoration: none;
    background-color: var(--background);
    border-radius: 4px;

    &::before,
    &::after {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        content: '';
    }

    &.top-arrow,
    &.bottom-arrow {
        left: 50%;
        margin-left: -85px;
        border: 0.1rem solid var(--border-color);
    }

    &.top-arrow {
        top: 120%;
        box-shadow: var(--box-shadow-top);
    }

    &.bottom-arrow {
        bottom: 120%;
        box-shadow: var(--box-shadow-bottom);
    }

    &.top-arrow::before {
        bottom: calc(100% + 0.1rem);
        left: calc(50% - var(--arrow-size));
        border: var(--arrow-border-size) solid transparent;
        border-bottom-color: var(--border-color);
    }

    &.top-arrow::after {
        bottom: 100%;
        left: calc(50% - var(--arrow-size));
        border: var(--arrow-border-size) solid transparent;
        border-bottom-color: var(--background);
    }

    &.bottom-arrow::before {
        top: calc(100% + 0.1rem);
        left: calc(50% - var(--arrow-size));
        border: var(--arrow-border-size) solid transparent;
        border-top-color: var(--border-color);
    }

    &.bottom-arrow::after {
        top: 100%;
        left: calc(50% - var(--arrow-size));
        border: var(--arrow-border-size) solid transparent;
        border-top-color: var(--background);
    }

    .show,
    .hide {
        animation: var(--tooltip-animation);
    }

    .hide {
        display: none;
    }

    .show {
        display: inline;
    }

    img {
        display: inline;
        vertical-align: middle;
    }

    p {
        display: inline;
        padding: 0;
        margin: 0;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
        color: var(--shuttle-grey);
        text-align: center;
        letter-spacing: normal;
        vertical-align: middle;
    }
`;

export { StyledTooltip, StyledTooltipContainer };
