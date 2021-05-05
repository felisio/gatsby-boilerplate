import path from 'path';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type WpUser implements Node {
      avatar: Avatar
      avatarImg: File @link(from: "avatarImg___NODE")
    }
    type Avatar {
      url: String
    }
    type Site implements Node {
      siteMetadata: SiteSiteMetadata!
    }
    type SiteSiteMetadata {
      title: String!
      caption: String!
      siteName: String!
      author: String!
      description: String!
      siteUrl: String!
      social: SiteSiteMetadataSocial!
    }
    type SiteSiteMetadataSocial {
      facebook: String!
      linkedin: String!
      twitterId: String!
      twitter: String!
      twitterUrl: String!
      instagram: String!
      email: String!
    }
    type SiteSiteMetadataBlog {
      title: String!
      url: String!
      defaultBlogCategory: String!
      topBanner: Boolean!
    }
    type SiteSiteMetadataNavbarMenuList {
      title: String!
      menuList: [SiteSiteMetadataNavbarMenuListMenuList!]
    }
    type SiteSiteMetadataNavbarMenuListMenuList {
      title: String!
      url: String!
    }
`;
    createTypes(typeDefs);
};

exports.onCreateNode = async ({ node, actions: { createNode }, store, cache, createNodeId }) => {
    if (node.internal.type === 'WpUser' && node.avatar.url !== null) {
        const isExternalLink = str => str.substr(0, 8) === 'https://' || str.substr(0, 7) === 'http://';
        if (isExternalLink(node.avatar.url)) {
            const fileNode = await createRemoteFileNode({
                url: node.avatar.url,
                parentNodeId: node.id,
                createNode,
                createNodeId,
                cache,
                store,
            });
            if (fileNode) {
                node.avatarImg___NODE = fileNode.id;
            }
        }
    }
};

const FLUID_IMAGE_FRAGMENT = `
  fragment fluidImage on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
    base64
    srcWebp
    srcSetWebp
  }
`;

const ALL_POSTS_QUERY = `

${FLUID_IMAGE_FRAGMENT}

query AllPosts {
  posts: allWpPost {
    nodes {
      id
      uri
      title
      date
      content
      excerpt
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxHeight: 800) {
                ...fluidImage
              }
            }
          }
        }
      }
      categories {
        nodes {
          id
          name
          uri
          ancestors {
            nodes {
              id
              name
              uri
            }
          }
          wpChildren {
            nodes {
              id
              name
              uri
            }
          }
        }
      }
      author {
        node {
          id
          name
          avatar {
            url
          }
          avatarImg {
            childImageSharp {
              fluid(maxHeight: 100) {
                ...fluidImage
              }
            }
          }
        }
      }
      tags {
        nodes {
          id
          name
          uri
        }
      }
      custom {
        showAuthor
        verticalImage {
          localFile {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...fluidImage
              }
            }
          }
        }
        horizontalImage {
          localFile {
            childImageSharp {
              fluid(maxHeight: 800) {
                ...fluidImage
              }
            }
          }
        }
        primaryCategory {
          id
          name
          uri
          ancestors {
            nodes {
              id
              name
              uri
            }
          }
          wpChildren {
            nodes {
              id
              name
              uri
            }
          }
        }
      }
      seo {
        canonical
        cornerstone
        focuskw
        metaDesc
        metaKeywords
        twitterTitle
        title
        twitterDescription
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphPublisher
        opengraphPublishedTime
        opengraphAuthor
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphSiteName
        opengraphDescription
        opengraphModifiedTime
        twitterImage {
          uri
        }
        opengraphImage {
          uri
        }
      }
    }
  }
}
`;

const ALL_CATEGORIES_QUERY = `

${FLUID_IMAGE_FRAGMENT}

