import { render } from '@testing-library/react';
import React from 'react';
import Paginator, { PaginatorProps } from './paginator';

test('should display 1+2+3+4+next', () => {
    const props: PaginatorProps = { pageCount: 4, currentPage: 1, visiblePages: 4, handlePageChange: () => {} };
    const component = render(<Paginator {...props} />);
    expect(component.container.childElementCount).toBe(1);
    const div = component.container.children[0];
    expect(div.nodeName).toBe('DIV');
    expect(div.childElementCount).toBe(6);
    // back button
    const back = div.children[0];
    expect(back).toHaveTextContent('BACK');
    expect(back).toHaveClass('control');
    expect(back).toHaveClass('hide');
    // page buttons
    expect(div.children[1]).toHaveTextContent('01');
    expect(div.children[2]).toHaveTextContent('02');
    expect(div.children[3]).toHaveTextContent('03');
    expect(div.children[4]).toHaveTextContent('04');
    // next button
    const next = div.children[5];
    expect(next).toHaveTextContent('NEXT');
    expect(next).toHaveClass('control');
    expect(next).not.toHaveClass('hide');
});

test('should display back+1+2+3+4+next', () => {
    const props: PaginatorProps = {
        pageCount: 4,
        currentPage: 2,
        visiblePages: 4,
        handlePageChange: () => {},
    };
    const component = render(<Paginator {...props} />);
    expect(component.container.childElementCount).toBe(1);
    const div = component.container.children[0];
    expect(div.nodeName).toBe('DIV');
    expect(div.childElementCount).toBe(6);
    // back button
    const back = div.children[0];
    expect(back).toHaveTextContent('BACK');
    expect(back).toHaveClass('control');
    expect(back).not.toHaveClass('hide');
    // page buttons
    expect(div.children[1]).toHaveTextContent('01');
    expect(div.children[2]).toHaveTextContent('02');
    expect(div.children[3]).toHaveTextContent('03');
    expect(div.children[4]).toHaveTextContent('04');
    // next button
    const next = div.children[5];
    expect(next).toHaveTextContent('NEXT');
    expect(next).toHaveClass('control');
    expect(next).not.toHaveClass('hide');
});

test('should display back+9+10', () => {
    const props: PaginatorProps = {
        pageCount: 10,
        currentPage: 10,
        visiblePages: 2,
        handlePageChange: () => {},
    };
    const component = render(<Paginator {...props} />);
    expect(component.container.childElementCount).toBe(1);
    const div = component.container.children[0];
    expect(div.nodeName).toBe('DIV');
    expect(div.childElementCount).toBe(4);
    // back button
    const back = div.children[0];
    expect(back).toHaveTextContent('BACK');
    expect(back).toHaveClass('control');
    expect(back).not.toHaveClass('hide');
    // page buttons
    expect(div.children[1]).toHaveTextContent('09');
    expect(div.children[2]).toHaveTextContent('10');
    // next button
    const next = div.children[3];
    expect(next).toHaveTextContent('NEXT');
    expect(next).toHaveClass('control');
    expect(next).toHaveClass('hide');
});

test('should display back+8+9+10+next', () => {
    const props: PaginatorProps = {
        pageCount: 10,
        currentPage: 9,
        visiblePages: 3,
        handlePageChange: () => {},
    };
    const component = render(<Paginator {...props} />);
    expect(component.container.childElementCount).toBe(1);
    const div = component.container.children[0];
    expect(div.nodeName).toBe('DIV');
    expect(div.childElementCount).toBe(5);
    // back button
    const back = div.children[0];
    expect(back).toHaveTextContent('BACK');
    expect(back).toHaveClass('control');
    expect(back).not.toHaveClass('hide');
    // page buttons
    expect(div.children[1]).toHaveTextContent('08');
    expect(div.children[2]).toHaveTextContent('09');
    expect(div.children[3]).toHaveTextContent('10');
    // next button
    const next = div.children[4];
    expect(next).toHaveTextContent('NEXT');
    expect(next).toHaveClass('control');
    expect(next).not.toHaveClass('hide');
});
