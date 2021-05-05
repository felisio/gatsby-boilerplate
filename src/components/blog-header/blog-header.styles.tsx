import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledBlogTitle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 189px;

    ${mediaQuery.upSm} {
        height: 243px;
    }

    h1 {
        position: relative;
        top: 1rem;
        font-size: 3.4rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.35;
        color: var(--white);
        text-align: center;
        letter-spacing: 0.26px;

        ${mediaQuery.upSm} {
            position: relative;
            margin: 0;
            font-size: 4.6rem;
            line-height: 1.17;
            letter-spacing: 0.4px;
        }
    }
`;

const StyledBlogHeader = styled.header<{ hasTopBanner: boolean }>`
    position: relative;
    display: block;
    width: 100%;
    height: 185px;
    margin-top: ${props => (props.hasTopBanner ? '5rem' : 0)};

    ${mediaQuery.upSm} {
        height: 225px;
        margin-top: ${props => (props.hasTopBanner ? '3rem' : 0)};
    }

    .bg-right-top {
        position: absolute;
        top: -12px;
        right: 0;
        width: 129px;
        height: 151px;
        background-image: linear-gradient(270deg, var(--white), var(--white-transparent) 99%);
        opacity: 0.1;
        transform: skewY(10.1deg);

        ${mediaQuery.upSm} {
            right: 0;
            width: 52%;
            height: 142px;
            transform: skewY(2.4deg);
        }
    }

    .bg-right-bottom-desktop {
        display: none;

        ${mediaQuery.upSm} {
            position: absolute;
            right: 0;
            bottom: -46px;
            display: initial;
            width: 90%;
            height: 63px;
            background-image: linear-gradient(to bottom, var(--wild-watermelon) 81%, rgba(233, 49, 78, 0) 18%);
            transform: skewY(-3.9deg);
        }
    }

    .bg-left {
        position: absolute;
        top: -36px;
        z-index: -1;
        width: 100%;
        height: 190px;
        overflow: hidden;
        background-image: linear-gradient(
            66deg,
            var(--wild-watermelon) 3%,
            var(--pink-rose) 47%,
            var(--wild-watermelon) 94%
        );
        transform: skew(0deg, 1.8deg);
        transform-origin: bottom left;

        ${mediaQuery.upSm} {
            top: -70%;
            height: 158.2%;
            background-image: linear-gradient(
                82deg,
                var(--wild-watermelon) 2%,
                var(--pink-rose) 47%,
                var(--wild-watermelon) 95%
            );
            transform: skew(0deg, 1.8deg);
            transform-origin: bottom left;
        }
    }

    .bg-left-bottom {
        position: absolute;
        right: 71px;
        bottom: 28px;
        z-index: -1;
        width: 100%;
        height: 186.4px;
        background-image: linear-gradient(to left, rgba(170, 125, 238, 0) 8%, rgba(170, 125, 238, 0.2) 91%);
        transform: skewY(-5deg);
        transform-origin: top right;

        ${mediaQuery.upXs} {
            right: 94px;
            bottom: 49.6px;
        }

        ${mediaQuery.upSm} {
            right: 176px;
            bottom: 9.6px;
            height: 50%;
            transform: skewY(-2deg);
            transform-origin: center;
        }
    }

    .bg-left-top {
        position: absolute;
        top: -55px;
        width: 107px;
        height: 119px;
        background-image: linear-gradient(270deg, hsla(0, 0%, 100%, 0), var(--white) 98%);
        opacity: 0.1;
        transform: skewY(-18deg);
        transform-origin: top right;

        ${mediaQuery.upSm} {
            display: initial;
            width: 33.5%;
            height: 99px;
            background-image: linear-gradient(to left, var(--white-transparent), var(--white) 50%);
            transform: skewY(-3.5deg);
        }
    }
`;

export { StyledBlogHeader, StyledBlogTitle };
