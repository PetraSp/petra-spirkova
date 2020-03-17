import React from 'react';
import { Link } from 'gatsby';
import PostArticle from './styles.js'
import ReadLink from "../Read-link/styles";

const PostPreview = ({post}) => (
  <PostArticle>
    <h3><Link to={post.slug}>{post.title}</Link></h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
  </PostArticle>
);

export default PostPreview;
