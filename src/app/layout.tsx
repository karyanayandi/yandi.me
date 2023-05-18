import * as React from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import "./global.css"
import Sidebar from "@/components/Sidebar"
import { cn } from "@/lib/cn"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Karyana Yandi",
    template: "%s | Karyana Yandi",
  },
  description: "Fullstack Software Engineer",
  openGraph: {
    title: "Karyana Yandi",
    description: "Fullstack Software Engineer",
    url: "https://yandi.me",
    siteName: "Karyana Yandi",
    images: [
      {
        url: "https://yandi.me/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Karyana Yandi",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn("bg-background text-foreground", inter.className)}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
        <Sidebar />
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
