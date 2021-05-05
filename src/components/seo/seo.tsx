import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import favicon16 from '../../assets/favicons/favicon-16x16.png';
import favicon32 from '../../assets/favicons/favicon-32x32.png';
import favicon96 from '../../assets/favicons/favicon-96x96.png';
import favicon160 from '../../assets/favicons/favicon-160x160.png';
import favicon192 from '../../assets/favicons/favicon-192x192.png';
import faviconMsTile144 from '../../assets/favicons/mstile-144x144.png';
import appleTouchIcon57 from '../../assets/favicons/apple-touch-icon-57x57.png';
import appleTouchIcon60 from '../../assets/favicons/apple-touch-icon-60x60.png';
import appleTouchIcon72 from '../../assets/favicons/apple-touch-icon-72x72.png';
import appleTouchIcon76 from '../../assets/favicons/apple-touch-icon-76x76.png';
import appleTouchIcon114 from '../../assets/favicons/apple-touch-icon-114x114.png';
import appleTouchIcon120 from '../../assets/favicons/apple-touch-icon-120x120.png';
import appleTouchIcon144 from '../../assets/favicons/apple-touch-icon-144x144.png';
import appleTouchIcon152 from '../../assets/favicons/apple-touch-icon-152x152.png';
import appleTouchIcon180 from '../../assets/favicons/apple-touch-icon-180x180.png';
import { SeoQuery } from '../../../graphql-types';
import sharedImg from '../../assets/images/default_shared_img.png';

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title
                caption
                description
                siteUrl
                social {
                    twitter
                    twitterId
                    twitterUrl
                }
            }
        }
    }
