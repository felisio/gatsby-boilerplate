import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledAuthorInfo = styled.div`
    display: flex;
    align-items: center;

    p {
        margin: 0 0 0 1.4rem;
        font-size: 1.6rem;
        line-height: 1.38;
        color: var(--fiord);
    }

    img {
        margin-right: 1rem;
        ${mediaQuery.upSm} {
            margin-right: 1.4rem;
        }
    }
`;

export { StyledAuthorInfo };
