module.exports = {
  siteMetadata: {
    title: "Trici - Productivity Tool for Developers",
    copyRightYear: `${new Date().getFullYear().toString()}`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "test.gettrici.com",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-77981996-1",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: [],
        }
      }
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'd5d3949c-b235-4d0b-990c-6485ae14053b',
        enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    }
  ],
}
