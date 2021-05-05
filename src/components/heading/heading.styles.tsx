import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';
import { lineClamp } from '../../styles/utils';

const baseHeading = css<{ numberOfLines?: number }>`
    color: var(--fiord);
    ${props => props.numberOfLines && lineClamp(props.numberOfLines)}
`;

export const StyledH1 = styled.h1`
    ${baseHeading}

    font-size: 3.4rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 0.26px;

    ${mediaQuery.upMd} {
        font-size: 4.6rem;
        line-height: 1.17;
        letter-spacing: 0.4px;
    }

    &.blog-post {
        font-size: 2.4rem;
        line-height: 1.17;
        letter-spacing: 0.23px;

        ${mediaQuery.upMd} {
            font-size: 4.6rem;
            font-weight: 500;
            letter-spacing: 0.29px;
        }
    }
`;

export const StyledH2 = styled.h2`
    ${baseHeading}

    font-size: 3.2rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: 0.3px;

    &.blog-post {
        font-family: CaladeaBold;
        font-size: 2.6rem;
        font-weight: bold;
        line-height: 1.23;
        letter-spacing: 0.28px;

        ${mediaQuery.upMd} {
            font-size: 2.8rem;
            line-height: 1.14;
            letter-spacing: 0.3px;
        }
    }
`;

export const StyledH3 = styled.h3`
    ${baseHeading}

    font-size: 2rem;
    font-weight: 500;
    font-stretch: normal;
    line-height: 1.3;
    letter-spacing: normal;

    &.blog-post {
        font-family: CaladeaBold;
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: 0.11px;

        ${mediaQuery.upMd} {
            font-size: 2rem;
            line-height: normal;
            letter-spacing: normal;
        }
    }
`;

export const StyledH4 = styled.h4`
    ${baseHeading}

    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: 0.1px;

    &.blog-post {
        font-family: DomineRegular;
    }
`;
