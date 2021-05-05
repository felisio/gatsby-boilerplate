import { render, screen } from '@testing-library/react';
import React from 'react';
import TopBanner, { TopBannerProps } from './top-banner';

const createTestProps = (props: TopBannerProps) => ({
    ...props,
});

test('should verify that TopBanner Component returns the correct text', () => {
    const text = 'Here for the free MBA? Round 1 applications close May 14.';
    const linkText = 'Apply now';
    const linkUri = '#';
    const props = createTestProps({ text, linkText, linkUri });

    render(<TopBanner {...props} />);
    expect(screen.getByText(text)).toHaveTextContent(text);
    expect(screen.getByText(linkText)).toHaveTextContent(linkText);
});

test('should verify that TopBanner Component returns the correct color', () => {
    const text = 'Here for the free MBA? Round 1 applications close May 14.';
    const linkText = 'Apply now';
    const linkUri = '#';
    const color = 'blue';
    const props = createTestProps({ text, linkText, linkUri, color });

    const { container } = render(<TopBanner {...props} />);
    expect(container.firstElementChild?.classList.contains(color)).toBe(true);
});
