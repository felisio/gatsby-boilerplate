import styled from 'styled-components';

const StyledDropdown = styled.div<{ isOverlay: boolean }>`
    position: ${props => (props.isOverlay ? 'static' : 'relative')};
    display: block;
`;

const StyledDropdownLink = styled.div<{ isOpen: boolean }>`
    button {
        display: flex;
        padding: 0;
        margin: 0;
        font-family: 'ApercuMediumPro';
        font-size: 1.6rem;
        line-height: 1.25;
        color: var(--white);
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
        transition: 0.24s opacity ease-in-out;

        &:focus {
            border: none;
            outline: none;
        }

        &:hover {
            opacity: 0.5;
        }

        &.dark {
            color: var(--lynch);

            &:hover {
                color: var(--fiord);
                opacity: 1;
            }
        }

        &.category {
            width: max-content;
            padding: 0.7rem 1.2rem 0.8rem;
            font-size: 1.8rem;
            font-weight: normal;
            line-height: normal;
            color: var(--lynch);

            &.active,
            &.active:hover,
            &.active:focus,
            &.active:focus:hover {
                font-weight: 500;
                color: var(--white);
                background-color: var(--lynch);
                border-radius: 4px;
                box-shadow: 2px 6px 20px 0 var(--black-transparent-5);
            }

            &:focus,
            &:focus:hover,
            &:hover {
                color: var(--shuttle-grey);
                background-color: var(--athens-grey);
                border-radius: 4px;
                opacity: 1;
            }
        }

        img {
            position: relative;
            top: 1.2px;
            left: 4px;
            opacity: 0.5;
            transition: all 0.3s ease-in-out;
            transform: rotate(${props => (props.isOpen ? '-180deg' : '0deg')});
        }
    }
`;

type StyledDropdownShapeProps = {
    isOpen: boolean;
    isArrowRight: boolean;
    isOverlay: boolean;
    hasHoverBGColor: boolean;
    overlayPosition: { left: number; top: number };
};

const StyledDropdownShape = styled.div<StyledDropdownShapeProps>`
    position: ${props => (props.isOverlay ? 'fixed' : 'absolute')};
    top: ${props => (props.isOverlay ? `${Math.round(props.overlayPosition.top)}px` : '100%')};
    left: ${props => (props.isOverlay ? `${Math.round(props.overlayPosition.left)}px` : '-24px')};
    width: 20.7rem;
    padding: 1.2rem 0;
    margin-top: ${props => (props.isArrowRight ? '1.3rem' : '1.5rem')};
    margin-left: 0.5rem;
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    background-color: var(--white);
    border: solid 1px var(--athens-grey);
    border-radius: 4px;
    box-shadow: 0 0 16px 0 var(--black-transparent-12);
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: 0.2s ease-in-out;
    transform: translateY(${props => (props.isOpen ? 0 : '-8px')});

    .arrow {
        position: absolute;
        top: -10px;
        left: calc(100% - ${props => (props.isArrowRight ? '48px' : '168px')});
        display: block;
        width: 19px;
        height: 20px;
        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
        background-color: inherit;
        border: inherit;
        border-radius: 0 0 0 0.4em;
        transform: rotate(134deg);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            a {
                display: block;
                padding: 0 2.2rem;
                font-size: 1.5rem;
                font-style: normal;
                font-weight: normal;
                font-stretch: normal;
                line-height: 30px;
                color: var(--shuttle-grey);
                text-decoration: none;
                letter-spacing: normal;

                &:hover {
                    color: ${props => (props.hasHoverBGColor ? 'var(--shuttle-grey)' : 'var(--fiord)')};
                    background-color: ${props => (props.hasHoverBGColor ? 'var(--pale-grey)' : 'transparent')};
                }
            }

            &.active {
                a {
                    color: var(--wild-watermelon);

                    &:hover {
                        color: var(--wild-watermelon);
                    }
                }
            }
        }
    }

    .divider {
        width: 100%;
        height: 1px;
        margin: 1.1rem 0 1rem;
        background-color: var(--athens-grey);
    }
`;

export { StyledDropdown, StyledDropdownShape, StyledDropdownLink };
