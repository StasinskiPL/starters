module.exports = {
  siteMetadata: {
    title: "template",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: "1",
    //     spaceId: "",
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
            family: "Roboto",
            variants: ["400", "700"],
          },
      }
    },
  ],
};
