// const siteMetadata = require ('./siteMetadata');

// module.exports = {
//     siteUrl: siteMetadata.siteUrl,
//     generateRobotsTxt: true,
//     sitemapSize: 7000,
//   }

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://dev-swipe.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 7000,
  }