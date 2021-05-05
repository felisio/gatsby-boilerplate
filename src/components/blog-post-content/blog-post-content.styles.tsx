import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledBlogPostContent = styled.div`
    padding: 0;
    font-family: 'CaladeaRegular';
    font-size: 1.8rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.67;
    color: var(--fiord);
    letter-spacing: 0.11px;

    ${mediaQuery.upMd} {
        font-size: 2rem;
        line-height: 1.6;
        letter-spacing: 0.13px;
    }

    .banner {
        margin-top: 3.2rem;
        margin-bottom: 2rem;
        ${mediaQuery.upMd} {
            margin-top: 3rem;
            margin-bottom: 4rem;
        }
    }

    small {
        font-family: 'ApercuRegularPro';
        font-size: 1.4rem;
        line-height: 1.43;
        letter-spacing: normal;

        ${mediaQuery.upMd} {
            font-size: 1.2rem;
            line-height: 1.33;
        }
    }

    h1 {
        font-family: 'CaladeaBold';
        font-size: 2.4rem;
        line-height: 1.17;
        letter-spacing: 0.23px;

        ${mediaQuery.upMd} {
            font-size: 4.6rem;
            font-weight: 500;
            letter-spacing: 0.29px;
        }
    }

    h2 {
        font-family: 'CaladeaBold';
        font-size: 2.6rem;
        font-weight: bold;
        line-height: 1.23;
        letter-spacing: 0.28px;

        ${mediaQuery.upMd} {
            font-size: 2.8rem;
            line-height: 1.14;
            letter-spacing: 0.3px;
        }
    }

    h3 {
        font-family: 'CaladeaBold';
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: 0.11px;

        ${mediaQuery.upMd} {
            font-size: 2rem;
            line-height: normal;
            letter-spacing: normal;
        }
    }

    h4 {
        font-family: 'DomineRegular';
        font-size: 1.6rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 2;
        letter-spacing: 0.1px;
    }

    a {
        color: var(--text-link);
    }

    table a {
        text-decoration: none;
    }

    a:hover {
        color: var(--text-link-hover);
    }

    img,
    iframe {
        width: 100%;
        padding: 0;
        margin: 0 auto;
        object-fit: contain;
    }

    ul {
        position: relative;
        list-style: none;

        li {
            line-height: 1.56;

            ${mediaQuery.upMd} {
                line-height: 1.5;
            }

            &::before {
                display: inline-block;
                width: 1em;
                margin-left: -1em;
                font-weight: bold;
                color: var(--text-secondary);
                content: '\u2022';
            }
        }
    }

    ol {
        list-style: none;
        counter-reset: li;

        li {
            line-height: 1.67;
            counter-increment: li;

            ${mediaQuery.upMd} {
                line-height: 1.6;
            }

            &::before {
                display: inline-block;
                width: 1em;
                margin-right: 0.5em;
                margin-left: -1.5em;
                font-family: 'ApercuRegularPro';
                font-size: 1.6rem !important;
                font-weight: 500 !important;
                color: var(--text-secondary);
                text-align: right;
                letter-spacing: 0.1px !important;
                content: counter(li) '.';

                ${mediaQuery.upMd} {
                    font-size: 1.8rem !important;
                    letter-spacing: 0.11px !important;
                }
            }
        }
    }

    blockquote {
        position: relative;
        display: flex;
        padding: 0 0 0 15px;
        margin: 0 0 0 2rem;
        font-size: 2.2rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.36;
        letter-spacing: 0.14px;
        border-left: 2px solid var(--text-secondary);

        ${mediaQuery.upMd} {
            padding: 0 0 0 8.7px;
            margin: 0 0 0 8rem;
            font-size: 2.6rem;
            line-height: 1.31;
            letter-spacing: 0.16px;
        }

        p {
            padding: 0;
            margin: 0;

            &::before {
                content: open-quote;
            }

            &::after {
                content: close-quote;
            }
        }
    }

    figure {
        width: 100%;
        padding: 0;
        margin: 0;
        overflow: scroll;

        &.wp-block-table {
            ${mediaQuery.upLg} {
                display: flex;
                justify-content: center;
            }
        }
    }

    table {
        width: 100%;
        min-width: 600px;
        margin-bottom: 4rem;
        font-family: 'ApercuRegularPro';
        color: var(--fiord);
        text-align: center;
        border-spacing: 0;
        border-collapse: separate;

        ${mediaQuery.upMd} {
            max-width: 820px;
        }

        thead {
            th {
                max-width: 150px;
                padding: 0.8rem;
                font-family: 'ApercuMediumPro';
                font-size: 1.6rem;
                font-weight: 500;
                line-height: 1.38;
                background-color: var(--athens-grey-light);
                border: 1px solid var(--athens-grey);
                border-top: 2px solid var(--athens-grey);

                /* First Header Element (empty one) */
                &:first-child {
                    position: sticky;
                    left: 0;
                    width: 150px;
                    border-left: 2px solid var(--athens-grey);

                    ${mediaQuery.upMd} {
                        position: relative;
                        max-width: 230px;
                        background: transparent;
                        border-top: 0;
                        border-left: 0;
                    }
                }

                &:last-child {
                    border-right: 2px solid var(--athens-grey);
                }
            }
        }

        tbody {
            td {
                max-width: 150px;
                padding: 0.8rem;
                margin: 0;
                font-size: 1.6rem;
                line-height: 1.38;
                border: 1px solid var(--athens-grey);
            }

            /* First column - which is highlighted */
            td:first-child {
                position: sticky;
                left: 0;
                max-width: 100px;
                padding: 2.5rem 1.6rem;
                font-family: 'ApercuMediumPro';
                text-align: center;
                background-color: var(--athens-grey-light);
                border-left: 2px solid var(--athens-grey);

                ${mediaQuery.upMd} {
                    position: relative;
                    max-width: 230px;
                }
            }

            td:last-child {
                border-right: 2px solid var(--athens-grey);
            }
        }

        tr:last-child td {
            border-bottom: 2px solid var(--athens-grey);
        }
    }
`;

export { StyledBlogPostContent };
