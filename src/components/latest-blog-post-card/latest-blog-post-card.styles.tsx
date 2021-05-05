import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';
import { lineClamp } from '../../styles/utils';

const defaultTitleLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(2)}
`;
const desktopTitleLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(3)}
`;
const defaultDescriptionLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(2)}
`;
const verticalDesktopDescriptionLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(3)}
`;

const StyledLatestBlogPostCard = styled.div`
    @media (max-width: 28.8rem) {
        width: 100%;
    }
    --card-width-mobile: 28.8rem;
    --card-width-desktop: 49.6rem;

    display: block;
    width: var(--card-width-mobile);
    height: fit-content;
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
        height: 15.3rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        div {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .content-wrapper {
        width: 100%;
        height: fit-content;
        padding: 1.1rem 1.6rem 2rem;
        margin-top: 0;

        .meta {
            display: inline;
            vertical-align: middle;

            .category {
                font-size: 1.2rem;
                font-style: normal;
                font-weight: bold;
                font-stretch: normal;
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
                font-style: normal;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.43;
                color: var(--shuttle-grey);
                letter-spacing: normal;
                opacity: 0.8;
            }
        }

        .title {
            ${defaultTitleLineClamp}

            padding: 0;
            margin: 0 0 0.6rem;

            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            font-stretch: normal;
            line-height: 1.3;
            color: var(--fiord);
            text-decoration: none;
            letter-spacing: normal;

            &::selection {
                color: var(--wild-watermelon);
            }
        }

        .description {
            ${defaultDescriptionLineClamp}

            padding: 0;
            margin: 0;

            p {
                padding: 0;
                margin: 0;
                font-size: 1.6rem;
                font-style: normal;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.38;
                color: var(--shuttle-grey);
                letter-spacing: normal;
            }
        }

        .main {
            margin-top: 0.6rem;
        }
    }

    &:active,
    &:hover {
        box-shadow: 0 10px 20px 0 var(--black-transparent-14);

        .content-wrapper {
            .title {
                color: var(--wild-watermelon);
            }
        }
    }

    ${mediaQuery.upSm} {
        width: var(--card-width-desktop);
        padding: 0;
        margin: 0;

        &.wrapper-vertical {
            height: 47.1rem;

            .thumbnail {
                height: 26.3rem;
                padding: 0;
                margin: 0;
            }

            .content-wrapper {
                padding: 1.6rem 2rem 2.4rem;

                .main {
                    margin-top: 0.7rem;

                    .title {
                        ${desktopTitleLineClamp}

                        margin: 0 0 0.6rem;
                        font-size: 2.4rem;
                        line-height: 1.25;
                    }
                }
            }
        }

        &.wrapper-horizontal {
            position: relative;
            width: 49.6rem;
            height: 22.3rem;

            .thumbnail {
                position: absolute;
                top: 0;
                left: 0;
                width: 16.7rem;
                height: 22.3rem;
            }

            .content-wrapper {
                position: absolute;
                top: 0;
                left: 16.7rem;
                width: 32.9rem;
                height: 22.3rem;
                padding: 1.7rem 2rem;

                .main {
                    padding: 0;
                    margin: 0.7rem 0 0;

                    .title {
                        ${desktopTitleLineClamp}

                        margin: 0 0 0.6rem;
                        font-size: 2.4rem;
                        line-height: 1.25;
                    }

                    .description {
                        ${verticalDesktopDescriptionLineClamp}
                    }
                }
            }
        }
    }
`;

export { StyledLatestBlogPostCard };
