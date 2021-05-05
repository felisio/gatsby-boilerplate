import renderer from 'react-test-renderer';
import React, { useRef } from 'react';
import ScrollableCategoryMenu, { ScrollableCategoryMenuProps } from './scrollable-category-menu';
import categoryList from '../../../__mocks__/desktop-category-menu';
import { WpCategory } from '../../../graphql-types';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useRef: jest.fn(),
    };
});

test('should verify ScrollableCategoryMenu snapshot', async () => {
    const mRef = { current: jest.fn() };
    (useRef as jest.Mock).mockReturnValueOnce(mRef);

    const props: ScrollableCategoryMenuProps = {
        categories: categoryList as WpCategory[],
        selectedCategory: '/category/home/',
        isSearchOpen: false,
    };

    const tree = renderer.create(<ScrollableCategoryMenu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
