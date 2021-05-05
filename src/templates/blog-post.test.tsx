import renderer from 'react-test-renderer';
import React from 'react';
import * as Gatsby from 'gatsby';
import { Maybe, Node, WpCategory, WpPost } from '../../graphql-types';
import mockImage from '../assets/images/default_shared_img.png';
import BlogPost, { BlogPostProps } from './blog-post';
import { StaticSeo } from '../components/seo/static-seo';

beforeEach(() => {
    jest.clearAllMocks();
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => ({
        blogConfig: {
            siteMetadata: {
                title: `Default Starter`,
                blog: {
                    title: 'Quantic Blog',
                },
                navbarMenuList: [],
            },
        },
        categories: [],
    }));
});

const createTestProps = (props: BlogPostProps) => ({
    ...props,
});

const mockWpCategories: Array<WpCategory> = [{
    id: "1",
    databaseId: 1,
    children: Array<Node>({
        id: '',
        children: Array<Node>(),
        internal: { owner: '', type: '', contentDigest: '' },
    }),
    internal: { owner: '', type: '', contentDigest: '' },
    name: 'Education',
    description: 'Acquisition of knowledge, skills, values, beliefs, and habits.',
    uri: '#',
},
{
    id: "2",
    databaseId: 2,
    children: Array<Node>({
        id: '',
        children: Array<Node>(),
        internal: { owner: '', type: '', contentDigest: '' },
    }),
    internal: { owner: '', type: '', contentDigest: '' },
    name: 'Career Planning',
    description: "Take time to decide what your career goals are and how you'll get there.",
    uri: '#',
}]

const august272020Date: Maybe<Date> = new Date(1598541186000);
const mockWpPosts: Array<WpPost> = [{
    id: "1",
    databaseId: 1,
    isSticky: false,
    categories: {
        nodes: mockWpCategories,
    },
    custom: {
        showAuthor: true,
    },
    title: `This is the blog post #1`,
    excerpt: `<p>This is a small excerpt of the blog post</p>`,
    content: '<div><p>This is the first paragraph</p></div><div><ul><li>This is a list item</li><li>This is another list item</li></ul></div>',
    date: august272020Date,
    uri: 'https://quantic.edu/',
    featuredImage: {
        node: {
            id: '0',
            uri: '',
            databaseId: 0,
            mediaItemUrl: mockImage,
            altText: 'leadership',
            children: [{ id: '0', children: [], internal: { contentDigest: '', owner: '', type: '' } }],
            internal: { contentDigest: '', owner: '', type: '' },
        },
    },
    children: [{ id: '0', children: [], internal: { contentDigest: '', owner: '', type: '' } }],
    internal: { contentDigest: '', owner: '', type: '' },
},{
    id: "2",
    databaseId: 2,
    isSticky: false,
    categories: {
        nodes: [mockWpCategories[1]],
    },
    custom: {
        showAuthor: true,
    },
    title: `This is the blog post #2`,
    excerpt: `<p>This is a small excerpt of the blog post</p>`,
    content: '<p>This is the blog HTML content</p>',
    date: august272020Date,
    uri: 'https://quantic.edu/',
    featuredImage: {
        node: {
            id: '0',
            uri: '',
            databaseId: 0,
            mediaItemUrl: mockImage,
            altText: 'leadership',
            children: [{ id: '0', children: [], internal: { contentDigest: '', owner: '', type: '' } }],
            internal: { contentDigest: '', owner: '', type: '' },
        },
    },
    children: [{ id: '0', children: [], internal: { contentDigest: '', owner: '', type: '' } }],
    internal: { contentDigest: '', owner: '', type: '' },
}]

test('should verify BlogPost template snapshot', () => {
    const props = createTestProps({
        pageContext: {
            baseUrl:'https://blog.quantic.edu',
            post: mockWpPosts[0],
            relatedPosts: [mockWpPosts[1]],
            seo: StaticSeo(mockWpPosts[0].title ?? '')
        }
    });
    const tree = renderer.create(<BlogPost {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});