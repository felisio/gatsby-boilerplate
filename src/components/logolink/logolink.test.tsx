import { render } from '@testing-library/react';
import React from 'react';
import { LogoVariation } from '../logo/logo';
import { Logolink, LogolinkProps } from './logolink';

const createTestProps = (props: LogolinkProps) => ({
    ...props,
});

const logoLinkProps = [
    createTestProps({ variation: LogoVariation.horizontalColor, to: 'https://quantic1.edu/' }),
    createTestProps({ variation: LogoVariation.horizontalWhite, to: 'https://quantic2.edu/' }),
    createTestProps({ variation: LogoVariation.wordmarkWhite, to: 'https://quantic3.edu/' }),
    createTestProps({ variation: LogoVariation.wordmarkColor, to: 'https://quantic4.edu/' }),
    createTestProps({ variation: LogoVariation.verticalWhite, to: 'https://quantic5.edu/' }),
    createTestProps({ variation: LogoVariation.verticalColor, to: 'https://quantic6.edu/' }),
    createTestProps({ variation: LogoVariation.symbolWhite, to: 'https://quantic7.edu/' }),
    createTestProps({ variation: LogoVariation.symbolColor, to: 'https://quantic8.edu/' }),
];

test('should verify Logo html structure', () => {
    logoLinkProps.forEach(prop => {
        const component = render(<Logolink {...prop} />);
        expect(component.container.childElementCount).toBe(1);
        const link = component.container.children[0];
        expect(link.nodeName).toBe('A');
        expect(link).toHaveAttribute('href');
        expect(link.getAttribute('href')).toBe(prop.to);
        const img = link.children[0];
        expect(img.childElementCount).toBe(0);
        expect(img.nodeName).toBe('IMG');
    });
});
