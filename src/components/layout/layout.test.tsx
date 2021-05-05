import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from './layout';

test('should verify Layout Component render', () => {
    const text = 'Layout Component';
    render(
        <Layout>
            <div>{text}</div>
        </Layout>,
    );
    expect(screen.getByText(text)).toHaveTextContent(text);
});
