import { FluidObject } from 'gatsby-image';
import { WpCategory, WpPost, WpTag } from '../../graphql-types';
import { BreadcrumbPage } from '../components/breadcrumb/breadcrumb';
import { WpSearchResultPostProps } from '../hooks/use-search';
import { ComponentOrientation } from './componentOrientation';

export function getPostCategories(post: WpPost) {
    const categories = Array<WpCategory>();
    post.categories?.nodes?.forEach(category => {
        if (category) {
            categories.push(category);
        }
    });
    return categories;
}

export function getPostTags(post: WpPost) {
    const tags = Array<WpTag>();
    post.tags?.nodes?.forEach(tag => {
        if (tag) {
            tags.push(tag);
        }
    });
    return tags;
}

export function getPostImage(post: WpPost, orientation: ComponentOrientation) {
    const horizontalImage = post.custom?.horizontalImage?.localFile?.childImageSharp?.fluid;
    const verticalImage = post.custom?.verticalImage?.localFile?.childImageSharp?.fluid;
    let postFluidImage;
    if (orientation === ComponentOrientation.horizontal && horizontalImage) {
        postFluidImage = horizontalImage;
    } else if (orientation === ComponentOrientation.vertical && verticalImage) {
        postFluidImage = verticalImage;
    }
    const fluidImage = postFluidImage ?? post.featuredImage?.node?.localFile?.childImageSharp?.fluid ?? undefined;
    return fluidImage as FluidObject;
}

export function getPostAltText(post: WpPost, orientation: ComponentOrientation) {
    const horizontalImageAltText = post.custom?.horizontalImage?.altText;
    const verticalImageAltText = post.custom?.verticalImage?.altText;
    let altText = '';
    if (orientation === ComponentOrientation.horizontal && horizontalImageAltText) {
        altText = horizontalImageAltText;
    } else if (orientation === ComponentOrientation.vertical && verticalImageAltText) {
        altText = verticalImageAltText;
    }
    return altText;
}

export function getPostCategoryTree(post: WpPost) {
    const tree = Array<WpCategory>();
    if (post?.custom?.primaryCategory) {
        if (post.custom?.primaryCategory?.ancestors?.nodes) {
            const parentNodes = post.custom?.primaryCategory?.ancestors?.nodes;
            if (parentNodes.length > 0 && parentNodes[0]) {
                tree.push(parentNodes[0]);
            }
        }
        tree.push(post.custom.primaryCategory);
    } else {
        const postCategories = getPostCategories(post);
        if (postCategories.length > 0) {
            const firstCategory = postCategories[0];
            if (firstCategory.ancestors?.nodes) {
                const parentNodes = firstCategory.ancestors?.nodes;
                if (parentNodes.length > 0 && parentNodes[0]) {
                    tree.push(parentNodes[0]);
                }
            }
            tree.push(firstCategory);
        }
    }
    return tree;
}

export function getPostCategory(post: WpPost) {
    const categoryTree = getPostCategoryTree(post);
    if (categoryTree.length === 0) return undefined;
    return categoryTree[categoryTree.length - 1];
}

export function getPostAvatar(post: WpPost) {
    return (post.author?.node?.avatarImg?.childImageSharp?.fluid as FluidObject) || null;
}

export function getPostAuthorName(post: WpPost) {
    return post.author?.node?.name ?? '';
}

export function getPostBreadcrumbData(post: WpPost) {
    const data: Array<BreadcrumbPage> = [];
    data.push({ title: 'Home', link: '/' });
    const categoryTree = getPostCategoryTree(post);
    categoryTree.forEach(category => {
        data.push({ title: category.name ?? '', link: category.uri ?? '' });
    });
    data.push({ title: post.title ?? '', link: post.uri ?? '' });
    return data;
}
export function getPostDate(post: WpPost | WpSearchResultPostProps) {
    return post.date ? new Date(post.date) : undefined;
}
