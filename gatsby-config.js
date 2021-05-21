/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
	{
		resolve: `gatsby-plugin-google-gtag`,
		options: {
			trackingIds: [
				"G-32B2WMKLZV", // Google Analytics / GA
			],
			  // This object is used for configuration specific to this plugin
			pluginConfig: {
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is also optional
				respectDNT: true,
			},
		}
	},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SimplifiedWeb`,
        short_name: `SimplifiedWeb`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
	{
		resolve: `gatsby-plugin-disqus`,
		options: {
			shortname: `simplifiedweb`
		}
	},
	`gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
	`gatsby-plugin-offline`,
	`gatsby-plugin-styled-components`,
  ],
}
