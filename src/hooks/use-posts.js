import { graphql, useStaticQuery } from "gatsby";

//add ways to filter
const usePosts = () => {
  const data = useStaticQuery(graphql`
      query {
          allMdx {
              nodes {
                  frontmatter{
                      title
                      slug
                      author
                  }
                  excerpt
              }
          }
      }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }));
};

export default usePosts;