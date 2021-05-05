import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ComponentState } from '../../utils/componentState';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import ListItemAnchor, { ListItemAnchorProps } from '../list-item-anchor/list-item-anchor';
import { StyledDropdown, StyledDropdownShape, StyledDropdownLink } from './dropdown.styles';

export type DropdownProps = {
    title: string;
    menuList: [ListItemAnchorProps] | [[ListItemAnchorProps]];
    linkType?: 'default' | 'category';
    isActive?: boolean;
    isDarkColor?: boolean;
    isOverlay?: boolean;
    hasFixedPosition?: boolean;
    hasHoverBGColor?: boolean;
    dropdownUrlActive?: string;
    parentRef?: HTMLDivElement;
};

export default function Dropdown({
    title,
    menuList,
    linkType = 'default',
    isActive = false,
    isDarkColor = false,
    isOverlay = false,
    hasFixedPosition = false,
    hasHoverBGColor = false,
    dropdownUrlActive = '',
    parentRef,
}: DropdownProps) {
    const dropdownLinkRef = useRef<HTMLDivElement>(null);
    const dropdownShapeRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [overlayPosition, setOverlayPosition] = useState<{ left: number; top: number }>({
        left: 0,
        top: 0,
    });

    const handleOverlayScroll = useCallback(() => {
        const linkPosition = dropdownLinkRef.current?.getBoundingClientRect();
        const topPosition = hasFixedPosition ? 10 : 40;
        const top = linkPosition?.top ? linkPosition?.top + topPosition : 0;
        const left = linkPosition?.left ? linkPosition?.left - 28 : 0;
        setOverlayPosition({ left, top });
    }, [hasFixedPosition]);

    const handleClick = useCallback(() => {
        if (isOverlay && parentRef) {
            handleOverlayScroll();
        }
        if (isOpen) setIsOpen(false);
    }, [isOpen, isOverlay, parentRef, handleOverlayScroll]);

    useEffect(() => {
        document.addEventListener('click', handleClick);

        const handleScroll = () => {
            setIsOpen(false);
            handleOverlayScroll();
        };

        if (isOverlay && parentRef) {
            handleOverlayScroll();
            parentRef.addEventListener('scroll', handleScroll);
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);
        }
        return () => {
            document.removeEventListener('click', handleClick);
            if (parentRef) parentRef.removeEventListener('scroll', handleScroll);
            if (window) {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            }
        };
    }, [handleClick, isOverlay, isOpen, parentRef, handleOverlayScroll]);

    const renderMenuList = (list: [ListItemAnchorProps]) => {
        if (!list.length) return null;
        return (
            <ul>
                {list.map(item => {
                    const isLinkActive = dropdownUrlActive === item.url;
                    return (
                        <ListItemAnchor
                            key={`list-item-${item.url}`}
                            title={item.title}
                            url={item.url}
                            className={isLinkActive ? 'active' : ''}
                        />
                    );
                })}
            </ul>
        );
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

    const renderNestedMenuList = (list: [[ListItemAnchorProps]]) => {
        if (!list?.length) return null;
        return list.map((item, index) => {
            return (
                <React.Fragment key={String(`nested-list-${index}`)}>
                    {renderMenuList(item)}
                    {index !== list.length - 1 && <div className="divider" />}
                </React.Fragment>
            );
        });
    };

    const renderButton = () => {
        const defaultLinkIcon = isDarkColor ? GlobalIconName.downChevron16 : GlobalIconName.downChevronWhite16;
        const defaultCategoryIcon = isActive ? GlobalIconName.downChevronWhite16 : GlobalIconName.downChevron16;
        const defaultIcon = linkType === 'category' ? defaultCategoryIcon : defaultLinkIcon;
        const openedIcon = linkType === 'category' ? defaultCategoryIcon : GlobalIconName.downChevronWhite16;
        const icon = isOpen ? openedIcon : defaultIcon;

        return (
            <StyledDropdownLink isOpen={isOpen} ref={dropdownLinkRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                    ${linkType === 'category' ? 'category' : ''}
                    ${isActive ? ' active' : ''}
                    ${isDarkColor ? ' dark' : ''}`}
                >
                    {title}
                    <Icon iconName={icon} state={ComponentState.normal} />
                </button>
            </StyledDropdownLink>
        );
    };

    return (
        <StyledDropdown isOverlay={isOverlay}>
            {renderButton()}
            <StyledDropdownShape
                isOpen={isOpen}
                isArrowRight={linkType === 'category'}
                ref={dropdownShapeRef}
                isOverlay={isOverlay}
                overlayPosition={overlayPosition}
                hasHoverBGColor={hasHoverBGColor}
            >
                <span className="arrow" />
                {isNestedList(menuList)
                    ? renderNestedMenuList(menuList as [[ListItemAnchorProps]])
                    : renderMenuList(menuList as [ListItemAnchorProps])}
            </StyledDropdownShape>
        </StyledDropdown>
    );
}
