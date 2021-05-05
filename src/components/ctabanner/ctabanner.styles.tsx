import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledCtabanner = styled.section`
    position: relative;
    display: block;
    width: 100%;
    height: 346px;
    margin: 0;

    ${mediaQuery.upMd} {
        height: 218px;
    }

    .background {
        --shape-right: 11%;
        --shape-left: 100%;

        position: absolute;
        width: 100%;
        height: 100%;
        clip-path: polygon(0 0, 100% var(--shape-right), 100% 100%, 0% var(--shape-left));
        background-image: linear-gradient(159deg, var(--pink-rose), var(--wild-watermelon));

        ${mediaQuery.upSm} {
            --shape-right: 10%;
        }

        ${mediaQuery.upMd} {
            height: 218px;
            --shape-right: 19%;
            --shape-left: 91%;

            background-image: linear-gradient(83deg, #e9314e 2%, #fc6e7f 47%, var(--wild-watermelon) 95%);
        }
    }

    .foreground {
        --foreground-top: 12px;
        --foreground-shape-right: 88%;

        position: absolute;
        top: var(--foreground-top);
        width: 100%;
        height: 332px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 var(--foreground-shape-right));
        background-image: linear-gradient(to right, rgba(170, 125, 238, 0), rgba(170, 125, 238, 0.15));

        ${mediaQuery.upMd} {
            height: 204px;
            --foreground-top: 15px;
            --foreground-shape-right: 76%;

            background-image: linear-gradient(to left, rgba(170, 125, 238, 0.15), rgba(170, 125, 238, 0));
        }
    }
`;

const StyledCtabannerContent = styled.div`
    --padding-top: 1.4rem;

    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: var(--padding-top) 2.5rem 0 2.5rem;
    color: var(--white);
    text-align: center;

    ${mediaQuery.upSm} {
        --padding-top: 1.9rem;
    }

    ${mediaQuery.upMd} {
        flex-direction: row;
        --padding-top: 5.1rem;

        text-align: left;
    }

    & div:first-child {
        margin-bottom: 3.5rem;

        ${mediaQuery.upMd} {
            padding-right: 12rem;
            margin-bottom: 4.2rem;
        }
    }

    & div:last-child {
        /* TODO: remove when merged with new button version */
        a {
            width: 204px;
        }

        ${mediaQuery.upMd} {
            align-self: center;
            padding: 0 0 3.2rem 0.5rem;
        }
    }

    h2 {
        --margin-bottom: 1.3rem;

        margin: 0 0 var(--margin-bottom) 0;
        font-size: 3.2rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.19;
        color: var(--white);
        letter-spacing: 0.2px;

        ${mediaQuery.upMd} {
            line-height: 1.31;
            --margin-bottom: 0.5rem;
        }
    }

    p {
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: normal;
        opacity: 0.7;

        ${mediaQuery.upMd} {
            font-size: 2.4rem;
            line-height: normal;
            letter-spacing: 0.1px;
        }
    }
`;

export { StyledCtabanner, StyledCtabannerContent };
