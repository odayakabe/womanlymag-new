require('dotenv-safe').config();

module.exports = {
  siteMetadata: {
    title: 'Womanly Mag',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        host: `${process.env.CONTENTFUL_PREVIEW}`
          ? 'preview.contentful.com'
          : 'cdn.contentful.com',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-105571821-1',
        // TODO: Will need this when i18n enabled:
        // anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Yantramanav:100,400,700,900'],
      },
    },
    'gatsby-plugin-netlify', // Important: make sure to put last in the array
  ],
};
