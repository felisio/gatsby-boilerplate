/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import dotenv from "dotenv";

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

dotenv.config({ path: `.env.${activeEnv}` });

const envList = [
  {
    nodeEnv: "development",
    sentryEnv: "Local Development - Client",
  },
  {
    nodeEnv: "staging",
    sentryEnv: "Staging - Client",
  },
  {
    nodeEnv: "production",
    sentryEnv: "Production - Client",
  },
];

const { sentryEnv } = envList.find((env) => env.nodeEnv === activeEnv);

export default {
  siteMetadata: {
    title: `Quantic School of Business & Technology`,
    caption: `The Modern MBA`,
    description: `Earn your degree with Quantic's award-winning free MBA & radically affordable Executive MBA. Join global business leaders & learn with cutting-edge technology. Apply today for free.`,
    author: `@QuanticSchool`,
    siteUrl: `https://quantic.edu/`,
    social: {
      facebook: "https://www.facebook.com/QuanticSchool",
      linkedin: "https://linkedin.com/school/QuanticSchool",
      twitter: "@QuanticSchool",
      twitterId: "2585893555",
      twitterUrl: "https://twitter.com/QuanticSchool",
      instagram: "https://www.instagram.com/QuanticSchool/",
      email: "",
    },
    blog: {
      title: "Quantic Blog",
      url: "/",
      defaultBlogCategory: "Home",
      topBanner: true,
    },
    navbarMenuList: [
      {
        title: "For Students",
        menuList: [
          {
            title: "The MBA",
            url: "https://quantic.edu/mba",
          },
          {
            title: "The Executive MBA",
            url: "https://quantic.edu/executive-mba",
          },
          {
            title: "All Programs",
            url: "https://quantic.edu/programs",
          },
          {
            title: "Student Experience",
            url: "https://quantic.edu/student-experience",
          },
          {
            title: "Sponsored Tuition",
            url: "https://quantic.edu/sponsored-tuition/students",
          },
          {
            title: "Career Network",
            url: "https://quantic.edu/candidates/join-career-network",
          },
        ],
      },
      {
        title: "For Employers",
        menuList: [
          {
            title: "Hire our Students",
            url: "https://quantic.edu/mba",
          },
          {
            title: "Tuition Reimbursement",
            url: "https://quantic.edu/executive-mba",
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
        sampleRate: 0.7,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_BLOG_GRAPHQL_ENDPOINT,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: false,
          },
        },
        html: {
          fallbackImageMaxWidth: 800,
        },
        type: {
          Post: {
            limit: activeEnv === `development` ? 35 : null,
          },
        },
        schema: {
          timeout: 50000,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: sentryEnv,
        enabled: (() => ["production", "staging"].indexOf(activeEnv) !== -1)(),
      },
    },
  ],
};
