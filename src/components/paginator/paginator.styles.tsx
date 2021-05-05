import styled from 'styled-components';

const StyledPaginator = styled.div`
    button {
        display: inline;
        padding: 0.8rem 0.6rem;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: bold;
        font-stretch: normal;
        line-height: 1;
        color: var(--fiord);
        text-align: center;
        letter-spacing: normal;
        cursor: pointer;
        background-color: transparent;
        border: transparent;
        border-radius: 4px;
        outline: none;
        outline-style: none;

        :hover {
            background-color: var(--athens-grey);
        }
    }

    button:not(.hide) + button:not(.hide) {
        margin-left: 0.6rem;
    }

    .control {
        line-height: normal;
        color: var(--dodger-blue);
    }

    .current {
        color: var(--white);
        background-color: var(--dodger-blue);

        :hover {
            background-color: var(--dodger-blue);
        }
    }

    .hide {
        display: none;
    }
`;

export { StyledPaginator };
