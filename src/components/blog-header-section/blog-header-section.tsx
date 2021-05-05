import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogHeader from '../blog-header/blog-header';
import TopBanner from '../top-banner/top-banner';
import { StyledBlogHeaderSection, StyledBlogHeaderCategoryMenu } from './blog-header-section.styles';
import { Navbar, NavbarMenuListProps } from '../navbar/navbar';
import { BlogHeaderSectionQuery, WpCategory } from '../../../graphql-types';
import DesktopCategoryMenu from '../desktop-category-menu/desktop-category-menu';
import MobileCategoryMenu from '../mobile-category-menu/mobile-category-menu';
import useTopBanner from '../../hooks/use-top-banner';

const query = graphql`
    query BlogHeaderSection {
        blogConfig: site {
            siteMetadata {
                blog {
                    title
                    url
                    defaultBlogCategory
                    topBanner
                }
                navbarMenuList {
                    title
                    menuList {
                        title
                        url
                    }
                }
            }
        }
        categories: allWpCategory {
            nodes {
                id
                uri
                name
                ancestors {
                    nodes {
                        id
                    }
                }
                wpChildren {
                    nodes {
                        id
                        uri
                        name
                    }
                }
            }
        }
    }
`;

export type BlogHeaderSectionProps = {
    hasCategoryMenu?: boolean;
    categoryLink?: string;
    searchValue?: string;
};

export default function BlogHeaderSection({
    hasCategoryMenu = true,
    categoryLink = '',
    searchValue = '',
}: BlogHeaderSectionProps) {
    const { message, hideTopBanner } = useTopBanner('mba');
    const [menuMobileState, setMenuMobileState] = useState<boolean>(false);
    const { blogConfig, categories } = useStaticQuery<BlogHeaderSectionQuery>(query);
    const loginLink = 'https://quantic.edu/sign-in';
    const buttonText = 'SIGN UP - IT’S FREE';
    const buttonLink = 'https://quantic.edu/candidates/signup';
    const hasTopBanner = blogConfig?.siteMetadata.blog?.topBanner || false;

    const getWpCategoryList = () => {
        const homeCategory = {
            id: 'homeCategory',
            uri: blogConfig?.siteMetadata.blog?.url || '/',
            name: blogConfig?.siteMetadata.blog?.defaultBlogCategory || '',
            wpChildren: {
                nodes: null,
            },
        } as WpCategory;
        const categoryList = categories?.nodes?.filter(item => item.ancestors === null) || [];
        return [homeCategory, ...categoryList] as WpCategory[];
    };
    const renderCategoryMenu = () => {
        const pathUrl = categoryLink || window.location.pathname;
        return (
            <StyledBlogHeaderCategoryMenu>
                <DesktopCategoryMenu
                    categories={getWpCategoryList()}
                    selectedCategory={pathUrl || ''}
                    loginLink={loginLink}
                    buttonText={buttonText}
                    buttonLink={buttonLink}
                    hasTopBanner={hasTopBanner}
                    searchValue={searchValue}
                />
                <MobileCategoryMenu
                    categoryList={getWpCategoryList()}
                    urlActive={pathUrl}
                    hasTopBanner={hasTopBanner}
                    stick={!menuMobileState}
                    searchValue={searchValue}
                />
            </StyledBlogHeaderCategoryMenu>
        );
    };

    const renderNavbar = () => {
        const navBarMenuList = blogConfig?.siteMetadata.navbarMenuList?.map((item, index) => {
            if (index === 0) {
                return {
                    title: item?.title,
                    menuList: [item?.menuList?.slice(0, 3), item?.menuList?.slice(3, item?.menuList?.length)],
                };
            }
            return item;
        }) as [NavbarMenuListProps];

        return (
            <Navbar
                navbarMenuList={navBarMenuList}
                buttonText={buttonText}
                buttonLink={buttonLink}
                hasLoginButton
                loginButtonLink={loginLink}
                onClickMobileMenu={menuState => setMenuMobileState(menuState)}
            />
        );
    };

    return (
        <StyledBlogHeaderSection>
            {hasTopBanner && !hideTopBanner && (
                <TopBanner text={message!} linkText="Apply now" linkUri={buttonLink} isFixed />
            )}
            <BlogHeader
                title={blogConfig?.siteMetadata.blog?.title!}
                navbar={renderNavbar()}
                hasTopBanner={hasTopBanner}
            />
            {hasCategoryMenu && renderCategoryMenu()}
        </StyledBlogHeaderSection>
    );
}
