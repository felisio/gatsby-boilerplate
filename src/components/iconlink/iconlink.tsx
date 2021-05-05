import React from 'react';
import { ComponentState } from '../../utils/componentState';
import AnchorLink from '../anchor-link/anchor-link';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';

export type IconlinkProps = {
    iconName: GlobalIconName;
    to: string;
    enabled: boolean;
};

export default function Iconlink({ iconName, to, enabled }: IconlinkProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    let iconState = isHovered ? ComponentState.hover : ComponentState.normal;
    iconState = enabled ? iconState : ComponentState.disabled;
    return (
        <AnchorLink to={to}>
            {/** this additional div is necessary for the event to be detected */}
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Icon iconName={iconName} state={iconState} />
            </div>
        </AnchorLink>
    );
}
