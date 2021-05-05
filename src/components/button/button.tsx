import React from 'react';
import { StyledButton } from './button.styles';

export enum ButtonType {
    whiteOnBlue = 'white-on-blue',
    whiteOnWatermelon = 'white-on-watermelon',
    watermelonOnWhite = 'watermelon-on-white',
}

export type ButtonProps = {
    buttonType: ButtonType;
    title: string;
    to: string;
    size?: 'medium' | 'large';
    isBlock?: boolean;
};

export default function Button({ buttonType, title, to, size = 'medium', isBlock = false }: ButtonProps) {
    return (
        <StyledButton className={`${buttonType} ${size}`} to={to} block={isBlock}>
            {title}
        </StyledButton>
    );
}
