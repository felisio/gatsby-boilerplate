import React, { useCallback, useEffect, useRef, useState } from 'react';
import Logo, { LogoVariation } from '../logo/logo';
import {
    StyledNavbar,
    StyledNavbarMobile,
    StyledNavBarDesktop,
    StyledNavbarToggleButton,
    StyledNavbarDivider,
    StyledNavbarLogin,
} from './navbar.styles';
import { Container } from '../../styles/Container';
import Button, { ButtonType } from '../button/button';
import AnchorLink from '../anchor-link/anchor-link';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import { ComponentState } from '../../utils/componentState';
import Dropdown from '../dropdown/dropdown';
import ListItemAnchor, { ListItemAnchorProps } from '../list-item-anchor/list-item-anchor';

export type NavbarMenuListProps = {
    title: string;
    menuList: [ListItemAnchorProps] | [[ListItemAnchorProps]];
};

export type NavbarProps = {
    navbarMenuList: NavbarMenuListProps[];
    buttonText: string;
    buttonLink: string;
    loginButtonLink: string;
    hasLoginButton: boolean;
    stick?: boolean;
    onClickMobileMenu?: (mobileMenuState: boolean) => void;
};

function Navbar({
    navbarMenuList,
    buttonLink,
    buttonText,
    loginButtonLink,
    hasLoginButton,
    stick = false,
    onClickMobileMenu,
}: NavbarProps) {
    const [isStick, setIsStick] = useState<boolean>(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (navRef.current && !openMobileMenu && stick) {
            const { top } = navRef.current.getBoundingClientRect();
            setIsStick(top < 0);
        }
    }, [openMobileMenu, stick]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.body.style.overflow = openMobileMenu ? 'hidden' : 'auto';

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, openMobileMenu]);

    const handleClickMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
        if (onClickMobileMenu) {
            onClickMobileMenu(!openMobileMenu);
        }
    };

    const renderLogo = () => {
        const logo = isStick || openMobileMenu ? LogoVariation.horizontalColor : LogoVariation.horizontalWhite;
        return (
            <AnchorLink to="/">
                <Logo variation={logo} />
            </AnchorLink>
        );
    };

    const renderMenuListMobile = (simpleMenuList: [ListItemAnchorProps]) => {
        if (!simpleMenuList.length) return null;
        return (
            <ul>
                {simpleMenuList.map(item => (
                    <ListItemAnchor key={`list-item-${item.url}`} title={item.title} url={item.url} />
                ))}
            </ul>
        );
    };

    const renderNestedMenuListMobile = (nestedMenuList: [[ListItemAnchorProps]]) => {
        if (!nestedMenuList?.length) return null;
        return nestedMenuList.map((menuList, index) => {
            return (
                <React.Fragment key={String(`nested-list-${index}`)}>
                    {renderMenuListMobile(menuList)}
                    <StyledNavbarDivider />
                </React.Fragment>
            );
        });
    };

    const isNestedList = (list: [ListItemAnchorProps] | [[ListItemAnchorProps]]) => {
        let isNested = false;
        list.forEach((item: ListItemAnchorProps | [ListItemAnchorProps]) => {
            if (Array.isArray(item)) {
                isNested = true;
            }
        });
        return isNested;
    };

    const renderNavbarMobile = () => {
        const iconHamburger = isStick ? GlobalIconName.menuWatermelon24 : GlobalIconName.menu24;
        const icon = openMobileMenu ? GlobalIconName.close24 : iconHamburger;
        return (
            <StyledNavbarMobile openMobileMenu={openMobileMenu}>
                <Container>
                    <div className="header">
                        <div>{renderLogo()}</div>
                        <div>
                            <StyledNavbarToggleButton onClick={handleClickMobileMenu}>
                                <Icon iconName={icon} state={ComponentState.normal} />
                            </StyledNavbarToggleButton>
                        </div>
                    </div>
                </Container>
                <section className="content">
                    <div className="button">
                        <Button
                            buttonType={ButtonType.whiteOnWatermelon}
                            to={buttonLink}
                            title={buttonText}
                            size="large"
                        />
                    </div>
                    <div className="menu">
                        <nav className="navigation">
                            {navbarMenuList.map(item => (
                                <div key={`menu-item-${item.title}`}>
                                    <h2>{item.title}</h2>
                                    {isNestedList(item.menuList)
                                        ? renderNestedMenuListMobile(item.menuList as [[ListItemAnchorProps]])
                                        : renderMenuListMobile(item.menuList as [ListItemAnchorProps])}
                                </div>
                            ))}
                        </nav>
                        {hasLoginButton && (
                            <StyledNavbarLogin isStick={isStick} isVisible={hasLoginButton}>
                                <StyledNavbarDivider />
                                <div>
                                    <a href={loginButtonLink}>
                                        <span>Log In</span>
                                        <Icon
                                            iconName={GlobalIconName.rightArrowPink16}
                                            state={ComponentState.normal}
                                        />
                                    </a>
                                </div>
                            </StyledNavbarLogin>
                        )}
                    </div>
                </section>
            </StyledNavbarMobile>
        );
    };

    const renderNavbarDesktop = () => {
        const buttonType = isStick ? ButtonType.whiteOnWatermelon : ButtonType.watermelonOnWhite;
        return (
            <Container>
                <StyledNavBarDesktop>
                    <div>{renderLogo()}</div>
                    <div>
                        <ul className="menu-desktop">
                            {navbarMenuList.map(item => (
                                <li key={`menu-item-${item.title}`}>
                                    <Dropdown title={item.title} menuList={item.menuList} isDarkColor={isStick} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <StyledNavbarLogin isStick={isStick} isVisible={hasLoginButton}>
                        <a href={loginButtonLink}>
                            <span>Log In</span>
                        </a>
                    </StyledNavbarLogin>
                    <div>
                        <Button buttonType={buttonType} title={buttonText} to={buttonLink} />
                    </div>
                </StyledNavBarDesktop>
            </Container>
        );
    };

    return (
        <div ref={navRef}>
            <StyledNavbar className={`${isStick ? 'stick' : ''} ${openMobileMenu ? 'is-open' : ''}`}>
                {renderNavbarMobile()}
                {renderNavbarDesktop()}
            </StyledNavbar>
        </div>
    );
}

export { Navbar };
