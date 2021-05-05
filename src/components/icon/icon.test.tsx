import { render } from '@testing-library/react';
import React from 'react';
import { ComponentState } from '../../utils/componentState';
import Icon, { IconProps } from './icon';
import { GlobalIconName } from './iconData';

const createTestProps = (props: IconProps) => ({
    ...props,
});
const iconProps = [
    createTestProps({ iconName: GlobalIconName.plus12, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.minus12, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.home16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.upChevron16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.upChevronWhite16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.downChevron16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.downChevronWhite16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.leftChevron16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.rightChevron16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.close16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.check16, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.apple18, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.android18, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.search24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.facebook24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.twitter24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.instagram24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.linkedin24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.whatsApp24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.mail24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.link24, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.facebook32, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.twitter32, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.instagram32, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.linkedin32, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.googlePlay128, state: ComponentState.normal }),
    createTestProps({ iconName: GlobalIconName.appStore128, state: ComponentState.normal }),
];
const alts = [
    'plus',
    'minus',
    'home',
    'upChevron',
    'upChevronWhite',
    'downChevron',
    'downChevronWhite',
    'leftChevron',
    'rightChevron',
    'close',
    'check',
    'apple',
    'android',
    'search',
    'facebook',
    'twitter',
    'instagram',
    'linkedin',
    'whatsApp',
    'mail',
    'link',
    'facebook',
    'twitter',
    'instagram',
    'linkedin',
    'googlePlay',
    'appStore',
];
const sizes = [
    12,
    12,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    18,
    18,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    32,
    32,
    32,
    32,
    128,
    128,
];

test('should verify Icon html structure', () => {
    iconProps.forEach(iconProp => {
        const component = render(<Icon {...iconProp} />);
        expect(component.container.childElementCount).toBe(1);
        const img = component.container.children[0];
        expect(img.childElementCount).toBe(0);
        expect(img.nodeName).toBe('IMG');
    });
});

test('should verify that alt matches expected', () => {
    iconProps.forEach((iconProp, index) => {
        const component = render(<Icon {...iconProp} />);
        const img = component.container.children[0];
        expect(img.getAttribute('alt')).toEqual(alts[index]);
    });
});

test('should verify that className matches expected', () => {
    iconProps.forEach((iconProp, index) => {
        const component = render(<Icon {...iconProp} />);
        const img = component.container.children[0];
        expect(img.getAttribute('class')).toContain(`icon-${sizes[index]}`);
    });
});