query AllCategories {
  categories: allWpCategory {
    nodes {
      id
      name
      uri
      description
      ancestors {
        nodes {
          id
          name
          uri
        }
      }
      wpChildren {
        nodes {
          id
          name
          uri
        }
      }
      custom {
        categoryBanner {
          localFile {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...fluidImage
              }
            }
          }
        }
        categoryIcon {
          localFile {
            childImageSharp {
              fluid(maxHeight: 100) {
                ...fluidImage
              }
            }
          }
        }
        relatedCategories {
          id
          name
          uri
          description
          custom {
            categoryBanner {
              localFile {
                childImageSharp {
                  fluid(maxHeight: 400) {
                    ...fluidImage
                  }
                }
              }
            }
            categoryIcon {
              localFile {
                childImageSharp {
                  fluid(maxHeight: 100) {
                    ...fluidImage
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const ALL_TAGS_QUERY = `
query AllTags {
  tags: allWpTag {
    nodes {
      id
      name
      uri
      custom {
        relatedTags {
          id
          name
          uri
          description
        }
      }
    }
  }
}
`;

function getPostCategories(post) {
    const categories = [];
    if (post && post.categories && post.categories.nodes) {
        const allPosts = post.categories.nodes;
        allPosts.forEach(category => {
            if (category) {
                categories.push(category);
            }
        });
    }
    return categories;
}

function getPostTags(post) {
    const tags = [];
    if (post && post.tags && post.tags.nodes) {
        const allTags = post.tags.nodes;
        allTags.forEach(tag => {
            if (tag) {
                tags.push(tag);
            }
        });
    }
    return tags;
}

function getLatestPostsSameCategories(post, posts, maxPosts) {
    return posts
        .filter(otherPost => {
            const postCategories = getPostCategories(post);
            const otherPostCategories = getPostCategories(otherPost);
            const matches = postCategories.filter(category => {
                return (
                    otherPostCategories.filter(c => {
                        return category.id === c.id;
                    }).length > 0
                );
            });
            return matches.length > 0;
        })
        .sort((a, b) => b.date - a.date)
        .filter((_, index) => {
            return index < maxPosts;
        });
}

function getLatestPostSameTags(post, posts, maxPosts) {
    return posts
        .filter(otherPost => {
            const postTags = getPostTags(post);
            const otherPostTags = getPostTags(otherPost);
            const matches = postTags.filter(tag => {
                return (
                    otherPostTags.filter(t => {
                        return tag.id === t.id;
                    }).length > 0
                );
            });
            return matches.length > 0;
        })
        .sort((a, b) => b.date - a.date)
        .filter((_, index) => {
            return index < maxPosts;
        });
}

function getRelatedPosts(post, allPosts, maxPosts) {
    const allButPost = allPosts
        .filter(otherPost => {
            return otherPost.id !== post.id;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    const relatedPosts = getLatestPostsSameCategories(post, allButPost, maxPosts);
    const allButPostAndRelated = allButPost.filter(_post => {
        return !relatedPosts.includes(_post);
    });
    if (relatedPosts.length < maxPosts) {
        const latestSameTags = getLatestPostSameTags(post, allButPostAndRelated, maxPosts - relatedPosts.length);
        latestSameTags.forEach(latest => {
            relatedPosts.push(latest);
        });
    }
    return relatedPosts;
}

function getPostsForCategory(categoryId, allPosts) {
    return allPosts.filter(post => {
        const postCategories = getPostCategories(post);
        if (!postCategories || postCategories.length === 0) {
            return [];
        }
        return (
            postCategories.filter(category => {
                if (category.id === categoryId) {
                    return true;
                }
                if (category.wpChildren && category.wpChildren.nodes) {
                    return category.wpChildren.nodes.filter(child => child.id === categoryId).length > 0;
                }
                return false;
            }).length > 0
        );
    });
}

function getPostsForTag(tagId, allPosts) {
    return allPosts.filter(post => {
        const postTags = getPostTags(post);
        if (!postTags || postTags.length === 0) {
            return [];
        }
        return (
            postTags.filter(tag => {
                return tag.id === tagId;
            }).length > 0
        );
    });
}

function parseRelatedCategories(category) {
    if (category.custom.relatedCategories) {
        return category.custom.relatedCategories.filter(relatedCategory => {
            return relatedCategory != null && relatedCategory !== undefined;
        });
    }
    return [];
}

function parseRelatedTags(tag) {
    if (tag.custom.relatedTags) {
        return tag.custom.relatedTags.filter(relatedTag => {
            return relatedTag != null && relatedTag !== undefined;
        });
    }
    return [];
}

async function generateHomePages({ graphql, actions }) {
    const template = path.resolve('./src/templates/home.tsx');
    const { data } = await graphql(ALL_POSTS_QUERY);
    if (!data || !data.posts || !data.posts.nodes || data.posts.nodes.length === 0) {
        return;
    }
    const allPosts = data.posts.nodes.sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestPostCount = 3;
    const cardsPerPage = 9;
    const latestPosts = allPosts.filter((post, postIndex) => {
        return postIndex < latestPostCount;
    });
    const allTrendingPosts = allPosts.filter((post, postIndex) => {
        return postIndex >= latestPostCount;
    });
    const totalPageCount = Math.ceil(allTrendingPosts.length / cardsPerPage);
    Array.from({ length: totalPageCount }).forEach((_, index) => {
        const firstTrendingPostIndex = index * cardsPerPage;
        const lastTrendingPostIndex = firstTrendingPostIndex + cardsPerPage;
        const trendingPosts = allTrendingPosts.filter((post, postIndex) => {
            return postIndex >= firstTrendingPostIndex && postIndex < lastTrendingPostIndex;
        });
        const pageIndex = index + 1;
        actions.createPage({
            path: pageIndex > 1 ? `/${pageIndex}` : '/',
            component: template,
            context: {
                totalPageCount,
                currentPage: pageIndex,
                latestPosts,
                trendingPosts,
            },
        });
    });
}

async function generateBlogPostPages({ graphql, actions }) {
    const template = path.resolve('./src/templates/blog-post.tsx');
    const { data } = await graphql(ALL_POSTS_QUERY);
    if (!data || !data.posts || !data.posts.nodes || data.posts.nodes.length === 0) {
        return;
    }
    const baseUrl = 'https://blog.quantic.edu';
    const allPosts = data.posts.nodes;
    allPosts.forEach(post => {
        const relatedPosts = getRelatedPosts(post, allPosts, 3);
        actions.createPage({
            path: post.uri,
            component: template,
            context: {
                baseUrl,
                post,
                relatedPosts,
                seo: post.seo,
            },
        });
    });
}

async function generateCategoryPages({ graphql, actions }) {
    const template = path.resolve('./src/templates/in-category.tsx');
    const allCategoriesData = await graphql(ALL_CATEGORIES_QUERY);
    if (
        !allCategoriesData ||
        !allCategoriesData.data ||
        !allCategoriesData.data.categories ||
        !allCategoriesData.data.categories.nodes ||
        allCategoriesData.data.categories.nodes.length === 0
    ) {
        return;
    }
    const allCategories = allCategoriesData.data.categories.nodes;
    const allPostsData = await graphql(ALL_POSTS_QUERY);
    if (!allPostsData || !allPostsData.data || !allPostsData.data.posts || !allPostsData.data.posts.nodes) {
        return;
    }
    const allPosts = allPostsData.data.posts.nodes;
    const cardsPerPage = 9;
    allCategories.forEach(category => {
        const categoryPosts = getPostsForCategory(category.id, allPosts).sort(
            (a, b) => new Date(b.date) - new Date(a.date),
        );
        let pageCount = Math.ceil(categoryPosts.length / cardsPerPage);
        // Even if there are no posts, page should be generated for category
        pageCount = pageCount > 0 ? pageCount : 1;
        Array.from({ length: pageCount }).forEach((_, index) => {
            const pageIndex = index + 1;
            const postMinIndex = index * cardsPerPage;
            const postMaxIndex = postMinIndex + cardsPerPage;
            actions.createPage({
                path: pageIndex > 1 ? `${category.uri}${pageIndex}` : category.uri,
                component: template,
                context: {
                    category,
                    posts: categoryPosts.filter(
                        (post, postIndex) => postIndex >= postMinIndex && postIndex < postMaxIndex,
                    ),
                    relatedCategories: parseRelatedCategories(category),
                    currentPage: pageIndex,
                    totalPageCount: pageCount,
                },
            });
        });
    });
}
async function generateTagPages({ graphql, actions }) {
    const template = path.resolve('./src/templates/tagged-in.tsx');
    const allPostsData = await graphql(ALL_POSTS_QUERY);
    const allTagsData = await graphql(ALL_TAGS_QUERY);
    if (
        !allTagsData ||
        !allTagsData.data ||
        !allTagsData.data.tags ||
        !allTagsData.data.tags.nodes ||
        allTagsData.data.tags.nodes.length === 0
    )
        return;
    const allPosts = allPostsData.data.posts.nodes;
    if (!allPostsData || !allPostsData.data || !allPostsData.data.posts || !allPostsData.data.posts.nodes) {
        return;
    }
    const allTags = allTagsData.data.tags.nodes;
    const cardsPerPage = 9;
    allTags.forEach(tag => {
        const tagPosts = getPostsForTag(tag.id, allPosts).sort((a, b) => new Date(b.date) - new Date(a.date));
        let pageCount = Math.ceil(tagPosts.length / cardsPerPage);
        // Even if there are no posts for tag, page should still be generated
        pageCount = pageCount > 0 ? pageCount : 1;
        Array.from({ length: pageCount }).forEach((_, index) => {
            const pageIndex = index + 1;
            const minPostIndex = index * cardsPerPage;
            const maxPostIndex = minPostIndex + cardsPerPage;
            const pageTagPosts = tagPosts.filter((t, tagIndex) => {
                return tagIndex >= minPostIndex && tagIndex < maxPostIndex;
            });
            actions.createPage({
                path: pageIndex > 1 ? `${tag.uri}${pageIndex}` : tag.uri,
                component: template,
                context: {
                    tag,
                    posts: pageTagPosts,
                    relatedTags: parseRelatedTags(tag),
                    currentPage: pageIndex,
                    totalPageCount: pageCount,
                },
            });
        });
    });
}

async function generateSearchPage({ graphql, actions }) {
    const template = path.resolve('./src/templates/search.tsx');
    const { data } = await graphql(ALL_POSTS_QUERY);
    if (!data || !data.posts || !data.posts.nodes || data.posts.nodes.length === 0) {
        return;
    }
    const allPosts = data.posts.nodes;
    const latestPostCount = 3;
    const latestPosts = allPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter((post, postIndex) => {
            return postIndex < latestPostCount;
        });
    actions.createPage({
        path: '/search',
        component: template,
        context: {
            latestPosts,
        },
    });
}

export async function createPages(params) {
    await Promise.all([
        generateHomePages(params),
        generateBlogPostPages(params),
        generateCategoryPages(params),
        generateTagPages(params),
        generateSearchPage(params),
    ]);
}
