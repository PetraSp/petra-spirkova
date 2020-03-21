// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-about-mdx": () => import("./../src/pages/about.mdx" /* webpackChunkName: "component---src-pages-about-mdx" */)
}

