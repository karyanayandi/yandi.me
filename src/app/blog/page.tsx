import { Metadata } from "next"
import Link from "next/link"

import { allBlogs } from "contentlayer/generated"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts about software engineering.",
}

export default async function BlogPage() {
  return (
    <section>
      <h1 className="mb-5 text-3xl font-bold">Blog</h1>
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
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col">
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </section>
  )
}
