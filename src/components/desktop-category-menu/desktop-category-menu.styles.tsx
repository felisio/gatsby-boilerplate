import styled from 'styled-components';
import { Container } from '../../styles/Container';
import { mediaQuery } from '../../styles/mediaQuery';
import AnchorLink from '../anchor-link/anchor-link';

const StyledDesktopCategoryContainer = styled(Container)<{ isStick: boolean }>`
    display: flex;
    flex-direction: ${props => (props.isStick ? 'row' : 'column')};
    justify-content: ${props => (props.isStick ? 'space-around' : 'center')};
    justify-content: ${props => (props.isStick ? 'space-around' : 'center')};

    .content {
        position: relative;
        display: flex;
        justify-content: space-around;
        width: ${props => (props.isStick ? '63%' : '74%')};
        height: 40px;
        margin: ${props => (props.isStick ? 'initial' : 'auto')};
    }

    .line {
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 2rem;
        background: linear-gradient(
            to right,
            rgba(155, 168, 187, 0),
            rgba(155, 168, 187, 0.3) 49%,
            rgba(155, 168, 187, 0)
        );
    }
`;

const StyledDesktopCategoryMenuStick = styled.div<{ hasTopBanner: boolean }>`
    ${mediaQuery.upMd} {
        display: block;
    }

    position: fixed;
    top: ${props => (props.hasTopBanner ? '30px' : '0')};
    left: 0;
    z-index: 5;
    display: none;

    width: 100%;
    padding: 1.5rem 0;
    background-color: var(--white);
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.6s ease-in-out;
    transform: translateY(-130px);
    will-change: transform;

    &.stick {
        transform: translateY(0);
    }
`;

const StyledDesktopCategoryMenu = styled.div`
    ${mediaQuery.upMd} {
        display: flex;
    }

    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;

    height: 75px;
    padding: 1.5rem 13.2rem 0 13.2rem;
    background-color: var(--white);

    /* Safari issue to calculate height */
    @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {
            height: auto;
        }
    }
`;

const StyledDesktopCategoryButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 37%;

    .log-in {
        margin-right: 3.2rem;
        font-size: 1.3rem;
        font-weight: bold;
        line-height: 1.23;
        color: var(--lynch);
        text-align: right;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.6px;
    }
`;

const StyledScrollableCategoryMenu = styled.div<{ isSearchOpen: boolean }>`
    --menu-width: 97%;

    display: ${props => (props.isSearchOpen ? 'none' : 'block')};
    width: var(--menu-width);

    animation: ScrollableCategoryMenuAnimation 0.8s forwards;

    @keyframes ScrollableCategoryMenuAnimation {
        0% {
            width: 0;
            opacity: 0;
        }

        100% {
            width: var(--menu-width);
            opacity: 1;
        }
    }
`;

const StyledDesktopCategoryList = styled.div`
    z-index: 0;
    display: flex;
    width: 93%;
    height: 40px;
    margin-bottom: 0;
    overflow-x: scroll;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledDesktopCategoryListItem = styled(AnchorLink)`
    display: inline-flex;
    padding: 0.7rem 1.2rem 0.8rem;
    margin: 0 0.4rem;
    font-size: 1.8rem;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    background-color: var(--white);
    border: solid 1px var(--white);
    border-radius: 4px;

    &:first-of-type {
        margin-left: 0;
    }

    &:first-of-type {
        margin-left: 0;
    }

    & + a {
        margin: 0 0.4rem;
    }

    & + div {
        margin: 0 0.4rem;
    }

    &.inactive {
        font-weight: normal;
        color: var(--lynch);
    }

    &.inactive:hover {
        color: var(--shuttle-grey);
        background-color: var(--athens-grey);
        border: solid 1px var(--athens-grey);
        border-radius: 4px;
    }

    &.active {
        font-weight: 500;
        color: var(--white);
        background-color: var(--lynch);
        border-radius: 4px;
        box-shadow: 2px 6px 20px 0 rgba(0, 0, 0, 0.05);
    }
`;

const StyledDesktopCategoryMenuControl = styled.div`
    --white-opacity: rgba(255, 255, 255, 0.56);
    --black-opacity: rgba(255, 255, 255, 0);

    position: absolute;
    bottom: 0;
    z-index: 1;
    height: 40px;
    background-color: var(--white);

    button {
        position: relative;
        width: 20px;
        height: 36px;
        padding: 0;
        margin: 0;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
    }

    &.left {
        /* Safari issue to calculate the position of the arrow */
        @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
                left: -3%;
            }
        }

        &::after {
            position: absolute;
            top: -10px;
            width: 3rem;
            height: 5.6rem;
            content: '';
            background: linear-gradient(to right, var(--white), var(--white-opacity) 36%, var(--black-opacity));
        }
    }

    &.right {
        right: 6%;

        button {
            right: 10px;
        }

        &::before {
            position: absolute;
            top: -10px;
            right: 20px;
            width: 7rem;
            height: 5.6rem;
            content: '';
            background: linear-gradient(
                to left,
                var(--white) 13%,
                rgba(255, 255, 255, 0.56) 47%,
                rgba(255, 255, 255, 0)
            );
        }
    }
`;

const StyledDesktopSearch = styled.div<{ isOpen: boolean }>`
    position: relative;
    display: flex;
    width: 10%;
    padding: 0.71rem 0;
    margin: 0 0 0 auto;
    transition-duration: 1s;
    transition-property: width;

    &.search-open {
        width: 100%;

        .search-input:active,
        .search-input:focus {
            caret-color: var(--wild-watermelon);
        }

        .search-button {
            margin: 0 1.6rem 0 0;
        }
    }

    .search-button {
        display: inline-block;
        padding: 0;
        vertical-align: middle;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;

        &:focus {
            border: none;
            outline: none;
        }

        &::after {
            position: absolute;
            top: -10px;
            width: 3rem;
            height: 5.6rem;
            content: '';
            background: linear-gradient(to right, var(--white), var(--white-opacity) 36%, var(--black-opacity));
        }
    }

    .search-input {
        display: inline-block;
        display: ${props => (props.isOpen ? 'block' : 'none')};
        width: 100%;
        padding: 0 1rem 0 0;
        margin: 0;
        font-size: 1.8rem;
        color: var(--fiord);
        vertical-align: middle;
        background: transparent;
        border: none;
        outline: none;
        caret-color: var(--fiord);

        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
            display: none;
        }

        &:placeholder {
            font-size: 1.8rem;
            color: rgba(89, 104, 124, 0.8);
        }
    }

    .close-button {
        padding: 0;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-duration: 1s;
        animation-timing-function: ease-in;

        @keyframes fadeInOpacity {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }
`;

export {
    StyledDesktopCategoryContainer,
    StyledDesktopCategoryMenu,
    StyledDesktopCategoryMenuStick,
    StyledScrollableCategoryMenu,
    StyledDesktopSearch,
    StyledDesktopCategoryMenuControl,
    StyledDesktopCategoryList,
    StyledDesktopCategoryListItem,
    StyledDesktopCategoryButtons,
};
