import { GlobalIconName } from '../icon/iconData';
import { IconlinkProps } from '../iconlink/iconlink';

type FooterSectionOption = {
    title: string;
    destination: string;
    icon?: GlobalIconName;
};

const quanticSectionOptions = Array<FooterSectionOption>(
    { title: 'The MBA', destination: '/mba' },
    { title: 'The Executive MBA', destination: '/executive-mba' },
    { title: 'Program Comparison', destination: '/programs' },
    { title: 'Student Experience', destination: '/student-experience' },
    { title: 'Sponsored Tuition', destination: '/sponsored-tuition/students' },
    {
        title: 'Consumer Disclosure',
        destination: 'https://uploads.smart.ly/accreditation/Quantic%20Consumer%20Information%20Disclosure.pdf',
    },
    {
        title: 'Quantic Catalog',
        destination: 'https://uploads.smart.ly/accreditation/2020%20Quantic%20School%20Catalog.pdf',
    },
);

const careerNetworkSectionOptions = Array<FooterSectionOption>(
    { title: 'About Smartly Talent', destination: '/candidates/join-career-network' },
    { title: 'Hire our Students', destination: '/employers/recruit-our-candidates' },
);

const aboutSectionOptions = Array<FooterSectionOption>(
    { title: 'About Us', destination: '/about' },
    { title: 'People Love Us', destination: '/reviews' },
    { title: 'Our Mission', destination: '/mission' },
    { title: 'Our Method', destination: '/programs/method' },
    { title: 'Careers', destination: '/about#!#jobs' },
    { title: 'Blog', destination: 'https://blog.quantic.edu/' },
);

const resourcesSectionOptions = Array<FooterSectionOption>(
    { title: 'iOS App', destination: 'https://itunes.apple.com/us/app/id1014850662', icon: GlobalIconName.apple18 },
    {
        title: 'Android App',
        destination: 'https://play.google.com/store/apps/details?id=com.smartly.hybrid',
        icon: GlobalIconName.android18,
    },
    { title: 'FAQ', destination: '/help/' },
    { title: 'Contact', destination: '/help/contact' },
    { title: 'Press', destination: '/press' },
);

export type FooterSection = {
    title: string;
    options: Array<FooterSectionOption>;
};

export const FooterSections = Array<FooterSection>(
    { title: 'Quantic', options: quanticSectionOptions },
    { title: 'Career Network', options: careerNetworkSectionOptions },
    { title: 'About', options: aboutSectionOptions },
    { title: 'Resources', options: resourcesSectionOptions },
);

export type FooterLink = {
    title: string;
    key: string;
    to: string;
};

export const FooterLinks = Array<FooterLink>(
    {
        title: 'Terms',
        key: 'terms',
        to: '/terms',
    },
    {
        title: 'Privacy',
        key: 'privacy',
        to: '/privacy',
    },
    {
        title: 'Cookies',
        key: 'cookies',
        to: '/cookies',
    },
    {
        title: 'Regulatory Information',
        key: 'regulatory-information',
        to: '/regulatory-information',
    },
);

export const FooterSocialMediaIconData = Array<IconlinkProps>(
    {
        iconName: GlobalIconName.facebook32,
        to: 'https://www.facebook.com/QuanticSchool',
        enabled: true,
    },
    { iconName: GlobalIconName.twitter32, to: 'https://www.twitter.com/QuanticSchool', enabled: true },
    {
        iconName: GlobalIconName.linkedin32,
        to: 'https://www.linkedin.com/school/quanticschool',
        enabled: true,
    },
    {
        iconName: GlobalIconName.instagram32,
        to: 'https://www.instagram.com/QuanticSchool',
        enabled: true,
    },
);

export const FooterStoreIconData = Array<IconlinkProps>(
    {
        iconName: GlobalIconName.appStore128,
        to: 'https://itunes.apple.com/us/app/id1014850662',
        enabled: true,
    },
    {
        iconName: GlobalIconName.googlePlay128,
        to: 'https://play.google.com/store/apps/details?id=com.smartly.hybrid',
        enabled: true,
    },
);

export const QuanticTrademark = `©${new Date().getFullYear()} Pedago, LLC. All rights reserved.`;
export const QuanticCity = 'Washington, DC';
export const QuanticAddress = '3000 K St NW, Ste 275, Washington, DC, 20007, USA • info@quantic.edu';
