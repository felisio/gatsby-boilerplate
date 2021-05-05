import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { navigate } from 'gatsby';
import {
    StyledMobileCategoryMenu,
    StyledMobileCategoryStick,
    StyledCategorySelect,
    StyledCategorySelectSearch,
    StyledCategoryDropdownShape,
    StyledMobileCategorySubMenu,
    StyledMobileCategoryHeader,
    StyledMobileCategoryBodyHeader,
} from './mobile-category-menu.styles';
import { Maybe, WpCategory } from '../../../graphql-types';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import { ComponentState } from '../../utils/componentState';
import ListItemAnchor from '../list-item-anchor/list-item-anchor';
import useStick from '../../hooks/use-stick';

export type MobileCategoryMenuProps = {
    title?: string;
    categoryList?: Maybe<WpCategory>[];
    searchUrl?: string;
    searchValue?: string;
    urlActive?: string;
    hasTopBanner?: boolean;
    stick?: boolean;
};

export type MobileCategoryHeaderProps = {
    title?: string;
    searchUrl?: string;
    searchValue?: string;
    isDropdownOpen?: boolean;
    handleDropdown: (state: boolean) => void;
};

export type MobileCategoryBodyProps = {
    title?: string;
    categoryList?: Maybe<WpCategory>[];
    urlActive?: string;
    isDropdownOpen?: boolean;
    handleCloseDropdown: () => void;
};

function MobileCategorySubMenu({ title, categoryList, urlActive = '' }: MobileCategoryMenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const stateIcon = isOpen ? ComponentState.selected : ComponentState.normal;
    return (
        <StyledMobileCategorySubMenu isOpen={isOpen}>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <Icon iconName={GlobalIconName.downChevron16} state={stateIcon} />
            </button>
            <ul>
                {categoryList?.map(item => {
                    const isLinkActive = urlActive === item?.uri;
                    return (
                        <ListItemAnchor
                            key={item?.id}
                            title={item?.name!}
                            url={item?.uri!}
                            className={isLinkActive ? 'active' : ''}
                        />
                    );
                })}
            </ul>
        </StyledMobileCategorySubMenu>
    );
}

export function MobileCategoryHeader({
    title,
    searchUrl = 'search',
    searchValue = '',
    isDropdownOpen = false,
    handleDropdown,
}: MobileCategoryHeaderProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(searchValue);
    const [inputFocus, setInputFocus] = useState<boolean>(false);

    useEffect(() => {
        setIsSearchOpen(Boolean(searchValue));
    }, [searchValue]);
    useLayoutEffect(() => {
        const input = inputRef.current && inputRef.current;
        if (isSearchOpen && input && !inputValue) {
            input.focus();
            setInputFocus(true);
        }
    }, [isSearchOpen, inputValue]);

    const toggleInputFocus = () => setInputFocus(!inputFocus);

    const handleCloseSearch = () => {
        setInputValue('');
        setIsSearchOpen(false);
        setInputFocus(false);
    };

    const handleClickSearch = () => {
        if (isSearchOpen && inputValue) {
            navigate(`/${searchUrl}?query=${inputValue}`);
        } else {
            setIsSearchOpen(!isSearchOpen);
            handleDropdown(false);
            setInputFocus(false);
        }
    };

    const stateSelectIcon = isDropdownOpen ? ComponentState.selected : ComponentState.normal;
    const stateSearchIcon = inputFocus ? ComponentState.hover : ComponentState.normal;
    return (
        <StyledMobileCategoryHeader>
            <div>
                <div className="header">
                    <StyledCategorySelect
                        isSearchOpen={isSearchOpen}
                        isDropdownOpen={isDropdownOpen}
                        onClick={() => handleDropdown(!isDropdownOpen)}
                    >
                        <div className="title">{title}</div>
                        <Icon iconName={GlobalIconName.downChevron16} state={stateSelectIcon} />
                    </StyledCategorySelect>
                    <StyledCategorySelectSearch isOpen={isSearchOpen} className={isSearchOpen ? 'open' : ''}>
                        <button
                            type="button"
                            data-testid="search-button"
                            className="search-button"
                            aria-label="search button"
                            onClick={handleClickSearch}
                        >
                            <Icon iconName={GlobalIconName.search24} state={stateSearchIcon} />
                        </button>
                        {isSearchOpen && (
                            <>
                                <input
                                    ref={inputRef}
                                    type="search"
                                    value={inputValue}
                                    placeholder="Search here"
                                    name="search"
                                    id="search"
                                    data-testid="search-input"
                                    aria-label="search input"
                                    onChange={e => setInputValue(e.target.value)}
                                    onFocus={toggleInputFocus}
                                    onBlur={toggleInputFocus}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter') handleClickSearch();
                                    }}
                                />
                                <button
                                    type="button"
                                    className="close-button"
                                    aria-label="close search"
                                    onClick={handleCloseSearch}
                                >
                                    <Icon iconName={GlobalIconName.close16} state={ComponentState.normal} />
                                </button>
                            </>
                        )}
                    </StyledCategorySelectSearch>
                </div>
                <div className="divider" />
            </div>
        </StyledMobileCategoryHeader>
    );
}

