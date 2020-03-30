const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/petraspirkova/petra-spirkova/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/petraspirkova/petra-spirkova/.cache/dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/petraspirkova/petra-spirkova/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/petraspirkova/petra-spirkova/src/pages/index.js"))),
  "component---src-pages-about-mdx": hot(preferDefault(require("/Users/petraspirkova/petra-spirkova/src/pages/about.mdx")))
}

