import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledTopBanner = styled.div<{ isFixed: boolean }>`
    --banner-color-stop1: var(--light-plum);
    --banner-color-stop2: var(--dusky-rose);
    --banner-color-stop3: var(--dusky-rose-two);
    --text-color: rgba(255, 255, 255, 0.8);

    position: ${props => (props.isFixed ? 'fixed' : 'relative')};
    top: 0;
    left: 0;
    z-index: 3;
    display: block;
    width: 100%;
    height: 5rem;
    background-image: linear-gradient(
        to right,
        var(--banner-color-stop1) 0%,
        var(--banner-color-stop2) 50%,
        var(--banner-color-stop3) 99%
    );

    &.blue {
        --banner-color-stop1: var(--dodger-blue);
        --banner-color-stop2: var(--dodger-blue-dark);
        --banner-color-stop3: var(--dodger-blue-light);
    }

    ${mediaQuery.upSm} {
        height: 3rem;
    }
`;

const StyledTopBannerBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0.6rem 3rem;

    p {
        padding: 0;
        margin: 0;
        font-family: 'ApercuBoldPro';
        font-size: 1.4rem;
        line-height: 1.58;
        color: var(--text-color);
        text-align: center;

        ${mediaQuery.upSm} {
            font-size: 1.5rem;
            line-height: normal;
        }

        a {
            margin-left: 1.3rem;
            font-weight: bold;
            font-stretch: normal;
            color: var(--text-color);
            text-transform: uppercase;
            text-decoration: underline;

            ${mediaQuery.upSm} {
                margin-left: 2rem;
                color: var(--white);
            }
        }
    }
`;

export { StyledTopBanner, StyledTopBannerBody };
