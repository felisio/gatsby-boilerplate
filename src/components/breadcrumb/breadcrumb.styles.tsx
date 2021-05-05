import styled from 'styled-components';

const StyledBreadcrumb = styled.div`
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .link-wrapper {
        display: inline;

        img {
            margin-right: 0.6rem;
            vertical-align: top;
        }

        a {
            font-size: 1.4rem;
            font-style: normal;
            font-weight: normal;
            font-stretch: normal;
            color: var(--lynch);
            text-align: center;
            text-decoration: none;
            letter-spacing: normal;
        }

        a:hover {
            color: var(--dodger-blue-light);
            text-decoration: underline;
        }

        .active {
            color: var(--dodger-blue);
        }

        .divider {
            margin-right: 0.4rem;
            margin-left: 0.4rem;
            color: var(--lynch);
        }
    }
`;

export { StyledBreadcrumb };
