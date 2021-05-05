import { FluidObject } from 'gatsby-image';
import { Node, WpPost, WpCategory, ImageSharp, File, WpMediaItem } from '../../graphql-types';
import generateRandomStrWithLength from './stringUtils';
import mockImage from '../assets/images/default_shared_img.png';

const february52021Date = '2020-10-30T17:16:52';

function generateDeterministicDescription(index: number) {
    return `This is the description for post ${index}. `.repeat(index + 1);
}

export function getMockAvatar() {
    return {
        src: mockImage,
        srcSet: mockImage,
        aspectRatio: 1,
        sizes: '(max-width: 40px) 100vw, 40px',
    } as FluidObject;
}

export function getMockCardBanner() {
    return {
        src: mockImage,
        srcSet: mockImage,
        aspectRatio: 1,
        sizes: '(max-width: 600px) 100vw, 600px',
    } as FluidObject;
}

function generateWpTags(n: number, nameFn: (n: number) => String) {
    return Array.from({ length: n }, (_, index) => {
        return {
            id: `${index}`,
            databaseId: index,
            children: Array<Node>({
                id: '',
                children: Array<Node>(),
                internal: { owner: '', type: '', contentDigest: '' },
            }),
            internal: { owner: '', type: '', contentDigest: '' },
            name: nameFn(index),
            uri: '#',
        };
    });
}

export function generateDeterministicWpTags(n: number) {
    return generateWpTags(n, index => {
        return `WpTag00${index}`;
    });
}

export function generateRandomWpTags(n: number) {
    return generateWpTags(n, () => {
        return generateRandomStrWithLength(Math.random() * 10 + 5);
    });
}

export function generateDeterministicWpCategories(n: number) {
    return Array.from({ length: n }, (_, index) => {
        return {
            id: `${index}`,
            databaseId: index,
            children: Array<Node>({
                id: '',
                children: Array<Node>(),
                internal: { owner: '', type: '', contentDigest: '' },
            }),
            internal: { owner: '', type: '', contentDigest: '' },
            name: `Category #${index}`,
            description: `This is the description for the category #${index}. `.repeat(index + 1),
            uri: '#',
        };
    }) as WpCategory[];
}

export function generateRandomWpPosts(n: number): Array<WpPost> {
    const imageSharp = {
        fluid: {
            src: mockImage,
            srcSet: mockImage,
            aspectRatio: 1,
            sizes: '(max-width: 600px) 100vw, 600px',
            presentationWidth: 400,
            presentationHeight: 400,
        },
    } as ImageSharp;
    const localFile = {
        childImageSharp: {
            ...imageSharp,
        },
    } as File;
    return Array.from({ length: n }).map((_, index) => {
        const newPost: WpPost = {
            id: `${index}`,
            databaseId: index,
            isSticky: false,
            categories: {
                nodes: generateDeterministicWpCategories(1),
            },
            title: `This is the blog post #${index}`,
            excerpt: `<p>${generateDeterministicDescription(index)}</p>`,
            content: '<p>This is the blog HTML content</p>',
            date: february52021Date,
            uri: 'https://quantic.edu/',
            children: [{ id: '0', children: [], internal: { contentDigest: '', owner: '', type: '' } }],
            internal: { contentDigest: '', owner: '', type: '' },
            custom: {
                horizontalImage: {
                    localFile: {
                        ...localFile,
                    },
                } as WpMediaItem,
                verticalImage: {
                    localFile: {
                        ...localFile,
                    },
                } as WpMediaItem,
            },
        };
        return newPost;
    });
}
