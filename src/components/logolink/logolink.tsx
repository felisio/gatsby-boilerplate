import React from 'react';
import AnchorLink from '../anchor-link/anchor-link';
import Logo, { LogoVariation } from '../logo/logo';

export type LogolinkProps = {
    variation: LogoVariation;
    to: string;
};

function Logolink({ variation, to }: LogolinkProps) {
    return (
        <AnchorLink to={to}>
            <Logo variation={variation} />
        </AnchorLink>
    );
}

export { Logolink };
