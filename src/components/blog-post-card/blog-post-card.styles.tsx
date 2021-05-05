import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';
import { lineClamp } from '../../styles/utils';

const titleLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(2)}
`;
const desktopDescriptionLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(3)}
`;
const mobileDescriptionLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(2)}
`;

const StyledBlogPostCard = styled.div`
    @media (max-width: 28.8rem) {
        width: 100%;
    }

    display: inline-block;
    width: 28.8rem;
    height: 31.4rem;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
    background-color: var(--white);
    border: solid 1px var(--athens-grey);
    border-radius: 4px;
    outline: none;
    box-shadow: 0 10px 20px 0 var(--black-transparent-5);

    .thumbnail {
        display: block;
        width: 100%;
        height: 15.3rem;
        overflow: hidden;

        .gatsby-image-wrapper,
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .content-wrapper {
        width: 100;
        height: fit-content;
        padding: 1.1rem 1.5rem 2rem;
        margin-top: 0;

        .meta {
            display: inline;
            vertical-align: middle;

            .category {
                font-family: 'ApercuBoldPro';
                font-size: 1.2rem;
                line-height: 1.5;
                color: var(--wild-watermelon);
                letter-spacing: 0.4px;
            }

            .dot {
                margin-right: 0.4rem;
                margin-left: 0.4rem;
            }

            .date,
            .dot {
                font-size: 1.4rem;
                line-height: 1.43;
                color: var(--shuttle-grey);
                opacity: 0.8;
            }
        }

        .main {
            margin-top: 0.5rem;

            .title {
                ${titleLineClamp}

                padding: 0;
                margin: 0 0 0.6rem;
                font-size: 2rem;
                font-weight: 500;
                line-height: 1.3;
                color: var(--fiord);
                text-decoration: none;
            }

            .description {
                ${mobileDescriptionLineClamp}

                padding: 0;
                margin: 0;
                font-size: 1.6rem;
                line-height: 1.38;
                color: var(--shuttle-grey);

                p {
                    padding: 0;
                    margin: 0;
                }
            }
        }
    }

    &:active,
    &:hover {
        box-shadow: 0 10px 20px 0 var(--black-transparent-14);

        .content-wrapper .main .title {
            color: var(--wild-watermelon);
        }
    }

    ${mediaQuery.upSm} {
        width: 35.9rem;
        height: 38.4rem;

        .thumbnail {
            height: 19rem;
        }

        .content-wrapper {
            padding: 1.6rem 1.9rem 2.5rem;

            .main {
                margin-top: 0.7rem;

                .description {
                    ${desktopDescriptionLineClamp}
                }
            }
        }
    }
`;

export { StyledBlogPostCard };
