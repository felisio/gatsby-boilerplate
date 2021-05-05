import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledBlogPostTags = styled.div`
    display: block;
    width: 100%;
    padding: 2rem 0 0;

    .title {
        padding: 0;
        margin: 0 0 1rem 0;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: bold;
        font-stretch: normal;
        line-height: 1.5;
        color: var(--lynch);
        letter-spacing: 0.4px;
    }

    .tags {
        a {
            margin-right: 1rem;
            margin-bottom: 0.8rem;
        }
    }

    ${mediaQuery.upMd} {
        padding: 2rem 0 0;
    }
`;

export { StyledBlogPostTags };
