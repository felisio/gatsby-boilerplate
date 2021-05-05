import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledLatestPostsSection = styled.div`
    display: block;
    padding: 3.1rem 0 8.1rem;

    h2 {
        width: fit-content;
        padding: 0;
        margin: 0 auto;
        font-size: 3.2rem;
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.31;
        color: var(--fiord);
        text-align: center;
        letter-spacing: 0.3px;
    }

    .cards-container.center {
        width: fit-content;
        margin: 3rem auto 0;

        .card + .card {
            margin-top: 2rem;
        }
    }

    ${mediaQuery.upLg} {
        padding: 4rem 0 9.1rem;

        .cards-container {
            width: fit-content;
            margin: 5rem auto 0;

            &.center {
                width: fit-content;
                margin: 5rem auto;

                .card {
                    display: inline-block;
                    margin: 0 1.5rem;
                }

                .card + .card {
                    margin-top: 0;
                }
            }

            &.table {
                .horizontal-card-wrapper {
                    display: inline-block;
                    margin-right: 3rem;
                    vertical-align: top;
                }

                .vertical-cards-wrapper {
                    display: inline-block;
                    vertical-align: top;

                    .card + .card {
                        margin-top: 2.5rem;
                    }
                }
            }
        }
    }
`;

export { StyledLatestPostsSection };
