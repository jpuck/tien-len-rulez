const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://tienlen.org',
    gaTrackingId: process.env.GOOGLE_ANALYTICS_PROPERTY_ID,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '/',
    title: 'Tien Len',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [
      { text: 'Play', link: 'https://play.tienlen.org' },
      { text: 'Leaderboard', link: 'https://leaderboard.tienlen.org' },
    ],
    frontline: false,
    ignoreIndex: false,
    title: "",
  },
  siteMetadata: {
    title: 'Tien Len Rulez',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/jpuck/tien-len-rulez/tree/main/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
