import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

const BreadcrumbInset = styled.div`
    display: block;

    > div {
        grid-column-start: 2;
    }

    ${mediaQuery.upMd} {
        display: grid;
        grid-template-columns: 140px minmax(auto, 830px);
        width: 100%;
    }

    ${mediaQuery.upLg} {
        grid-template-columns: 168px minmax(auto, 830px);
    }
`;

export { BreadcrumbInset };
