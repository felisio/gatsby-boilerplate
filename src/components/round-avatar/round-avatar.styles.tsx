import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledRoundAvatar = styled.div`
    .gatsby-image-wrapper {
        object-fit: cover;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 1.6rem;

        ${mediaQuery.upSm} {
            width: 4rem;
            height: 4rem;
            border-radius: 2rem;
        }
    }
`;

export { StyledRoundAvatar };
