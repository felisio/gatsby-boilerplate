import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StyledBreadcrumb } from './breadcrumb.styles';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import { ComponentState } from '../../utils/componentState';

export type BreadcrumbProps = {
    dirStructure: Array<BreadcrumbPage>;
};

export type BreadcrumbPage = {
    title: string;
    link: string;
};

export default function Breadcrumb({ dirStructure }: BreadcrumbProps) {
    const [isHovered, setHovered] = useState(false);
    const iconState = isHovered || dirStructure.length === 1 ? ComponentState.hover : ComponentState.normal;
    return (
        <StyledBreadcrumb>
            {dirStructure.map((page, index) => {
                const isFirst = index === 0;
                const isLast = index === dirStructure.length - 1;
                return (
                    <div
                        key={page.title}
                        className="link-wrapper"
                        onMouseEnter={() => setHovered(isFirst)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <Link data-testid="link" className={isLast ? 'active' : ''} to={page.link}>
                            {isFirst && <Icon iconName={GlobalIconName.home16} state={iconState} />}
                            {page.title}
                        </Link>
                        {!isLast && <span className="divider">/</span>}
                    </div>
                );
            })}
        </StyledBreadcrumb>
    );
}
