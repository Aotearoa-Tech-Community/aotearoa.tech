module.exports = {
  siteMetadata: {
    title: `Aotearoa Tech Community`,
    description: `Community is the answer.`,
    author: `@gar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aotearoa Tech Community`,
        short_name: `aotearoa.tech`,
        start_url: `/`,
        background_color: `#7a1f3d`,
        theme_color: `#7a1f3d`,
        display: `minimal-ui`,
        icon: `src/images/beet.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
