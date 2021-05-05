import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';
import { lineClamp } from '../../styles/utils';

const titleLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(1)}
`;
const descriptionLineClamp = css<{ descriptionMaxLines?: number }>`
    ${lineClamp(2)}
`;

const StyledCategoryCard = styled.button`
    @media (max-width: 28.8rem) {
        width: 100%;
    }

    display: block;
    width: 28.8rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: var(--white);
    border: solid 1px var(--athens-grey);
    border-radius: 4px;
    outline: none;
    box-shadow: 0 10px 20px 0 var(--black-transparent-5);

    &:hover {
        box-shadow: 0 10px 20px 0 var(--black-transparent-14);
    }

    .thumbnail {
        display: block;
        width: 100%;
        height: 15.2rem;

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
        height: 10.7rem;
        padding: 1.1rem 1.6rem 2rem;
        margin: 0;

        .title {
            ${titleLineClamp}

            margin: 0 0 0.6rem 0;
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            font-stretch: normal;
            line-height: 1.3;
            color: var(--fiord);
            text-align: left;
            text-decoration: none;
            letter-spacing: normal;
        }

        .title:hover,
        .title::selection {
            color: var(--wild-watermelon);
        }

        .description {
            ${descriptionLineClamp}

            margin: 0;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.38;
            color: var(--shuttle-grey);
            text-align: left;
            letter-spacing: normal;
        }

        &:hover {
            .content-wrapper {
                .title {
                    color: var(--wild-watermelon);
                }
            }
        }
    }

    ${mediaQuery.upSm} {
        width: 35.9rem;

        .thumbnail {
            height: 19.1rem;
            padding: 0;
        }

        .content-wrapper {
            height: 10.2rem;
            padding: 1rem 1.6rem 1.6rem;
        }
    }
`;

export { StyledCategoryCard };
