/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID"
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `BarbeariaLucasFernandes`,
    //     short_name: `BarbeariaLucasFernandes`,
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `#a2466c`,
    //     display: `standalone`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      },
    },
    // { 
    //   resolve : 'gatsby-source-filesystem' ,  
    //   options : {  
    //     name : pages , 
    //     path : `${ __dirname } / src / pages` , 
    //     ignore : [`**/styles.jsx`],
    //     } , 
    // },
    `gatsby-plugin-offline`,

  ]
}

