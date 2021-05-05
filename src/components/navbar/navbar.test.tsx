import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Navbar, NavbarMenuListProps, NavbarProps } from './navbar';
import menuList from '../../../__mocks__/navbar';

const createTestProps = (props: NavbarProps) => ({
    ...props,
});

const defaultProps = {
    navbarMenuList: menuList as [NavbarMenuListProps],
    buttonText: 'SIGN UP - IT’S FREE',
    buttonLink: '/link-button',
    hasLoginButton: true,
    loginButtonLink: '/link-login',
};

test('should verify Navbar Component button props', async () => {
    const props = createTestProps({ ...defaultProps });

    render(<Navbar {...props} />);

    expect(screen.getAllByText(defaultProps.buttonText)[0]).toHaveTextContent(defaultProps.buttonText);
    expect(screen.getAllByText(defaultProps.buttonText)[0]).toHaveAttribute('href', defaultProps.buttonLink);
    expect(screen.getAllByText(defaultProps.buttonText)[1]).toHaveTextContent(defaultProps.buttonText);
    expect(screen.getAllByText(defaultProps.buttonText)[1]).toHaveAttribute('href', defaultProps.buttonLink);
});

test('should verify Navbar Component login props', async () => {
    const props = createTestProps({ ...defaultProps });

    render(<Navbar {...props} />);

    expect(screen.getAllByText('Log In')[0].closest('a')).toHaveAttribute('href', defaultProps.loginButtonLink);
    expect(screen.getAllByText('Log In')[1].closest('a')).toHaveAttribute('href', defaultProps.loginButtonLink);
});

test('should verify Navbar Component snapshot', async () => {
    const props = createTestProps({ ...defaultProps });
    const tree = renderer.create(<Navbar {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
});

test('should verify that Navbar Component hide login button', async () => {
    const defaultComponentProps = {
        navbarMenuList: menuList as [NavbarMenuListProps],
        buttonText: 'SIGN UP - IT’S FREE',
        buttonLink: '/link-button',
        hasLoginButton: false,
        loginButtonLink: '/link-login',
    };
    const props = createTestProps(defaultComponentProps);

    render(<Navbar {...props} />);

    expect(screen.queryAllByAltText('Log In')).toStrictEqual([]);
});
