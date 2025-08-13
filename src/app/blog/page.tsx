import type { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts about software developing.",
}

export default function BlogPage() {
  return (
    <section className="max-w-3xl mx-auto py-8">
      <div className="bg-black border border-green-400 rounded-lg p-6 text-green-400 font-mono">
        <h1 className="text-2xl font-bold mb-4">{"$ ls blog/"}</h1>
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
                className="block border-l-2 border-green-400 pl-4 py-2 hover:bg-green-400/10 transition-colors"
                href={`/blog/${post.slug}`}
              >
                <div className="flex flex-col">
                  <span className="text-green-300 font-bold">{">"} {post.title}</span>
                  <span className="text-gray-500 text-sm mt-1">{post.publishedAt} | {post.summary}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
