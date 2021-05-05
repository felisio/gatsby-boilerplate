import { render, screen } from '@testing-library/react';
import React from 'react';
import Button, { ButtonProps, ButtonType } from './button';

const createTestProps = (props: ButtonProps) => ({
    ...props,
});

const buttonProps = {
    buttonType: ButtonType.whiteOnBlue,
    title: 'Try a lesson',
    to: 'https://quantic.edu/',
};

test('should verify Button Component props', () => {
    const whiteOnBlueProps = createTestProps(buttonProps);
    render(<Button {...whiteOnBlueProps} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', whiteOnBlueProps.to);
    expect(screen.getByText(buttonProps.title)).toBeTruthy();
});

test('should verify that Button Component has white-on-blue class', () => {
    const whiteOnBlueProps = createTestProps(buttonProps);

    render(<Button {...whiteOnBlueProps} />);

    expect(screen.getByRole('link')).toHaveClass('white-on-blue');
});

test('should verify that Button Component has white-on-watermelon class', () => {
    const whiteOnBlueProps = createTestProps(buttonProps);

    render(<Button {...whiteOnBlueProps} buttonType={ButtonType.whiteOnWatermelon} />);

    expect(screen.getByRole('link')).toHaveClass('white-on-watermelon');
});

test('should verify that Button Component has watermelon-on-white class', () => {
    const whiteOnBlueProps = createTestProps(buttonProps);

    render(<Button {...whiteOnBlueProps} buttonType={ButtonType.watermelonOnWhite} />);

    expect(screen.getByRole('link')).toHaveClass('watermelon-on-white');
});

test('should verify that Button Component has medium size', () => {
    const whiteOnBlueProps = createTestProps(buttonProps);
    render(<Button {...whiteOnBlueProps} />);

    expect(screen.getByRole('link')).toHaveClass('medium');
});

test('should verify that Button Component has large size', () => {
    const whiteOnBlueProps = createTestProps(buttonProps);
    render(<Button {...whiteOnBlueProps} size="large" />);

    expect(screen.getByRole('link')).toHaveClass('large');
});

test('should verify that Button Component has block width', () => {
    const whiteOnBlueProps = createTestProps(buttonProps);
    render(<Button {...whiteOnBlueProps} isBlock />);

    expect(screen.getByRole('link')).toHaveStyleRule('width', '28.8rem');
});
