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
      '/index',
      '/beer',
    ],
    collapsedNav: [
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
    description: 'Documentation built with mdx. All the Tien Len Fayar things',
    ogImage: null,
    docsLocation: 'https://github.com/jpuck/tien-len-rulez/tree/main/content',
    favicon: '/favicon.ico',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Tien Len Rulez',
      short_name: 'tien-len',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'public/android-chrome-512x512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
