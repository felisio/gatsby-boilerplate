import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { StyledAnchorLink } from './anchor-link.styles';
import { isExternalLink } from '../../utils/url';

export type AnchorLinkProps = {
    activeClassName?: string;
    activeStyle?: object;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    partiallyActive?: boolean;
    replace?: boolean;
    to: string;
    children: ReactNode;
    className?: string;
};

export default function AnchorLink({
    to,
    children,
    activeClassName,
    activeStyle,
    onClick,
    partiallyActive,
    replace,
    className,
}: AnchorLinkProps) {
    if (isExternalLink(to))
        return (
            <StyledAnchorLink href={to} target="_blank" onClick={onClick} className={className}>
                {children}
            </StyledAnchorLink>
        );
    return (
        <Link
            to={to}
            activeClassName={activeClassName}
            activeStyle={activeStyle}
            onClick={onClick}
            partiallyActive={partiallyActive}
            replace={replace}
            className={className}
        >
            {children}
        </Link>
    );
}
