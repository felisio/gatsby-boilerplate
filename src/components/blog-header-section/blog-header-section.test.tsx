import React from 'react';
import * as Gatsby from 'gatsby';
import renderer from 'react-test-renderer';
import BlogHeaderSection from './blog-header-section';

beforeEach(() => {
    jest.clearAllMocks();

    jest.mock('../../hooks/use-top-banner', () => ({
        useTopBanner: () => ({
            message: 'Round 1 application deadline for the upcoming class is April 2',
            hideTopBanner: false,
        }),
    }));

    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => ({
        blogConfig: {
            siteMetadata: {
                title: `Default Starter`,
                blog: {
                    title: 'Quantic Blog',
                    topBanner: true,
                },
                navbarMenuList: [],
            },
        },
        categories: [],
    }));
});

test('should verify BlogHeaderSection Component snapshot', () => {
    const tree = renderer.create(<BlogHeaderSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
