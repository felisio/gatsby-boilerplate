import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { navigate } from 'gatsby';
import { ComponentState } from '../../utils/componentState';
import { GlobalIconName } from '../icon/iconData';
import { WpCategory } from '../../../graphql-types';
import {
    StyledDesktopCategoryMenu,
    StyledDesktopCategoryMenuStick,
    StyledDesktopSearch,
    StyledDesktopCategoryButtons,
    StyledDesktopCategoryContainer,
} from './desktop-category-menu.styles';

import ScrollableCategoryMenu from './scrollable-category-menu';
import Icon from '../icon/icon';
import useStick from '../../hooks/use-stick';
import AnchorLink from '../anchor-link/anchor-link';
import Button, { ButtonType } from '../button/button';

export type DesktopCategoryMenuProps = {
    categories: Array<WpCategory>;
    selectedCategory?: string;
    searchValue?: string;
    searchUrl?: string;
    loginLink?: string;
    buttonText?: string;
    buttonLink?: string;
    hasTopBanner?: boolean;
    isStick?: boolean;
};

export type DesktopCategorySearchProps = {
    searchValue: string;
    searchUrl?: string;
    updateParentState: (active: boolean) => void;
};

export function DesktopCategorySearch({
    searchValue = '',
    searchUrl = 'search',
    updateParentState,
}: DesktopCategorySearchProps) {
    const searchInput = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const [isSearchOpen, setSearchActive] = useState<boolean>(false);
    const [isCloseIconHovered, setCloseIconHovered] = useState<boolean>(false);
    const [isSearchIconHovered, setSearchIconHovered] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(searchValue);
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [showSearchButton, setShowSearchButton] = useState<boolean>(false);

    useEffect(() => {
        setSearchActive(!!searchValue);

        if (searchValue) {
            setShowSearchButton(true);
            setInputValue(searchValue);
        }
        const timerToShow = setTimeout(() => {
            setShowSearchButton(true);
        }, 600);

        return () => {
            clearTimeout(timerToShow);
        };
    }, [searchValue]);

    useLayoutEffect(() => {
        if (isSearchOpen && searchInput && searchInput.current && !inputValue) {
            searchInput.current.focus();
            setInputFocus(true);
        }
    }, [isSearchOpen, inputValue]);

    const setSearchOpen = (active: boolean) => {
        if (!active && searchInput.current) {
            searchInput.current.value = '';
        }
        setSearchActive(active);
        updateParentState(active);
    };

    const submitSearchQuery = () => {
        if (searchInput && searchInput.current && formRef.current) {
            if (inputValue) {
                navigate(`/${searchUrl}?query=${inputValue}`);
            }
        }
    };

    const handleCloseSearch = () => {
        setSearchOpen(false);
        setCloseIconHovered(false);
        setInputValue('');
    };

    return (
        <StyledDesktopSearch ref={formRef} className={isSearchOpen ? 'search-open' : ''} isOpen={isSearchOpen}>
            {showSearchButton && (
                <button
                    type="button"
                    className="search-button"
                    onMouseEnter={() => setSearchIconHovered(!isSearchIconHovered)}
                    onMouseLeave={() => setSearchIconHovered(!isSearchIconHovered)}
                    onClick={() => (isSearchOpen ? submitSearchQuery() : setSearchOpen(true))}
                >
                    <Icon
                        iconName={GlobalIconName.search24}
                        state={inputFocus || isSearchIconHovered ? ComponentState.hover : ComponentState.normal}
                    />
                </button>
            )}
            <input
                ref={searchInput}
                type="search"
                value={inputValue}
                className="search-input"
                placeholder="Search here"
                onChange={e => setInputValue(e.target.value)}
                onFocus={() => setInputFocus(!inputFocus)}
                onBlur={() => setInputFocus(!inputFocus)}
                onKeyDown={e => {
                    if (e.key === 'Enter') submitSearchQuery();
                }}
            />
            {isSearchOpen && (
                <button
                    type="button"
                    className="close-button"
                    onMouseEnter={() => setCloseIconHovered(!isCloseIconHovered)}
                    onMouseLeave={() => setCloseIconHovered(!isCloseIconHovered)}
                    onClick={handleCloseSearch}
                >
                    <Icon
                        iconName={GlobalIconName.close16}
                        state={isCloseIconHovered ? ComponentState.hover : ComponentState.normal}
                    />
                </button>
            )}
        </StyledDesktopSearch>
    );
}

function CategoryMenuContainer({
    categories,
    selectedCategory = '',
    searchValue = '',
    searchUrl,
    isStick = false,
}: DesktopCategoryMenuProps) {
    const [isSearchOpen, setSearchActive] = useState<boolean>(Boolean(searchValue));

    return (
        <div className="content">
            <ScrollableCategoryMenu
                categories={categories}
                selectedCategory={selectedCategory}
                isSearchOpen={isSearchOpen}
                isStick={isStick}
            />
            <DesktopCategorySearch
                searchValue={searchValue}
                searchUrl={searchUrl!}
                updateParentState={active => setSearchActive(active)}
            />
        </div>
    );
}

export default function DesktopCategoryMenu({
    categories,
    selectedCategory,
    searchValue = '',
    searchUrl,
    loginLink = '',
    buttonText = '',
    buttonLink = '',
    hasTopBanner = false,
}: DesktopCategoryMenuProps) {
    const { isStick, divRef } = useStick();

    const renderButtons = () => {
        return (
            <StyledDesktopCategoryButtons>
                <AnchorLink to={loginLink} className="log-in">
                    Log In
                </AnchorLink>
                <Button to={buttonLink} title={buttonText} buttonType={ButtonType.whiteOnWatermelon} />
            </StyledDesktopCategoryButtons>
        );
    };

    const renderMenu = (stick: boolean) => (
        <CategoryMenuContainer
            categories={categories}
            selectedCategory={selectedCategory}
            searchValue={searchValue}
            searchUrl={searchUrl}
            isStick={stick}
        />
    );

    const renderStickMenu = () => (
        <StyledDesktopCategoryMenuStick hasTopBanner={hasTopBanner} className={isStick ? 'stick' : ''}>
            <StyledDesktopCategoryContainer isStick>
                {renderMenu(true)}
                {renderButtons()}
            </StyledDesktopCategoryContainer>
        </StyledDesktopCategoryMenuStick>
    );

    return (
        <div ref={divRef}>
            {renderStickMenu()}
            <StyledDesktopCategoryMenu>
                <StyledDesktopCategoryContainer isStick={false}>
                    {renderMenu(false)}
                    <span className="line" />
                </StyledDesktopCategoryContainer>
            </StyledDesktopCategoryMenu>
        </div>
    );
}
