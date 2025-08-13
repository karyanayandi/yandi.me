import * as React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import "./global.css"

import { TerminalProvider } from "@/components/terminal/context"

export const metadata: Metadata = {
  title: {
    default: "Karyana Yandi",
    template: "%s | Karyana Yandi",
  },
  description: "Full-stack Software Developer",
  openGraph: {
    title: "Karyana Yandi",
    description: "Full-stack Software Developer",
    url: "https://yandi.me",
    siteName: "Karyana Yandi",
    images: [
      {
        url: "https://yandi.me/og.png",
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
    <TerminalProvider>
      <html lang="en" className="font-mono">
        <body className="bg-black text-green-400 min-h-screen p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
          <Analytics />
        </body>
      </html>
    </TerminalProvider>
  )
}
