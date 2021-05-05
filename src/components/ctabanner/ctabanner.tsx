import React from 'react';
import Button, { ButtonType } from '../button/button';
import { StyledCtabanner, StyledCtabannerContent } from './ctabanner.styles';

export type CtabannerProps = {
    title: string;
    subtitle: string;
    buttonCta: string;
    buttonDestination: string;
};

export default function Ctabanner({ title, subtitle, buttonCta, buttonDestination }: CtabannerProps) {
    return (
        <StyledCtabanner>
            <div className="background" />
            <div className="foreground" />
            <StyledCtabannerContent>
                <div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div>
                    <Button buttonType={ButtonType.whiteOnBlue} title={buttonCta} to={buttonDestination} size="large" />
                </div>
            </StyledCtabannerContent>
        </StyledCtabanner>
    );
}
