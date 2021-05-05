import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { NavbarMenuListProps, Navbar, NavbarProps } from './navbar';
import menuList from '../../../__mocks__/navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = args => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    navbarMenuList: menuList as [NavbarMenuListProps],
    buttonText: 'SIGN UP - IT’S FREE',
    buttonLink: '/',
    hasLoginButton: true,
    loginButtonLink: '/',
    stick: true,
};
Primary.parameters = {
    backgrounds: { default: 'dark' },
};

export const WithoutLogin = Template.bind({});
WithoutLogin.args = {
    navbarMenuList: menuList as [NavbarMenuListProps],
    buttonText: 'SIGN UP - IT’S FREE',
    buttonLink: '/',
    hasLoginButton: false,
    loginButtonLink: '/',
    stick: true,
};
WithoutLogin.parameters = {
    backgrounds: { default: 'dark' },
};

export const WithStick = Template.bind({});
WithStick.args = {
    navbarMenuList: menuList as [NavbarMenuListProps],
    buttonText: 'SIGN UP - IT’S FREE',
    buttonLink: '/',
    hasLoginButton: true,
    loginButtonLink: '/',
    stick: true,
};
WithStick.parameters = {
    backgrounds: { default: 'dark' },
};
WithStick.decorators = [
    StoryContainer => (
        <div>
            <StoryContainer />
            <div>
                <img src="https://via.placeholder.com/800x900" width="680" height="766" alt="fill murray" />
                <img src="https://via.placeholder.com/800x900" width="680" height="766" alt="fill murray" />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet erat lorem, sed pretium dui
                vestibulum in. Cras quis consectetur nisi. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Quisque tempus a purus sed dictum. Mauris sapien lorem, bibendum
                condimentum purus a, scelerisque accumsan nibh. Nulla tristique nibh non dui molestie semper. Sed dictum
                ipsum non dui ultrices tincidunt. Vivamus ac ultrices nunc, at malesuada nisi. Curabitur blandit, sapien
                sed vulputate tempus, justo mi accumsan ante, in tincidunt magna dui eget mi. Donec maximus pretium nisi
                a tincidunt. Aenean pellentesque risus in mauris cursus, vitae vulputate lorem commodo. Integer tempor
                laoreet placerat. Sed congue malesuada dolor in consequat. Suspendisse congue, mauris eu maximus
                finibus, nulla felis interdum turpis, egestas sagittis lorem elit at urna. Donec aliquet faucibus est
                vitae aliquam. Phasellus vehicula blandit magna, nec aliquam quam. Aliquam congue scelerisque lacus sed
                rhoncus. Ut condimentum tincidunt hendrerit. Suspendisse eu iaculis sem. Nullam orci enim, tristique sed
                consectetur vel, pellentesque sit amet turpis. Nullam sit amet iaculis quam.
            </p>
        </div>
    ),
];

export const WithoutStick = Template.bind({});
WithoutStick.args = {
    navbarMenuList: menuList as [NavbarMenuListProps],
    buttonText: 'SIGN UP - IT’S FREE',
    buttonLink: '/',
    hasLoginButton: true,
    loginButtonLink: '/',
};
WithoutStick.parameters = {
    backgrounds: { default: 'dark' },
};

WithoutStick.decorators = [
    StoryContainer => (
        <div>
            <StoryContainer />
            <div>
                <img src="https://via.placeholder.com/800x900" width="680" height="766" alt="fill murray" />
                <img src="https://via.placeholder.com/800x900" width="680" height="766" alt="fill murray" />
            </div>
        </div>
    ),
];
