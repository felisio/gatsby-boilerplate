import { render, screen } from '@testing-library/react';
import React from 'react';
import AnchorLink, { AnchorLinkProps } from './anchor-link';

const createTestProps = (props: AnchorLinkProps) => ({
    ...props,
});

test('should verify that AnchorLink Component returns Styled-Component tag', () => {
    const children = 'External Link';
    const to = 'https://quantic.edu';
    const props = createTestProps({
        to,
        children,
    });

    render(<AnchorLink {...props} />);
    expect(screen.getByRole('link')).toHaveTextContent(children);
    expect(screen.getByRole('link')).toHaveAttribute('class');
    expect(screen.getByRole('link')).toHaveAttribute('href', to);
});

test('should verify that AnchorLink Component returns GatsbyLink tag', () => {
    const children = 'Internal Link';
    const to = '/blog';
    const props = createTestProps({
        to,
        children,
    });

    render(<AnchorLink {...props} />);
    expect(screen.getByRole('link')).toHaveTextContent(children);
    expect(screen.getByRole('link')).toHaveAttribute('href', to);
});
