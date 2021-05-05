import { FluidObject } from 'gatsby-image';
import React from 'react';
import RoundAvatar from '../round-avatar/round-avatar';
import { StyledAuthorInfo } from './author-info.styles';

export type AuthorInfoProps = {
    avatar: FluidObject;
    name: string;
};

function AuthorInfo({ avatar, name }: AuthorInfoProps) {
    return (
        <StyledAuthorInfo>
            <RoundAvatar avatar={avatar} alt={name} />
            <p data-testid="author-name">{name}</p>
        </StyledAuthorInfo>
    );
}

export { AuthorInfo };
