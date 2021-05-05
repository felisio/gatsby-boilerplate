import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Heading, { HeadingProps, HeadingTagTypes } from './heading';

const createTestProps = (props: HeadingProps) => ({
    ...props,
});

test('should verify that Heading Component returns the correct html element', () => {
    const children = 'Heading Component';
    ['h1', 'h2', 'h3', 'h4'].forEach(h => {
        const props = createTestProps({ children, tag: h as HeadingTagTypes });
        const { container } = render(<Heading {...props} />);
        const hElement = container.querySelector(h);
        expect(hElement).toBeTruthy();
    });
});

test('should verify that Heading Component returns element if blog post class', () => {
    const children = 'Heading Component';
    const props = createTestProps({ children, tag: 'h1', isBlogPost: true });
    const { container } = render(<Heading {...props} />);
    const h1 = container.querySelector('.blog-post');
    expect(h1).toBeTruthy();
});

test('should verify that Heading Component returns the correct line clamp', () => {
    const children = 'Heading Component';
    const props = createTestProps({ children, tag: 'h1', numberOfLines: 2 });
    const tree = renderer.create(<Heading {...props} />).toJSON();

    expect(tree).toHaveStyleRule('-webkit-line-clamp', '2', { supports: '(-webkit-line-clamp:2)' });
});

test('should verify that Heading Component returns the correct media query', () => {
    const children = 'Heading Component';
    const props = createTestProps({ children, tag: 'h1' });
    const tree = renderer.create(<Heading {...props} />).toJSON();
    expect(tree).toHaveStyleRule('font-size', '4.6rem', { media: '(min-width: 992px)' });
});
