import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Dropdown, { DropdownProps } from './dropdown';
import { simpleDropdownMenuList, nestedDropdownMenuList } from '../../../__mocks__/dropdown';
import { ListItemAnchorProps } from '../list-item-anchor/list-item-anchor';

const createTestProps = (props: DropdownProps) => ({
    ...props,
});

const title = 'Dropdown Component';

test('should verify that Dropdown Component returns the simple list correctly', async () => {
    const props = createTestProps({
        title,
        menuList: simpleDropdownMenuList as [ListItemAnchorProps],
    });

    render(<Dropdown {...props} />);
    const listElements = await waitFor(() => screen.findAllByRole('listitem'));

    expect(screen.getByText(title)).toHaveTextContent(title);
    expect(listElements.length).toEqual(simpleDropdownMenuList.length);
});

test('should verify that Dropdown Component returns the nested list correctly', async () => {
    const props = createTestProps({
        title,
        menuList: nestedDropdownMenuList as [[ListItemAnchorProps]],
    });

    render(<Dropdown {...props} />);
    const listElements = await waitFor(() => screen.findAllByRole('listitem'));

    expect(screen.getByText(title)).toHaveTextContent(title);
    expect(listElements.length).toEqual(6);
});

test('should verify that Dropdown Component returns the correct button type', async () => {
    const props = createTestProps({
        title,
        menuList: nestedDropdownMenuList as [[ListItemAnchorProps]],
        linkType: 'category',
    });

    render(<Dropdown {...props} />);
    expect(screen.getByText(title)).toHaveClass('category');
});

test('should verify that Dropdown Component returns the active state', async () => {
    const props = createTestProps({
        title,
        menuList: nestedDropdownMenuList as [[ListItemAnchorProps]],
        linkType: 'category',
        isActive: true,
        dropdownUrlActive: nestedDropdownMenuList[0][0].url,
    });

    render(<Dropdown {...props} />);
    expect(screen.getByText(title)).toHaveClass('active');
    expect(screen.getByText(nestedDropdownMenuList[0][0].title).closest('li')).toHaveClass('active');
});

test('should verify that Dropdown Component returns the dark link color', async () => {
    const props = createTestProps({
        title,
        menuList: nestedDropdownMenuList as [[ListItemAnchorProps]],
        linkType: 'category',
        isDarkColor: true,
    });

    render(<Dropdown {...props} />);
    expect(screen.getByText(title)).toHaveClass('dark');
});
