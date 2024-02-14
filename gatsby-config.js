require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Andy's Man Club",
    author: {
      name: "The Bigger Boat",
      summary: "TBB Gatsby / Storyblok",
    },
    description:
      "We run talking groups for men who have either been through a storm, are currently going through a storm or have a storm brewing in life.",
    siteUrl: "https://andysmanclub.co.uk",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KRX89QJ",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-PJH81VC4CH", // Measurement ID
          "",
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Content-Security-Policy: frame-ancestors 'self' https://*.storyblok.com/",
            "X-Frame-Options: ALLOW-FROM https://app.storyblok.com/",
          ],
        },
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: false, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/AlgoliaQueries"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [ '/404-layouts/', '/thank-you/' ]
     }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://andysmanclub.co.uk",
        sitemap: "https://andysmanclub.co.uk/sitemap/sitemap-0.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: [
 	            "/*?refinementList",
 	            "/*?sortBy",
              "/*?aroundLatLng",
            ],
          }
        ],
      },
    }
  ],
};
