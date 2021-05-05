import styled from 'styled-components';
import { Container } from './Container';
import { mediaQuery } from './mediaQuery';

const StyledBlogPostWrapperContainer = styled(Container)`
    padding-bottom: 10rem;
`;

const StyledBlogPostContainer = styled.div`
    display: block;
    grid-gap: 3.6rem;
    justify-items: end;

    ${mediaQuery.upMd} {
        display: grid;
        grid-template-columns: 104px minmax(auto, 830px);
        width: 100%;
    }

    ${mediaQuery.upLg} {
        grid-template-columns: 132px minmax(auto, 830px);
    }

    .blog-post-content {
        max-width: 829px;
    }
`;

const StyledBlogPostSharedContainer = styled.div`
    position: relative;
    z-index: 2;
    display: none;
    padding: 7.4rem 0 33rem 0;

    ${mediaQuery.upMd} {
        display: block;
    }
`;

const StyledBlogPostDivider = styled.hr`
    display: block;
    width: 100%;
    height: 1px;
    margin: 3rem 0 2.6rem 0;
    background-image: linear-gradient(to right, rgba(60, 76, 95, 0) 0%, rgba(60, 76, 95, 0.8) 51%, rgba(60, 76, 95, 0));
    border: none;
    opacity: 0.16;
`;

const StyledBlogPostBottom = styled.div`
    width: 100%;
    ${mediaQuery.upMd} {
        display: grid;
        grid-template-columns: 118px minmax(auto, 830px);
        grid-gap: 3.6rem;

        .content {
            grid-column-start: 2;
        }
    }
`;

export {
    StyledBlogPostWrapperContainer,
    StyledBlogPostContainer,
    StyledBlogPostSharedContainer,
    StyledBlogPostDivider,
    StyledBlogPostBottom,
};
