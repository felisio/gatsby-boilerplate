import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { StyledRoundAvatar } from './round-avatar.styles';

export type RoundAvatarProps = {
    avatar: FluidObject;
    alt: string;
};

export default function RoundAvatar({ avatar, alt }: RoundAvatarProps) {
    return (
        <StyledRoundAvatar>
            <Img fluid={avatar} alt={alt} />
        </StyledRoundAvatar>
    );
}
