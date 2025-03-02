import { allBlogs } from "contentlayer/generated"

export default function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://yandi.me/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = ["", "/about", "/projects", "/blog", "/uses", "/contact"].map(
    (route) => ({
      url: `https://yandi.me${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  )

  return [...routes, ...blogs]
}
