import React from 'react';
import { ComponentOrientation } from '../../utils/componentOrientation';
import Share from '../share/share';
import { StyledFloatingShare } from './floating-share.styles';

export enum FloatingSharePosition {
    absolute = 'absolute',
    fixed = 'fixed',
}

export type FloatingShareProps = {
    title: string;
    url: string;
    emailIntro: string;
    twitterHandle: string;
    positionSettings: {
        xRem: number;
        yRem: number;
        position: FloatingSharePosition;
    };
};

export default function FloatingShare({ title, url, emailIntro, twitterHandle, positionSettings }: FloatingShareProps) {
    return (
        <StyledFloatingShare
            style={{
                position: positionSettings.position,
                left: `${positionSettings.xRem}rem`,
                top: `${positionSettings.yRem}rem`,
            }}
        >
            <Share
                orientation={ComponentOrientation.vertical}
                title={title}
                url={url}
                emailIntro={emailIntro}
                twitterHandle={twitterHandle}
            />
        </StyledFloatingShare>
    );
}
