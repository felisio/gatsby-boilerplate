import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { MobileCategoryHeaderProps, MobileCategoryHeader, MobileCategoryBody } from './mobile-category-menu';

import categoryList from '../../../__mocks__/category-menu';
import { WpCategory } from '../../../graphql-types';

const createTestProps = (props: MobileCategoryHeaderProps) => ({
    ...props,
});

const title = 'Select Category';
const props = createTestProps({
    title,
    handleDropdown: () => false,
});

test('should verify MobileCategoryMenu Component snapshot', async () => {
    const tree = renderer.create(
        <MobileCategoryBody
            title={title}
            categoryList={categoryList as WpCategory[]}
            isDropdownOpen
            handleCloseDropdown={() => false}
        />,
    );

    expect(tree).toMatchSnapshot();
});

test('should verify that MobileCategoryMenu Component shows input search', () => {
    render(<MobileCategoryHeader {...props} />);

    const button = screen.getByTestId('search-button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(button.parentElement).toHaveClass('open');
});

test('should verify form submit', () => {
    render(<MobileCategoryHeader {...props} />);

    const button = screen.getByTestId('search-button');
    fireEvent.click(button);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
});

test('should verify that input search has value', () => {
    const searchValue = 'Quantic search';
    render(<MobileCategoryHeader {...props} searchValue={searchValue} />);

    const input = screen.getByTestId('search-input') as HTMLInputElement;
    expect(input.value).toBe(searchValue);
});

test('should verify active link', () => {
    const urlActive = '/category/entrepreneurship/';
    render(
        <MobileCategoryBody
            title={title}
            categoryList={categoryList as WpCategory[]}
            isDropdownOpen
            handleCloseDropdown={() => false}
            urlActive={urlActive}
        />,
    );

    const listItem = screen.getByText('Entrepreneurship');
    expect(listItem.parentElement).toHaveClass('active');
});
