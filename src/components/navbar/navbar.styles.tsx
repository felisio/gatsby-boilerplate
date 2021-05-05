import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledNavbar = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    transition: all 0.5s ease-in-out;

    &.stick {
        position: fixed;
        background-color: var(--white);
        box-shadow: 0 8px 20px 0 var(--black-transparent-8);
        transition: all 0.5s ease-in;
    }

    &.is-open {
        position: fixed;
        background-color: var(--white);
    }
`;

const StyledNavbarMobile = styled.div<{ openMobileMenu: boolean }>`
    display: initial;

    ${mediaQuery.upMd} {
        display: none;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.1rem 1.5rem;
    }

    .content {
        display: ${props => (props.openMobileMenu ? 'block' : 'none')};
        width: 100%;
        height: 100%;
        opacity: 1;
        animation-name: fadeInVisibility;
        animation-duration: 0.5s;
        animation-timing-function: ease-in;

        @keyframes fadeInVisibility {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        .button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.2rem 0 0.5rem 0;
        }

        .menu {
            height: calc(100vh - 123px);
            overflow: auto;
        }

        .navigation {
            padding: 2.4rem 3rem 0.2rem 3rem;

            h2 {
                padding: 0;
                margin: 0 0 0.3rem 0;
                font-size: 1.5rem;
                font-weight: normal;
                font-stretch: normal;
                line-height: normal;
                color: var(--gull-grey);
                letter-spacing: normal;
            }

            ul {
                padding: 0;
                margin: 0;
                list-style: none;

                li {
                    padding-top: 0.5rem;
                    padding-bottom: 0.8rem;

                    a {
                        font-size: 1.7rem;
                        color: var(--shuttle-grey);
                        text-decoration: none;
                        outline: none;
                        transition: 0.2s ease;

                        &:hover {
                            color: var(--fiord);
                        }
                    }
                }
            }
        }
    }
`;

const StyledNavBarDesktop = styled.div`
    display: none;
    grid-template-columns: 0.64fr auto 2fr auto;
    gap: 3rem;
    padding: 2.6rem 0 1.7rem;

    ${mediaQuery.upMd} {
        display: grid;
    }

    div {
        align-self: center;
    }

    .menu-desktop {
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;

        > li + li {
            margin-left: 2.8rem;
        }
    }
`;

const StyledNavbarToggleButton = styled.a`
    text-decoration: none;
    cursor: pointer;
    outline: none;
`;

const StyledNavbarLogin = styled.div<{ isStick: boolean; isVisible: boolean }>`
    padding-bottom: 8rem;
    visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};

    ${mediaQuery.upMd} {
        justify-self: end;
        padding-right: 0.3rem;
        padding-bottom: 0;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.7rem;
        font-weight: bold;
        color: var(--wild-watermelon);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1.02px;
        outline: none;

        ${mediaQuery.upMd} {
            font-size: 1.3rem;
            line-height: 1.23;
            color: var(${props => (props.isStick ? '--lynch' : '--white')});
            letter-spacing: 0.6px;
            transition: color 0.5s ease-in;
        }

        &:hover,
        &::selection {
            color: var(--wild-watermelon-light);

            ${mediaQuery.upMd} {
                color: var(${props => (props.isStick ? '--fiord' : '--white')});
                opacity: ${props => (props.isStick ? '1' : '0.5')};
            }
        }

        img {
            margin-left: 0.6rem;
        }
    }
`;

const StyledNavbarDivider = styled.div`
    width: 100%;
    height: 0.1rem;
    margin: 2.4rem 0 1.9rem 0;
    background-color: var(--athens-grey);
`;

export {
    StyledNavbarMobile,
    StyledNavBarDesktop,
    StyledNavbarToggleButton,
    StyledNavbar,
    StyledNavbarDivider,
    StyledNavbarLogin,
};