export function MobileCategoryBody({
    title,
    categoryList,
    urlActive,
    isDropdownOpen = false,
    handleCloseDropdown,
}: MobileCategoryBodyProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [hasBorderBottom, setHasBorderBottom] = useState<boolean>(false);

    useEffect(() => {
        const containerMenuRef = containerRef?.current || null;

        const handleHeaderScroll = () => {
            if (!contentRef.current) return;
            const { top } = contentRef.current.getBoundingClientRect();
            setHasBorderBottom(!!(top < 59.99));
        };

        if (containerMenuRef && isDropdownOpen) {
            containerMenuRef.addEventListener('scroll', handleHeaderScroll);
            const topPosition = document.body.getBoundingClientRect().top;
            document.body.style.top = `${topPosition}px`;
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = '';
            const positionString = document.body.style.top.replace('px', '');
            document.body.scrollTop += Math.abs(Number(positionString));
            document.documentElement.scrollTop += Math.abs(Number(positionString));
            document.body.style.top = '';
        }

        return () => {
            containerMenuRef?.removeEventListener('scroll', handleHeaderScroll);
        };
    }, [hasBorderBottom, isDropdownOpen]);

    if (!categoryList?.length || !isDropdownOpen) return null;

    return (
        <>
            <StyledMobileCategoryBodyHeader className={hasBorderBottom ? 'border-bottom' : ''}>
                <h1>{title}</h1>
                <div>
                    <button
                        type="button"
                        className="close-button"
                        aria-label="close search"
                        onClick={() => handleCloseDropdown()}
                    >
                        <Icon iconName={GlobalIconName.close16} state={ComponentState.hover} />
                    </button>
                </div>
            </StyledMobileCategoryBodyHeader>
            <StyledCategoryDropdownShape isDropdownOpen={isDropdownOpen} ref={containerRef}>
                <div className="content" ref={contentRef}>
                    <ul>
                        {categoryList.map(item => {
                            const isLinkActive = urlActive === item?.uri;

                            if (item?.wpChildren?.nodes?.length) {
                                return (
                                    <MobileCategorySubMenu
                                        key={item.id}
                                        title={item.name!}
                                        categoryList={item.wpChildren?.nodes!}
                                        urlActive={urlActive}
                                    />
                                );
                            }
                            return (
                                <ListItemAnchor
                                    key={item?.id}
                                    title={item?.name!}
                                    url={item?.uri!}
                                    className={isLinkActive ? 'active' : ''}
                                />
                            );
                        })}
                    </ul>
                </div>
            </StyledCategoryDropdownShape>
        </>
    );
}

export default function MobileCategoryMenu({
    title = 'Select Category',
    categoryList,
    searchUrl,
    searchValue = '',
    urlActive = '',
    hasTopBanner = false,
    stick = true,
}: MobileCategoryMenuProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const { isStick, divRef } = useStick();

    const renderHeader = () => (
        <MobileCategoryHeader
            title={title}
            searchUrl={searchUrl}
            searchValue={searchValue}
            isDropdownOpen={isDropdownOpen}
            handleDropdown={setIsDropdownOpen}
        />
    );

    return (
        <div ref={divRef}>
            <StyledMobileCategoryStick hasTopBanner={hasTopBanner} showStick={stick} stick={isStick}>
                {renderHeader()}
            </StyledMobileCategoryStick>
            <StyledMobileCategoryMenu hasTopBanner={hasTopBanner}>{renderHeader()}</StyledMobileCategoryMenu>
            <MobileCategoryBody
                title={title}
                categoryList={categoryList}
                urlActive={urlActive}
                isDropdownOpen={isDropdownOpen}
                handleCloseDropdown={() => setIsDropdownOpen(false)}
            />
        </div>
    );
}
