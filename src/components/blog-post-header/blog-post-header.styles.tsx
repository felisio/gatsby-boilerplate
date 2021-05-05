import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledBlogPostHeader = styled.div`
    display: block;
    width: 100%;
    padding: 0;
    margin: 3rem auto 0;
    background-color: var(--white);

    header {
        padding: 0;
        margin: 0;

        .category {
            padding: 0;
            margin: 0;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: bold;
            font-stretch: normal;
            line-height: 1.5;
            color: var(--wild-watermelon);
            letter-spacing: 0.4px;
        }

        h1 {
            padding: 0;
            margin: 0.2rem 0 1rem;
        }

        .metadata {
            display: flex;
            align-items: center;

            & > div,
            .dot,
            .date {
                margin: 0 0.4rem 0 0;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.43;
                color: var(--shuttle-grey);
                letter-spacing: -0.23px;
                opacity: 0.8;
            }

            .date.lower {
                margin-top: 0.6rem;
            }
        }
    }

    ${mediaQuery.upSm} {
        width: 100%;
        margin: 5.8rem auto 0;

        header {
            padding: 0;
            margin: 0;

            .metadata {
                & > div,
                .dot,
                .date {
                    letter-spacing: normal;
                }
            }
        }
    }
`;

export { StyledBlogPostHeader };
