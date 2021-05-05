import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DesktopCategoryMenu, { DesktopCategoryMenuProps } from './desktop-category-menu';
import { WpCategory } from '../../../graphql-types';
import categoryList from '../../../__mocks__/desktop-category-menu';
import TopBanner from '../top-banner/top-banner';

export default {
    title: 'Components/DesktopCategoryMenu',
    component: DesktopCategoryMenu,
} as Meta;

const Template: Story<DesktopCategoryMenuProps> = args => <DesktopCategoryMenu {...args} />;

export const HomeSelected = Template.bind({});
HomeSelected.args = {
    categories: categoryList as WpCategory[],
    selectedCategory: categoryList[0].uri,
    searchUrl: '/search',
};

export const WithoutCategory = Template.bind({});
WithoutCategory.args = {
    categories: categoryList as WpCategory[],
    searchUrl: '/search',
};

export const CareersSelected = Template.bind({});
CareersSelected.args = {
    categories: categoryList as WpCategory[],
    selectedCategory: categoryList[3].uri,
    searchUrl: '/search',
};

export const EngineeringSelected = Template.bind({});
EngineeringSelected.args = {
    categories: categoryList as WpCategory[],
    selectedCategory: categoryList[6].uri,
    searchUrl: '/search',
};

export const FieldsOfStudySelected = Template.bind({});
FieldsOfStudySelected.args = {
    categories: categoryList as WpCategory[],
    selectedCategory: categoryList[8].wpChildren.nodes[2].uri,
    searchUrl: '/search',
};

export const NetworkSelected = Template.bind({});
NetworkSelected.args = {
    categories: categoryList as WpCategory[],
    selectedCategory: categoryList[11].uri,
    searchUrl: '/search',
};

export const InputOpen = Template.bind({});
InputOpen.args = {
    categories: categoryList as WpCategory[],
    selectedCategory: categoryList[0].uri,
    searchValue: 'Quantic search',
    searchUrl: '/search',
};

export const IsStick = Template.bind({});
IsStick.args = {
    categories: categoryList as WpCategory[],
    selectedCategory: categoryList[0].uri,
    searchUrl: '/search',
    hasTopBanner: true,
    buttonText: 'SIGN UP - IT’S FREE',
};

IsStick.decorators = [
    StoryContainer => (
        <div style={{ background: 'white' }}>
            <TopBanner
                text="Here for the free MBA? Round 1 applications close May 15."
                linkText="Apply now"
                linkUri="###"
            />
            <div style={{ marginTop: '3rem', paddingTop: '20rem', paddingBottom: '5rem' }}>
                <StoryContainer />
            </div>
            <div>
                <img src="https://via.placeholder.com/800x900" width="680" height="766" alt="fill murray" />
                <img src="https://via.placeholder.com/800x900" width="680" height="766" alt="fill murray" />
            </div>
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
