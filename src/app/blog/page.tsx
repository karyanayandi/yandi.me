import type { Metadata } from "next"
import Link from "next/link"

import { BackButton } from "@/components/back-button"
import { allBlogs } from ".contentlayer/generated"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts about software developing.",
}

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-3xl py-8">
      <BackButton />
      <div className="rounded-lg border border-border bg-background p-6 font-mono text-foreground">
        <h1 className="mb-4 text-2xl font-bold">{"$ ls blog/"}</h1>
        <div className="space-y-4">
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1
              }
              return 1
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="block border-l-2 border-border py-2 pl-4 transition-colors hover:bg-foreground/10"
                href={`/blog/${post.slug}`}
              >
                <div className="flex flex-col">
                  <span className="font-bold text-foreground">
                    {">"} {post.title}
                  </span>
                  <span className="mt-1 text-sm text-accent-foreground/50">
                    {post.publishedAt} | {post.summary}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
