import React, { ReactElement } from 'react';
import 'normalize.css';
import RootVariables from '../../styles/RootVariables';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { StyledLayout } from './layout.styles';

export interface LayoutProps {
    children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Typography />
            <RootVariables />
            <GlobalStyles />
            <StyledLayout>{children}</StyledLayout>
        </>
    );
}
