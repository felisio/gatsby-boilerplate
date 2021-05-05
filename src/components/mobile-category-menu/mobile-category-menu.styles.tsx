import styled, { css } from 'styled-components';
import { Container } from '../../styles/Container';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledMobileCategoryHeader = styled(Container)`
    .header {
        display: flex;
        justify-content: flex-end;
        height: 22px;
        padding: 0 0.9rem;
        margin-bottom: 0.8rem;
    }

    .divider {
        width: 100%;
        height: 1px;
        background-image: linear-gradient(
            to right,
            rgba(155, 168, 187, 0),
            rgba(155, 168, 187, 0.3) 49%,
            rgba(155, 168, 187, 0)
        );
    }
`;

const StyledMobileCategoryStick = styled.div<{ hasTopBanner: boolean; showStick: boolean; stick: boolean }>`
    --menu-margin-top: 50px;

    position: fixed;
    top: ${props => (props.hasTopBanner ? 'var(--menu-margin-top)' : '0')};
    z-index: 5;
    display: ${props => (props.showStick ? 'block' : 'none')};

    width: 100%;
    padding: 2.3rem 0 2rem;
    background-color: var(--white);
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.6s ease-in-out;
    transform: ${props => (props.stick ? 'translateY(0)' : 'translateY(-130px)')};
    will-change: transform;

    ${mediaQuery.upSm} {
        --menu-margin-top: 30px;
    }

    ${mediaQuery.upMd} {
        display: none;
    }
`;

const StyledMobileCategoryMenu = styled.div<{ hasTopBanner: boolean }>`
    ${mediaQuery.upMd} {
        display: none;
    }

    display: block;
    width: 100%;
    padding: 2.3rem 0 2rem;

    &.stick {
        position: fixed;
        top: ${props => (props.hasTopBanner ? '50px' : '0')};
        background-color: var(--white);
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease-in;
        animation-name: topDown;
        animation-duration: 0.5s;
        animation-timing-function: ease-in;
        will-change: transform;

        @keyframes topDown {
            0% {
                top: -40px;
            }

            100% {
                top: ${props => (props.hasTopBanner ? '50px' : '0')};
            }
        }
    }
`;

const StyledCategorySelect = styled.div<{ isSearchOpen: boolean; isDropdownOpen: boolean }>`
    display: ${props => (props.isSearchOpen ? 'none' : 'flex')};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right: 0.1rem;
    cursor: pointer;
    animation: ContentAnimation 0.8s forwards;

    @keyframes ContentAnimation {
        0% {
            width: 0;
            opacity: 0;
        }

        100% {
            width: 100%;
            opacity: 1;
        }
    }

    .title {
        max-width: 100%;
        overflow: hidden;
        font-size: 1.8rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: normal;
        color: var(${props => (props.isDropdownOpen ? '--fiord' : '--lynch')});
        text-overflow: ellipsis;
        letter-spacing: normal;
        white-space: nowrap;
    }

    img {
        transition: all 0.5s ease-in-out;
        transform: rotate(${props => (props.isDropdownOpen ? '-180deg' : '0deg')});
    }
`;

const StyledCategorySelectSearch = styled.div<{ isOpen: boolean }>`
    position: relative;
    display: flex;
    width: 50px;
    transition-duration: 1s;
    transition-property: width;

    &.open {
        width: 100%;
    }

    button {
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;

        &:focus {
            border: none;
            outline: none;
        }
    }

    .search-button {
        padding: ${props => (props.isOpen ? '0' : '0 0 0 1.6rem')};
        transition: 0.4s ease-in-out;
    }

    .close-button {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 1;
        animation-name: fadeInVisibility;
        animation-duration: 1s;
        animation-timing-function: ease-in;

        @keyframes fadeInVisibility {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }

    input[type='search'] {
        display: block;
        width: 80%;
        padding: 0 0 0 0.9rem;
        font-size: 1.8rem;
        color: var(--fiord);
        background-color: transparent;
        border: none;
        caret-color: var(--wild-watermelon);

        /* clears the ‘X’ from Chrome */
        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
            display: none;
        }

        &:focus {
            border: none;
            outline: none;
        }
    }
`;

const sharedLinkStyles = css`
    a {
        display: block;
    }

    a,
    button {
        padding: 0.4rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2;
        color: var(--shuttle-grey);
        text-decoration: none;
        letter-spacing: 0.23px;
        transition: 0.2s ease;
    }

    &.active {
        a {
            color: var(--wild-watermelon);
        }
    }
`;

const StyledMobileCategoryBodyHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 1rem 1.5rem 1.3rem 2.4rem;
    overflow-y: hidden;
    background-color: var(--white);

    &.border-bottom {
        &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            content: '';
            background-color: rgba(121, 137, 159, 0.8);
            opacity: 0.15;
        }
    }

    h1 {
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
        font-weight: 500;
        font-stretch: normal;
        color: var(--wild-watermelon);
        letter-spacing: normal;
    }

    button {
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;

        &:focus {
            border: none;
            outline: none;
        }
    }
`;

const StyledCategoryDropdownShape = styled.div<{ isDropdownOpen: boolean }>`
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 19;
    display: block;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    pointer-events: ${props => (props.isDropdownOpen ? 'auto' : 'none')};
    background-color: var(--white);
    background-clip: padding-box;
    opacity: ${props => (props.isDropdownOpen ? 1 : 0)};
    transition: 0.2s ease-in-out;
    transform: translateY(${props => (props.isDropdownOpen ? 0 : '-8px')});

    --padding-bottom: calc(100% - 22em);

    .content {
        padding: 0 2.4rem var(--padding-bottom) 2.4rem;

        @media (orientation: landscape) {
            --padding-bottom: calc(50% - 22em);
        }
    }

    ul {
        padding: 0;
        margin: 0;
        overflow: auto;
        list-style: none;

        li {
            &.submenu {
                --border-color: rgba(121, 137, 159, 0.1);

                border-top: 1px solid var(--border-color);
                border-bottom: 1px solid var(--border-color);

                &:last-child {
                    border-bottom: none;
                }

                &:first-child {
                    border-top: none;
                }
            }

            ${sharedLinkStyles}
        }
    }
`;

const StyledMobileCategorySubMenu = styled.li<{ isOpen: boolean }>`
    --border-color: rgba(121, 137, 159, 0.1);

    margin-top: 0.4rem;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: none;
    }

    &:first-child {
        border-top: none;
    }

    button {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: start;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;

        &:focus {
            border: none;
            outline: none;
        }

        img {
            position: relative;
            top: 9px;
            transition: all 0.5s ease-in-out;
            transform: rotate(${props => (props.isOpen ? '-180deg' : '0deg')});
        }
    }

    ul {
        display: ${props => (props.isOpen ? 'initial' : 'none')};
        width: 100%;
        opacity: ${props => (props.isOpen ? 1 : 0)};
        transition: 0.2s ease-in-out;
        transform: translateY(${props => (props.isOpen ? 0 : '-8px')});

        li {
            padding-left: 1.6rem;

            ${sharedLinkStyles}
        }
    }
`;

export {
    StyledMobileCategoryMenu,
    StyledMobileCategoryStick,
    StyledMobileCategoryHeader,
    StyledCategorySelect,
    StyledCategorySelectSearch,
    StyledCategoryDropdownShape,
    StyledMobileCategorySubMenu,
    StyledMobileCategoryBodyHeader,
};
