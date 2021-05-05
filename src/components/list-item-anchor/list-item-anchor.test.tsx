import { render, screen } from '@testing-library/react';
import React from 'react';
import ListItemAnchor, { ListItemAnchorProps } from './list-item-anchor';

const createTestProps = (props: ListItemAnchorProps) => ({
    ...props,
});

test('should verify ListItemAnchor Component props', () => {
    const title = 'ListItemAnchor Component';
    const url = 'http://quantic.edu';
    const props = createTestProps({ title, url });

    render(<ListItemAnchor {...props} />);
    expect(screen.getByText(title)).toHaveTextContent(title);
    expect(screen.getByText(title)).toHaveAttribute('href', url);
});
