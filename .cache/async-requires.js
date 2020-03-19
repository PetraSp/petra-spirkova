// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-calendar-js": () => import("./../src/pages/calendar.js" /* webpackChunkName: "component---src-pages-calendar-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-start-today-js": () => import("./../src/pages/start-today.js" /* webpackChunkName: "component---src-pages-start-today-js" */),
  "component---src-pages-about-mdx": () => import("./../src/pages/about.mdx" /* webpackChunkName: "component---src-pages-about-mdx" */)
}

