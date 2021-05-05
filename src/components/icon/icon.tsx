import React from 'react';
import { StyledIcon } from './icon.styles';
import { GlobalIconName, getIconData } from './iconData';
import { ComponentState } from '../../utils/componentState';

export type IconProps = {
    iconName: GlobalIconName;
    state: ComponentState;
};

export default function Icon({ iconName, state }: IconProps) {
    const iconData = getIconData(iconName, state);
    if (iconData.path === '') return <StyledIcon />;
    return <StyledIcon src={iconData.path} alt={iconData.alt} className={iconData.style} />;
}
