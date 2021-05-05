import React from 'react';
import { StyledTag } from './tag.styles';

export type TagData = {
    title: string;
    link: string;
};

export type TagProps = {
    title: string;
    selected: boolean;
    enabled: boolean;
    to: string;
};

export default function Tag({ title, selected, enabled, to }: TagProps) {
    return (
        <StyledTag data-testid="tag" className={selected ? 'selected' : ''} disabled={!enabled} to={to}>
            {title}
        </StyledTag>
    );
}
