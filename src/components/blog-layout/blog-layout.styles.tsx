import styled from 'styled-components';

const StyledBlogLayout = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: minmax(0, 1fr);
    min-height: 100%;

    .content {
        min-width: 0;
        max-width: 100%;

        main {
            padding-top: 2rem;
        }
    }

    .footer {
        grid-row-start: 2;
        grid-row-end: 3;
    }
`;

export { StyledBlogLayout };
