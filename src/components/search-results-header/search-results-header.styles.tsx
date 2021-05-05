import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledSearchResultsHeader = styled.div`
    padding: 0;
    margin: 0;

    .bolder {
        font-family: 'ApercuBoldPro';
    }

    h2 {
        width: fit-content;
        padding: 0;
        margin: 0 auto;
        font-size: 2.8rem;
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.14;
        color: var(--fiord);
        text-align: center;
        letter-spacing: 0.26px;
    }

    .description {
        width: fit-content;
        padding: 0;
        margin: 1rem auto 0;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.57;
        color: var(--shuttle-grey);
        text-align: center;
        letter-spacing: normal;
    }

    ${mediaQuery.upSm} {
        h2 {
            font-size: 3.2rem;
            line-height: 1.31;
            letter-spacing: 0.3px;
        }

        .description {
            font-size: 1.6rem;
            line-height: 1.38;
        }
    }
`;

export { StyledSearchResultsHeader };