`;

export type WpPageSeoData = {
    canonical?: string;
    cornerstone?: string;
    metaDesc?: string;
    focuskw?: string;
    metaKeywords?: string;
    metaRobotsNofollow?: string;
    metaRobotsNoindex?: string;
    opengraphAuthor?: string;
    opengraphDescription?: string;
    opengraphModifiedTime?: string;
    opengraphPublishedTime?: string;
    opengraphPublisher?: string;
    opengraphSiteName?: string;
    opengraphTitle?: string;
    opengraphType?: string;
    opengraphUrl?: string;
    facebookImage?: string;
    title?: string;
    twitterAccountId?: string;
    twitterSite?: string;
    twitterCreator?: string;
    twitterDescription?: string;
    twitterTitle?: string;
    twitterImage?: {
        uri: string;
    };
};

export type SeoProps = {
    prev?: number | null;
    next?: number | null;
    seo?: WpPageSeoData | null;
    title?: string;
    image?: string;
    description?: string;
    robotsNoIndex?: boolean;
};

function getPathname(location: Location) {
    const path = location.pathname.split('/').filter(Boolean);
    const lastPosition = parseInt(path[path.length - 1], 10) || null;
    if (Number.isInteger(lastPosition)) {
        path.pop();
    }

    return path.length ? `${path.join('/')}/` : '';
}

export default function Seo({
    prev,
    next,
    seo,
    title,
    image = sharedImg,
    description,
    robotsNoIndex = false,
}: SeoProps) {
    const seoQueryResponse = useStaticQuery<SeoQuery>(query);
    const titleTemplate = title ? `%s | ${seoQueryResponse?.site?.siteMetadata.title}` : '';
    const siteDescription = seo?.metaDesc ? seo.metaDesc : seoQueryResponse?.site?.siteMetadata.description;
    const location = typeof window !== 'undefined' ? window.location : null;
    const url = location?.href;
    const themeColor = '#ff4d63';
    const env = process.env.GATSBY_ACTIVE_ENV;

    const getTitle = () => {
        let stringTitle = seoQueryResponse?.site?.siteMetadata.title;
        if (seo?.title) {
            stringTitle = seo.title;
        }
        if (title) {
            stringTitle = title;
        }
        return stringTitle;
    };

    const getOgTitle = () => {
        let ogTitle = title;
        if (seo?.opengraphTitle) {
            ogTitle = seo.opengraphTitle;
        }
        return ogTitle;
    };

    return (
        <Helmet titleTemplate={titleTemplate}>
            <html lang="en" />
            <title>{getTitle()}</title>
            {url && <link href={url} rel="canonical" />}

            {next && location && <link href={`${location.origin}/${getPathname(location)}${next}`} rel="next" />}
            {prev && location && <link href={`${location.origin}/${getPathname(location)}${prev}`} rel="prev" />}

            {/* Meta properties */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta httpEquiv="content-type" content="text/html charset=UTF8" />
            <meta name="description" content={siteDescription} />
            {seo?.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
            {seo?.opengraphPublisher && <meta property="article:publisher" content={seo.opengraphPublisher} />}

            {/* Favicon */}
            <link rel="icon" type="image/x-icon" href="../../assets/favicons/favicon.ico" />

            {/* Windows 8.1 + IE11 and above */}
            <meta name="msapplication-config" content="../../assets/favicons/browserconfig.xml" />
            <meta name="msapplication-TileImage" content={faviconMsTile144} />
            <meta name="msapplication-TileColor" content={themeColor} />
            {/* IOS */}
            <link rel="apple-touch-icon" sizes="57x57" href={appleTouchIcon57} />
            <link rel="apple-touch-icon" sizes="60x60" href={appleTouchIcon60} />
            <link rel="apple-touch-icon" sizes="72x72" href={appleTouchIcon72} />
            <link rel="apple-touch-icon" sizes="76x76" href={appleTouchIcon76} />
            <link rel="apple-touch-icon" sizes="114x114" href={appleTouchIcon114} />
            <link rel="apple-touch-icon" sizes="120x120" href={appleTouchIcon120} />
            <link rel="apple-touch-icon" sizes="144x144" href={appleTouchIcon144} />
            <link rel="apple-touch-icon" sizes="152x152" href={appleTouchIcon152} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon180} />
            {/* General */}
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
            <link rel="icon" type="image/png" sizes="160x160" href={favicon160} />
            <link rel="icon" type="image/png" sizes="192x192" href={favicon192} />

            {/* OpenGraph Properties */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={seoQueryResponse?.site?.siteMetadata.title} key="ogsitename" />
            <meta property="og:title" content={getOgTitle()} />
            <meta property="og:description" content={seo?.opengraphDescription || description} />
            <meta property="og:image" content={image} />
            {url && <meta property="og:url" content={url} />}
            {seo?.opengraphType && <meta property="og:type" content={seo.opengraphType} />}

            {/* Twitter */}
            <meta
                property="twitter:account_id"
                content={seo?.twitterAccountId || seoQueryResponse?.site?.siteMetadata.social?.twitterId}
            />
            <meta
                name="twitter:site"
                content={seo?.twitterSite || seoQueryResponse?.site?.siteMetadata.social?.twitter}
            />
            <meta
                name="twitter:creator"
                content={seo?.twitterCreator || seoQueryResponse?.site?.siteMetadata.social?.twitter}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content={
                    seo?.twitterTitle ||
                    `${seoQueryResponse?.site?.siteMetadata.title} | ${seoQueryResponse?.site?.siteMetadata.caption}`
                }
            />
            <meta
                name="twitter:description"
                content={seo?.twitterDescription || seoQueryResponse?.site?.siteMetadata.description}
            />
            <meta name="twitter:image:src" content={seo?.twitterImage?.uri || image} />
            {url && <meta name="twitter:url" content={url} />}

            {/* No Index + No Follow */}
            {robotsNoIndex || env !== 'production' ? (
                <meta name="robots" content="noindex,nofollow" />
            ) : (
                <meta
                    name="robots"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
            )}

            {/* Support Mobile */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="theme-color" content={themeColor} />
            <meta name="format-detection" content="telephone=no" />
        </Helmet>
    );
}
