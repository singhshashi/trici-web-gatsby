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
  ],
}
