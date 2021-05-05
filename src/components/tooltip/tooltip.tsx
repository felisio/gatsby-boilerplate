import React, { ReactElement } from 'react';
import { ComponentState } from '../../utils/componentState';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import { StyledTooltip, StyledTooltipContainer } from './tooltip.styles';

export enum ArrowPosition {
    top = 'top',
    bottom = 'bottom',
}

export type TooltipProps = {
    isVisible: boolean;
    message: string;
    iconName: GlobalIconName;
    arrowPosition: ArrowPosition;
    children: ReactElement;
};

export default function Tooltip({ isVisible, message, iconName, arrowPosition, children }: TooltipProps) {
    return (
        <StyledTooltipContainer>
            {children}
            <StyledTooltip
                data-testid="tooltip"
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                className={`${arrowPosition}-arrow`}
            >
                <Icon iconName={iconName} state={ComponentState.normal} />
                <p role="paragraph">{message}</p>
            </StyledTooltip>
        </StyledTooltipContainer>
    );
}
