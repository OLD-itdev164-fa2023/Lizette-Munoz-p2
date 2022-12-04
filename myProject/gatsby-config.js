/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

//Add meta data
module.exports = {
  plugins: [
    //Will transform markdown files into interface so it can be used in graphiql
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  //This is an object
  siteMetadata: {
    title: "Portfolio",
    description: "Fullstack developer",
    copyright: "copyright 2022 | Lizette Munoz",
    contact: "Lizette@gmail.com",
  },
};
