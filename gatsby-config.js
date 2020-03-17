module.exports = {
  siteMetadata: {
    title: 'Petra\'s webpage',
    description: 'A personal blog'
  },
  plugins: [
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
        }
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
  ]
};
