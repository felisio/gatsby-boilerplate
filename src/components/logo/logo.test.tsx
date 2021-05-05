import { render } from '@testing-library/react';
import React from 'react';
import Logo, { LogoProps, LogoVariation } from './logo';

const createTestProps = (props: LogoProps) => ({
    ...props,
});

const logoProps = [
    createTestProps({ variation: LogoVariation.horizontalColor }),
    createTestProps({ variation: LogoVariation.horizontalWhite }),
    createTestProps({ variation: LogoVariation.wordmarkWhite }),
    createTestProps({ variation: LogoVariation.wordmarkColor }),
    createTestProps({ variation: LogoVariation.verticalWhite }),
    createTestProps({ variation: LogoVariation.verticalColor }),
    createTestProps({ variation: LogoVariation.symbolWhite }),
    createTestProps({ variation: LogoVariation.symbolColor }),
];

test('should verify Logo html structure', () => {
    logoProps.forEach(prop => {
        const component = render(<Logo {...prop} />);
        expect(component.container.childElementCount).toBe(1);
        const img = component.container.children[0];
        expect(img.childElementCount).toBe(0);
        expect(img.nodeName).toBe('IMG');
    });
});

test('should verify that alt matches expected', () => {
    logoProps.forEach(prop => {
        const component = render(<Logo {...prop} />);
        const img = component.container.children[0];
        expect(img.getAttribute('alt')).toEqual('Quantic');
    });
});
