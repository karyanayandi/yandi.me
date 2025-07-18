import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"

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

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "https://yandi.me/cv.pdf",
        permanent: true,
      },
      {
        source: "/fiverr",
        destination: "https://fiverr.com/users/karyanayandi",
        permanent: true,
      },
      {
        source: "/invite",
        destination: "https://wedding.yandi.me/invitation/generate",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
}

export default withContentlayer(nextConfig)
