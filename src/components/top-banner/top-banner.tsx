import React from 'react';
import AnchorLink from '../anchor-link/anchor-link';
import { StyledTopBanner, StyledTopBannerBody } from './top-banner.styles';

export type TopBannerProps = {
    text: string;
    linkText: string;
    linkUri: string;
    color?: 'red' | 'blue';
    isFixed?: boolean;
};

export default function TopBanner({ text, linkText, linkUri, color = 'red', isFixed = false }: TopBannerProps) {
    return (
        <StyledTopBanner className={`${color}`} isFixed={isFixed}>
            <StyledTopBannerBody>
                <p>
                    <span>{text}</span>
                    <AnchorLink to={linkUri}>{linkText}</AnchorLink>
                </p>
            </StyledTopBannerBody>
        </StyledTopBanner>
    );
}
