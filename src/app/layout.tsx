import * as React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"

import "./global.css"

import { cn } from "@yopem-ui/utils"

import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme"

const inter = Inter({ subsets: ["latin"] })

const sundanese = localFont({
  src: "../../public/fonts/SundaneseUnicode-2.0.ttf",
  weight: "700",
  variable: "--font-sundanese",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en" className={cn(inter.className, sundanese.variable)}>
        <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
          {/* Top-left gradient overlay */}
          <div className="fixed left-3/4 right-0 top-0 -z-10 hidden h-40 bg-gradient-to-bl from-primary to-background to-80% blur-[5.25rem] supports-[filter:blur(0)]:block"></div>
          <div className="fixed left-3/4 right-0 top-52 -z-10 hidden h-20 bg-gradient-to-bl from-black to-background to-80% blur-[5.25rem] supports-[filter:blur(0)]:block dark:from-slate-300"></div>
          <Sidebar />
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
            {children}
            <Analytics />
          </main>
        </body>
      </html>
    </ThemeProvider>
  )
}
