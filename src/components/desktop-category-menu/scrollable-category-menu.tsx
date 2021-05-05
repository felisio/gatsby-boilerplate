import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { elementScrollIntoView } from 'seamless-scroll-polyfill';
import {
    StyledScrollableCategoryMenu,
    StyledDesktopCategoryMenuControl,
    StyledDesktopCategoryList,
    StyledDesktopCategoryListItem,
} from './desktop-category-menu.styles';
import { GlobalIconName } from '../icon/iconData';
import Dropdown from '../dropdown/dropdown';
import Icon from '../icon/icon';
import { ComponentState } from '../../utils/componentState';
import { WpCategory, Maybe } from '../../../graphql-types';
import { ListItemAnchorProps } from '../list-item-anchor/list-item-anchor';

export type ScrollableCategoryMenuProps = {
    categories: Array<WpCategory>;
    selectedCategory: string;
    isSearchOpen: boolean;
    isStick?: boolean;
};

enum ScrollDirection {
    left = 'left',
    right = 'right',
}

export default function ScrollableCategoryMenu({
    categories = [],
    selectedCategory,
    isSearchOpen,
    isStick = false,
}: ScrollableCategoryMenuProps) {
    const categoriesDivRef = useRef<HTMLDivElement>(null);
    const categoriesContainerDivRef = useRef<HTMLDivElement>(null);
    const [showLeftMenuControl, setShowLeftMenuControl] = useState<boolean>(false);
    const [showRightMenuControl, setShowRightMenuControl] = useState<boolean>(false);
    const [nestedSelectedCategory, setNestedSelectedCategory] = useState<string>('');
    const [menuWrapperWidth, setMenuWrapperWidth] = useState<number>(0);

    const setMenuWrapperSize = useCallback(() => {
        if (categoriesContainerDivRef.current) {
            const menuWrapperSize = categoriesContainerDivRef.current.offsetWidth;
            setMenuWrapperWidth(menuWrapperSize);
        }
    }, []);

    const getInternalMenuSize = () =>
        (categoriesDivRef.current?.children.length &&
            [...Array.from(categoriesDivRef.current.children)].reduce(
                (prev, current) => current.clientWidth + prev + 8,
                0,
            )) ||
        0;

    const handleScroll = useCallback(() => {
        if (categoriesDivRef.current && categoriesContainerDivRef.current) {
            const { scrollLeft, offsetWidth } = categoriesDivRef.current;
            const menuSize = getInternalMenuSize();
            const menuInvisible = menuSize - menuWrapperWidth + offsetWidth / 20;
            setShowLeftMenuControl(!!scrollLeft);
            setShowRightMenuControl(!(Math.floor(scrollLeft) > menuInvisible));
        }
    }, [menuWrapperWidth]);

    const getCategoryIndexByUrl = useCallback(() => {
        let index = 0;
        index = categories.findIndex(item => item.uri === selectedCategory);
        if (index !== -1) return index;
        const nestedCategory = categories.find(item => {
            if (item.wpChildren?.nodes?.length) {
                return item.wpChildren?.nodes.find(children => children?.uri === selectedCategory);
            }
            return false;
        });
        if (nestedCategory) {
            index = categories.indexOf(nestedCategory);
            setNestedSelectedCategory(selectedCategory);
        }
        return index;
    }, [categories, selectedCategory]);

    const updateScrollPosition = useCallback(() => {
        if (selectedCategory && categoriesDivRef && categoriesDivRef.current) {
            const index = getCategoryIndexByUrl();
            const position = index === 0 ? 0 : index;

            if (navigator.userAgent.indexOf('Chrome') !== -1 || navigator.userAgent.indexOf('Firefox') !== -1) {
                categoriesDivRef.current.children[position].scrollIntoView();
            } else {
                elementScrollIntoView(categoriesDivRef.current.children[position], {});
            }
            setTimeout(() => {
                const halfPosition = categories.length / 2 + 1;
                const scrollPosition = position < halfPosition ? -50 : 0;
                categoriesDivRef.current?.scrollBy(scrollPosition, 0);
            }, 600);
        }
    }, [getCategoryIndexByUrl, selectedCategory, categories]);

    useEffect(() => {
        updateScrollPosition();
    }, [updateScrollPosition]);

    useLayoutEffect(() => {
        if (categoriesDivRef && categoriesDivRef.current) {
            categoriesDivRef.current.addEventListener('scroll', handleScroll);
        }

        const showRightArrow = () => {
            setShowRightMenuControl(true);
            if (categoriesContainerDivRef.current && categoriesDivRef.current) {
                const indexPosition = getCategoryIndexByUrl();
                const isLastItem = categories.length === indexPosition + 1;

                if (
                    categoriesDivRef.current.scrollWidth < categoriesContainerDivRef.current.offsetWidth ||
                    isLastItem
                ) {
                    setShowRightMenuControl(false);
                }
            }
        };

        const timerToShow = setTimeout(() => {
            setMenuWrapperSize();
            showRightArrow();
        }, 600);

        const updateMenu = () => {
            setMenuWrapperSize();
            handleScroll();
            clearTimeout(timerToShow);
        };

        window.addEventListener('resize', updateMenu);

        return () => {
            window.removeEventListener('resize', updateMenu);
        };
    }, [handleScroll, setMenuWrapperSize, categories, getCategoryIndexByUrl]);

    const scroll = (direction: ScrollDirection) => {
        if (categoriesDivRef.current) {
            const left = direction === ScrollDirection.left ? -300 : categoriesDivRef.current?.scrollLeft + 300;
            categoriesDivRef?.current?.scrollBy({
                left,
                behavior: 'smooth',
            });
        }
    };

    const convertSubCategoriesToDropdownOptions = (categoryList: Maybe<WpCategory>[]) => {
        return categoryList.map(item => ({
            title: item?.name,
            url: item?.uri,
        })) as [ListItemAnchorProps];
    };

    const renderCategoryList = () => {
        if (!categoriesDivRef) return null;
        return (
            <StyledDesktopCategoryList ref={categoriesDivRef}>
                {categories.map(category => {
                    if (category.wpChildren?.nodes?.length) {
                        const isActive =
                            category.wpChildren.nodes.find(item => item?.uri === selectedCategory) ||
                            selectedCategory === category.uri;
                        return (
                            <Dropdown
                                key={category.name}
                                title={category.name!}
                                linkType="category"
                                menuList={convertSubCategoriesToDropdownOptions(category.wpChildren?.nodes!)}
                                isActive={!!isActive}
                                isDarkColor
                                isOverlay
                                hasHoverBGColor
                                dropdownUrlActive={nestedSelectedCategory}
                                parentRef={categoriesDivRef.current!}
                                hasFixedPosition={isStick}
                            />
                        );
                    }

                    return (
                        <StyledDesktopCategoryListItem
                            className={selectedCategory === category.uri ? 'active' : 'inactive'}
                            key={category.name}
                            to={category.uri!}
                        >
                            {category.name}
                        </StyledDesktopCategoryListItem>
                    );
                })}
            </StyledDesktopCategoryList>
        );
    };

    return (
        <StyledScrollableCategoryMenu ref={categoriesContainerDivRef} isSearchOpen={isSearchOpen}>
            {showLeftMenuControl && (
                <StyledDesktopCategoryMenuControl className="left">
                    <button type="button" onClick={() => scroll(ScrollDirection.left)}>
                        <Icon iconName={GlobalIconName.leftChevron16} state={ComponentState.normal} />
                    </button>
                </StyledDesktopCategoryMenuControl>
            )}
            {renderCategoryList()}
            {showRightMenuControl && (
                <StyledDesktopCategoryMenuControl className="right">
                    <button type="button" onClick={() => scroll(ScrollDirection.right)}>
                        <Icon iconName={GlobalIconName.rightChevron16} state={ComponentState.normal} />
                    </button>
                </StyledDesktopCategoryMenuControl>
            )}
        </StyledScrollableCategoryMenu>
    );
}
