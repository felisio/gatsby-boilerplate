import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

const Container = styled.div`
    box-sizing: border-box;
    padding-right: 1.6rem;
    padding-left: 1.6rem;
    margin-right: auto;
    margin-left: auto;

    &::after,
    &::before {
        display: table;
        content: ' ';
    }

    &::after {
        clear: both;
    }

    ${mediaQuery.upSm} {
        width: 750px;
    }

    ${mediaQuery.upMd} {
        width: 970px;
    }

    ${mediaQuery.upLg} {
        width: 1170px;
    }
`;

export { Container };
