import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledFooter = styled.div`
    display: block;
    width: 100%;
    background-color: var(--white);

    hr {
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, rgba(155, 168, 187, 0), rgba(155, 168, 187, 0.3), rgba(155, 168, 187, 0));
        border-style: none;
    }

    .menu-desktop,
    .quantic-desktop,
    .legal-links-desktop {
        display: none;
    }

    .license {
        padding: 2.4rem 1.6rem 5rem 1.6rem;
        text-align: center;

        p {
            margin: 0;
            font-size: 1.2rem;
            font-style: italic;
            font-weight: normal;
            font-stretch: normal;
            line-height: normal;
            color: var(--gull-grey);
            text-align: center;
            letter-spacing: 0.17px;
        }

        .quantic-address {
            margin-top: 1.4rem;
        }

        a {
            color: var(--dodger-blue);
            text-decoration: none;
        }
    }

    .stores {
        padding: 0;
        margin: 2.6rem 0;
        text-align: center;

        .icon-container {
            margin-left: -1.2rem;
        }

        a {
            display: inline-block;
        }

        a + a {
            margin-left: 1.2rem;
        }
    }

    .social-media {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 3.7rem 0 1.7rem;

        a + a {
            margin-left: 2.5rem;
        }
    }

    .legal-links-mobile {
        width: 100%;
        padding: 0;
        margin-bottom: 2.6rem;
        text-align: center;

        li {
            list-style: none;

            a {
                font-size: 1.5rem;
                font-style: normal;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.6;
                color: var(--gull-grey);
                text-align: center;
                text-decoration: none;
                letter-spacing: 0.2px;
            }
        }
    }

    .quantic-mobile {
        padding: 2.4rem 0;
        text-align: center;

        img {
            width: 6rem;
            height: 6.4rem;
            padding: 0 0 1.6rem;
            margin: 0;
        }

        p {
            padding: 0;
            margin: 0;
            font-size: 1.3rem;
            font-style: normal;
            font-weight: normal;
            font-stretch: normal;
            line-height: normal;
            color: var(--gull-grey);
            text-align: center;
            letter-spacing: normal;
        }

        p + p {
            margin-top: 0.8rem;
        }
    }

    .menu-mobile {
        ul {
            padding: 1.5rem 4.5rem;
            margin: 0;

            li {
                padding: 0;
                margin: 0;
                list-style: none;

                img {
                    display: inline;
                    margin-right: 0.8rem;
                    vertical-align: text-bottom;
                }

                a {
                    padding: 0;
                    margin: 0;
                    font-size: 1.5rem;
                    font-style: normal;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 2.4;
                    color: var(--lynch);
                    text-decoration: none;
                    letter-spacing: 0.2px;
                }

                a:hover {
                    color: var(--fiord);
                }
            }
        }
    }

    ${mediaQuery.upMd} {
        background-color: var(--white);

        .menu-mobile,
        .quantic-mobile,
        .legal-links-mobile,
        .stores,
        hr {
            display: none;
        }

        .menu-desktop {
            display: block;
            width: fit-content;
            padding: 5rem 3.1rem;
            margin: auto;

            .quantic-logo-container,
            .empty-col {
                display: inline-block;
                width: 6rem;
                padding: 0;
                margin: 0;
                vertical-align: top;

                img {
                    width: 100%;
                }
                ${mediaQuery.upLg} {
                    margin-right: 13.5rem;
                }
            }

            .block-container {
                display: inline-block;
                margin-left: 3rem;
                vertical-align: top;

                .block + .block {
                    padding-left: 3rem;
                }

                .block {
                    display: table-cell;
                    width: 16.5rem;

                    p {
                        padding: 0;
                        margin: 0 0 0.7rem 0;
                        font-size: 1.3rem;
                        font-style: normal;
                        font-weight: 500;
                        font-stretch: normal;
                        line-height: normal;
                        color: var(--gull-grey);
                        letter-spacing: 0.2px;
                    }

                    ul {
                        padding: 0;
                        margin: 0;

                        li {
                            list-style: none;

                            img {
                                display: inline;
                                margin-right: 0.8rem;
                                vertical-align: text-bottom;
                            }

                            a {
                                display: inline;
                                font-size: 1.5rem;
                                font-style: normal;
                                font-weight: normal;
                                font-stretch: normal;
                                line-height: 2.13;
                                color: var(--shuttle-grey);
                                text-decoration: none;
                                letter-spacing: 0.2px;
                            }

                            a:hover {
                                color: var(--fiord);
                            }
                        }
                    }
                }
            }
        }

        .quantic-desktop {
            display: flex;
            width: 100%;
            padding: 18px 0 16px;
            background-color: var(--athens-grey-light);

            div {
                display: inline-table;
                width: 33.33%;
                text-align: center;

                p {
                    margin: 0;
                    font-size: 1.4rem;
                    font-style: normal;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: normal;
                    color: var(--gull-grey);
                    letter-spacing: 0.2px;
                }
            }

            .legal-links-desktop {
                display: inline-table;
                width: 33.33%;
                padding: 0;
                margin: 0;

                .inline-link {
                    display: inline;

                    a {
                        font-size: 1.4rem;
                        font-style: normal;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: normal;
                        color: var(--gull-grey);
                        text-align: right;
                        text-decoration: none;
                        letter-spacing: 0.2px;
                    }

                    a:hover {
                        color: var(--fiord);
                    }

                    .dot {
                        padding-right: 0.5rem;
                        padding-left: 0.5rem;
                    }
                }
            }
        }

        .license {
            max-width: 75rem;
            padding-top: 1.6rem;
            margin: auto;
            text-align: center;

            a:hover {
                color: var(--dodger-blue-light);
            }
        }
    }
`;

export { StyledFooter };
