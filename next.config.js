const { get } = require("@vercel/edge-config")
const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  redirects() {
    try {
      return get("redirects")
    } catch {
      return [
        {
          source: "/fiverr",
          destination: "https://fiverr.com/users/karyanayandi",
          permanent: true,
        },
        {
          source: "/invite",
          destination: "https://wedding.yandi.me/invitation/generate",
          permanent: true,
        }
      ]
    }
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
}

const securityHeaders = [
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
]

module.exports = withContentlayer(nextConfig)

