import type { Metadata } from "next"
import { Fira_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import "./global.css"

import type { ReactNode } from "react"

import { TerminalProvider } from "@/components/terminal/context"

const firaMono = Fira_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <TerminalProvider>
      <html lang="en" className={firaMono.className}>
        <body className="min-h-screen bg-background p-4 text-foreground md:p-8">
          <div className="mx-auto max-w-4xl">{children}</div>
          <Analytics />
        </body>
      </html>
    </TerminalProvider>
  )
}
