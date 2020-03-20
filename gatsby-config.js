module.exports = {
  siteMetadata: {
    title: 'Petra\'s webpage',
    description: 'A personal blog'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Brandon Grotesque Regular Italic"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout')
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ]
};
