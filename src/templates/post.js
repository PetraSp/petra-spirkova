import React from 'react';
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import ReadLink from "../components/Read-link/styles";

const PostTemplate = () => (
  <Layout>
    <h1>post title</h1>
    <p style={{fontSize: '0.75rem'}}>Posted by (author)</p>
    <p>Post body goes here</p>
    <ReadLink to="/">&larr; back to all posts </ReadLink>
  </Layout>
)

export default PostTemplate;
