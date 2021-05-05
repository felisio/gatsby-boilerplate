import { render, screen } from '@testing-library/react';
import React from 'react';
import Tag, { TagProps } from './tag';

const createTestProps = (props: TagProps) => ({
    ...props,
});

const tagMockData = {
    title: 'Innovation',
    selected: true,
    enabled: true,
    to: '#quantic',
};

test('should verify Tag Component props - enabled', () => {
    const props = createTestProps(tagMockData);
    render(<Tag {...props} />);
    expect(screen.getByTestId('tag')).toHaveAttribute('href', tagMockData.to);
    expect(screen.getByTestId('tag')).toHaveClass(tagMockData.selected ? 'selected' : '');
    expect(screen.getByTestId('tag')).toHaveTextContent(tagMockData.title);
});
