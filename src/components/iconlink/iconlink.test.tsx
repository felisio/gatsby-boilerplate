import { render } from '@testing-library/react';
import React from 'react';
import { GlobalIconName } from '../icon/iconData';
import Iconlink, { IconlinkProps } from './iconlink';

const createTestProps = (props: IconlinkProps) => ({
    ...props,
});

const facebookIconLinkProps = createTestProps({
    iconName: GlobalIconName.facebook32,
    to: 'https://www.facebook.com/QuanticSchool',
    enabled: true,
});

test('should verify Iconlink Component props', () => {
    const facebookIconLink = render(<Iconlink {...facebookIconLinkProps} />);
    const { container } = facebookIconLink;
    expect(container.childElementCount).toBe(1);
    const link = container.children[0];
    expect(link.nodeName).toBe('A');
    expect(link).toHaveAttribute('href');
    expect(link.getAttribute('href')).toBe(facebookIconLinkProps.to);
    expect(link.childElementCount).toBe(1);
    const div = link.children[0];
    expect(div.nodeName).toBe('DIV');
    expect(div.childElementCount).toBe(1);
    const icon = div.children[0];
    expect(icon.nodeName).toBe('IMG');
    expect(icon).toHaveClass('icon-32');
});
