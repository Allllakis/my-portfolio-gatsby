/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
siteMetadata:{
  title:`My Portfolio`,
  description:`Awensome My Portfolio built with Gatsby and Strapi`,
  titleTemplate:`%s | My Portfolio`,
  url:`https://youthful-my-portfolio-8e816a.netlify.app`
},
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`myjob`, `project`],
         singleTypes: [`about`],
      },
    },
  ],
}
