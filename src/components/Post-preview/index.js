import React from 'react';
import { Link } from 'gatsby';
import PostArticle, { PostImage, PostLink } from './styles.js'
import ReadLink from "../Read-link/styles";

const PostPreview = ({post}) => (
  <PostArticle>
      <PostLink to={post.slug}>
          <PostImage
              fluid={post.image.sharp.fluid}
              alt={post.title}
          />
      </PostLink>
      <div style={{marginTop: '1rem'}}>
        <h3>
            <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug} style={{marginTop: '1rem'}}>read this post &rarr;</ReadLink>
      </div>
  </PostArticle>
);

export default PostPreview;
