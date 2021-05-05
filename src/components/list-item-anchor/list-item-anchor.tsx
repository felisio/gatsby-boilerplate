import React from 'react';
import AnchorLink from '../anchor-link/anchor-link';
import { StyledListItemAnchor } from './list-item-anchor.styles';

export type ListItemAnchorProps = {
    title: string;
    url: string;
    className?: string;
};

export default function ListItemAnchor({ title, url, ...props }: ListItemAnchorProps) {
    return (
        <StyledListItemAnchor {...props}>
            <AnchorLink to={url}>{title}</AnchorLink>
        </StyledListItemAnchor>
    );
}
