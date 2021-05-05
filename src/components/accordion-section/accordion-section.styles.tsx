import styled from 'styled-components';

const StyledAccordionSection = styled.div`
    width: 100%;

    .header {
        position: relative;
        display: block;
        width: 100%;
        height: 5.6rem;
        padding: 2.2rem 2.5rem 1.8rem;
        cursor: pointer;
        background-color: var(--athens-grey-light);
        border: none;
        border-bottom: 1px solid var(--athens-grey);
        outline: none;

        .title {
            float: left;

            /**
            * makes sure that title doesn't overlap with icon
            * which is positioned absolutely:
            * - icon width: 1.2rem
            * - margin between title and icon: 0.6rem
            */
            max-width: calc(100% - 1.2rem - 0.6rem);
            overflow: hidden;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            font-stretch: normal;
            line-height: normal;
            color: var(--shuttle-grey);
            text-overflow: ellipsis;
            letter-spacing: 0.3px;
            white-space: nowrap;
        }

        .icon {
            position: absolute;
            top: 22;
            right: 2.5rem;
            width: 1.2rem;
            height: 1.2rem;

            &.show {
                opacity: 1;
                transition: 0.2s ease;
            }

            &.hide {
                opacity: 0;
                transition: 0.2s ease;
            }
        }
    }

    .content-container {
        max-height: 0;
        overflow: hidden;
        background-color: var(--white);
        transition-timing-function: ease-in-out;
        transition-duration: 0.2s;
        transition-property: max-height;
    }

    .content-container.open {
        border-bottom: 1px solid var(--athens-grey);
    }

    .content-container.closed {
        max-height: 0;
    }
`;

export { StyledAccordionSection };
