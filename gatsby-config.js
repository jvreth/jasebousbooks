module.exports = {
  siteMetadata: {
    title: `Jasebousbooks`,
    author: `Jasebou`,
    description: `Willkommen bei Jasebousbooks. Mein Name ist Jasmin und ich blogge hier hauptsächlich über Bücher.`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-polished`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`, // highlight-line
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`, // highlight-line
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jasebousbooks Bücherblog`,
        short_name: `Jasebousbooks`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `5810500288`,
    //     access_token: `EAAFnN7cHlpUBALftkQxs1AaLZBoeZCxtj4lEpqBRfmBHZAQX5weziQwe5nACQEtt6MNzkbYRnLTZBdbyrQbqpKrOoxypkA2WtMlQSbCTMkIQ8ZCBkJ24n5Xjm9xNJEgLkAuYaTWIHwkvWifvrpDkkOssoBiJUeaeArY4KHud7BZBQXQotTffRZA`,
    //     instagram_id: `17841405888646312`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
