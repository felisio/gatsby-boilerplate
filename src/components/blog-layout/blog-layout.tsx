import React, { ReactNode } from 'react';
import BlogHeaderSection from '../blog-header-section/blog-header-section';
import Ctabanner from '../ctabanner/ctabanner';
import Footer from '../footer/footer';
import { StyledBlogLayout } from './blog-layout.styles';

export type BlogLayoutProps = {
    children: ReactNode;
    hasCtabanner?: boolean;
    hasCategoryMenu?: boolean;
    categoryLink?: string;
    searchValue?: string;
};

export default function BlogLayout({
    children,
    hasCtabanner = false,
    hasCategoryMenu = true,
    categoryLink = '',
    searchValue,
}: BlogLayoutProps) {
    return (
        <StyledBlogLayout>
            <div className="content">
                <BlogHeaderSection
                    hasCategoryMenu={hasCategoryMenu}
                    categoryLink={categoryLink}
                    searchValue={searchValue}
                />
                <main>{children}</main>
                {hasCtabanner && (
                    <section>
                        <Ctabanner
                            title="Ready to jump start your career?"
                            subtitle="Start learning with Quantic."
                            buttonCta="Try a lesson"
                            buttonDestination="https://quantic.edu/"
                        />
                    </section>
                )}
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </StyledBlogLayout>
    );
}
