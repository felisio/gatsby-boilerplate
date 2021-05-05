import { render } from '@testing-library/react';
import React from 'react';
import Footer from './footer';
import { FooterSections, FooterStoreIconData, FooterSocialMediaIconData } from './footerData';

test('should verify Footer props', () => {
    const { container } = render(<Footer />);
    const containerDiv = container.children[0];
    expect(containerDiv.nodeName).toBe('DIV');
    // desktop menu
    const desktopMenu = containerDiv.children[1];
    const blockContainer = desktopMenu.children[1];
    expect(blockContainer).toHaveClass('block-container');
    expect(blockContainer.childElementCount).toBe(FooterSections.length);
    // social media
    const socialMediaDiv = containerDiv.children[2];
    expect(socialMediaDiv.nodeName).toBe('DIV');
    expect(socialMediaDiv).toHaveClass('social-media');
    expect(socialMediaDiv.childElementCount).toBe(FooterSocialMediaIconData.length);
    // stores
    const stores = containerDiv.children[6];
    expect(stores.nodeName).toBe('DIV');
    expect(stores).toHaveClass('stores');
    expect(stores.childElementCount).toBe(1);
    const iconsContainer = stores.children[0];
    expect(iconsContainer.childElementCount).toBe(FooterStoreIconData.length);
});
