import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledEmptySection = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;

    .mobile,
    .desktop {
        width: 20.3rem;
        height: 19.8rem;
        margin: auto;
    }

    .mobile {
        display: block;
    }

    .desktop {
        display: none;
    }

    .description {
        margin: 1rem auto 0;

        p {
            padding: 0;
            margin: 0;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.57;
            color: var(--shuttle-grey);
            text-align: center;
            letter-spacing: normal;

            .bolder {
                font-family: 'ApercuBoldPro';
            }
        }
    }

    ${mediaQuery.upSm} {
        .mobile {
            display: none;
        }

        .desktop {
            display: block;
            width: 31.8rem;
            height: 31rem;
        }

        .description {
            margin: 3rem auto 0;

            p {
                padding: 0;
                margin: 0;
                font-size: 1.6rem;
                line-height: 1.38;
                text-align: center;
                letter-spacing: normal;
            }
        }
    }
`;

export { StyledEmptySection };
