import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledSearchEmptyStateSection = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;

    .mobile,
    .desktop {
        width: 20.3rem;
        height: 19.8rem;
        margin: auto;
    }

    .mobile {
        display: block;
    }

    .desktop {
        display: none;
    }

    ${mediaQuery.upSm} {
        .mobile {
            display: none;
        }

        .desktop {
            display: block;
            width: 31.8rem;
            height: 31rem;
        }
    }
`;

export { StyledSearchEmptyStateSection };
