import React from 'react';
import { PageProps } from 'gatsby';

export default function FourOhFourPage({ location }: PageProps) {
    return (
        <>
            <h1>404</h1>
            <h3>{location.host}</h3>
            <div>This page doesn&apos;t exist</div>
        </>
    );
}
