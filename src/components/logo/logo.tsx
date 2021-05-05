import React from 'react';
import logoHorizontalWhite from '../../assets/images/logos/logo-horizontal-white.svg';
import logoHorizontalColor from '../../assets/images/logos/logo-horizontal-color.svg';
import logoWordmarkWhite from '../../assets/images/logos/logo-wordmark-white.svg';
import logoWordmarkColor from '../../assets/images/logos/logo-wordmark-color.svg';
import logoVerticalWhite from '../../assets/images/logos/logo-vertical-white.svg';
import logoVerticalColor from '../../assets/images/logos/logo-vertical-color.svg';
import logoSymbolWhite from '../../assets/images/logos/logo-symbol-white.svg';
import logoSymbolColor from '../../assets/images/logos/logo-symbol-color.svg';

export enum LogoVariation {
    horizontalWhite = 'horizontalWhite',
    horizontalColor = 'horizontalColor',
    wordmarkWhite = 'wordmarkWhite',
    wordmarkColor = 'wordmarkColor',
    verticalWhite = 'verticalWhite',
    verticalColor = 'verticalColor',
    symbolWhite = 'symbolWhite',
    symbolColor = 'symbolColor',
}

const LogoConfigData: Record<LogoVariation, string> = {
    horizontalWhite: logoHorizontalWhite,
    horizontalColor: logoHorizontalColor,
    wordmarkWhite: logoWordmarkWhite,
    wordmarkColor: logoWordmarkColor,
    verticalWhite: logoVerticalWhite,
    verticalColor: logoVerticalColor,
    symbolWhite: logoSymbolWhite,
    symbolColor: logoSymbolColor,
};

export type LogoProps = {
    variation: LogoVariation;
};

export default function Logo({ variation }: LogoProps) {
    return <img src={LogoConfigData[variation]} alt="Quantic" />;
}
