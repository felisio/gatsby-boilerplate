import renderer from 'react-test-renderer';
import React, { useRef } from 'react';
import categoryList from '../../../__mocks__/desktop-category-menu';
import { WpCategory } from '../../../graphql-types';
import DesktopCategoryMenu, { DesktopCategoryMenuProps } from './desktop-category-menu';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useRef: jest.fn(),
    };
});

jest.mock('react-dom');

test('should verify DesktopCategoryMenu snapshot', async () => {
    const mRef = { current: jest.fn() };
    (useRef as jest.Mock).mockReturnValueOnce(mRef);

    const props: DesktopCategoryMenuProps = {
        categories: categoryList as WpCategory[],
        selectedCategory: '/category/home/',
    };

    const tree = renderer.create(<DesktopCategoryMenu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('should verify that DesktopCategoryMenu with input open snapshot', async () => {
    const mRef = { current: jest.fn() };
    (useRef as jest.Mock).mockReturnValueOnce(mRef);

    const props: DesktopCategoryMenuProps = {
        categories: categoryList as WpCategory[],
        selectedCategory: '/category/home/',
        searchValue: 'Quantic search',
        searchUrl: '/search',
    };

    const tree = renderer.create(<DesktopCategoryMenu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
