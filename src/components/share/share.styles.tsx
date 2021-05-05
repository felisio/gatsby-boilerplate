import styled from 'styled-components';

const StyledShare = styled.div<{ hasTopBanner: boolean }>`
    display: block;
    width: fit-content;

    .title {
        font-size: 1.2rem;
        font-style: normal;
        font-weight: bold;
        font-stretch: normal;
        line-height: 1.5;
        color: var(--lynch);
        text-align: center;
        letter-spacing: 0.4px;
    }

    .copy-link {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .share-icons {
        button {
            width: 2.4rem;
            height: 2.4rem;
        }

        .copy-link {
            padding: 0;
        }
    }

    &.vertical {
        position: sticky;
        top: ${props => (props.hasTopBanner ? '110px' : '80px')};

        .title {
            margin: 0 0 1.4rem;
        }

        .share-icons {
            width: 100%;

            button {
                display: grid;
                margin: auto;
                outline: none;
            }

            button + button {
                margin-top: 1.2rem;
            }

            .copy-link {
                padding-left: 0.6rem;
                margin-top: 1.2rem;
            }
        }
    }

    &.horizontal {
        .title {
            margin: 0 0 1rem;
            text-align: left;
        }

        .share-icons {
            width: 100%;

            /* stylelint-disable no-descending-specificity */
            button {
                display: inline;
                outline: none;
            }

            button + button {
                margin-top: 0;
                margin-left: 1.2rem;
            }

            .copy-link {
                margin-left: 1.2rem;
            }
        }
    }
`;

export { StyledShare };
