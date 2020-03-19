import React from 'react';
import {graphql} from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from "../components/Layout";
import ReadLink from "../components/Read-link/styles";

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                author
            }
            body
        }
    }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p style={{fontSize: '0.75rem'}}>Posted by {post.frontmatter.author}</p>
    {/*<pre>{JSON.stringify(pageContext, null, 2)}</pre>*/}
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts </ReadLink>
  </Layout>
)

export default PostTemplate;
