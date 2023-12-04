/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Healthy Food",
    description: "Healthy recipes site",
    author: "Vida Khalili",
    person: { name: "vida", age: "31" },
    simpleData: ["item 1", "item2"],
    complexData: [
      { name: "vida", age: "31" },
      { name: "mohammad", age: "42" },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Antonio", "Montserrat"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
