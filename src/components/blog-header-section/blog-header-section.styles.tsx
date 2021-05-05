import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledBlogHeaderSection = styled.div`
    display: block;
`;

const StyledBlogHeaderCategoryMenu = styled.div`
    ${mediaQuery.upMd} {
        padding-top: 4rem;
    }
`;

export { StyledBlogHeaderSection, StyledBlogHeaderCategoryMenu };
