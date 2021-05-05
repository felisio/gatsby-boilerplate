import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledRelatedTagsSection = styled.div`
    display: block;
    width: 100%;

    .container {
        padding: 5rem 0 10rem;
        margin: auto;

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

        .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin-top: 4rem;

            a {
                width: fit-content;
                margin: 0 0.5rem 0.5rem;
            }
        }
    }
    ${mediaQuery.upSm} {
        .container {
            width: fit-content;
            padding: 7rem 0 10rem;

            .tags {
                margin-top: 5rem;
            }
        }
    }
`;

export { StyledRelatedTagsSection };
