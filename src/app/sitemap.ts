export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/uses",
    "/contact",
  ].map((route) => ({
    url: `https://yandi.me${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes]
}
