import { render, screen } from '@testing-library/react';
import React from 'react';
import { GlobalIconName } from '../icon/iconData';
import Tooltip, { ArrowPosition, TooltipProps } from './tooltip';

const createTestProps = (props: TooltipProps) => ({
    ...props,
});

test('should verify Popover Component props', () => {
    const props = createTestProps({
        isVisible: true,
        message: 'This is a tooltip',
        iconName: GlobalIconName.close16,
        arrowPosition: ArrowPosition.bottom,
        children: <button type="button">Button Link</button>,
    });
    render(<Tooltip {...props} />);

    expect(screen.getByTestId('tooltip')).toHaveClass(`${props.arrowPosition}-arrow`);
    expect(screen.getByRole('img')).toHaveClass('icon-16');
    expect(screen.getByRole('paragraph')).toHaveTextContent(props.message);
});
