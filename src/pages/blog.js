import React from 'react';
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/Post-preview";
import Layout from "../components/Layout";

export default () => {
  const posts = usePosts();

  return (
    <Layout style={{backgroundImage: "none"}}>
    <h2>Read my blog</h2>
  {posts.map(post => {
    return <PostPreview key={post.slug} post={post} />
  })}
    </Layout>
  )
}


