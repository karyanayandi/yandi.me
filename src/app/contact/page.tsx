import type { Metadata } from "next"

import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Karyana Yandi",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl py-8">
      <BackButton />
      <div className="rounded-lg border border-border bg-background p-6 font-mono text-foreground">
        <h1 className="mb-4 text-2xl font-bold">{"$ cat contact.txt"}</h1>
        <div className="space-y-3">
          <div>
            <span className="text-foreground">Email:</span>{" "}
            <a href="mailto:karyana@yandi.me" className="underline">
              karyana@yandi.me
            </a>
          </div>
          <div>
            <span className="text-foreground">Github:</span>{" "}
            <a
              href="https://github.com/karyanayandi"
              target="_blank"
              className="underline"
            >
              @karyanayandi
            </a>
          </div>
          <div>
            <span className="text-foreground">X:</span>{" "}
            <a
              href="https://x.com/@karyanayandi"
              target="_blank"
              className="underline"
            >
              @karyanayandi
            </a>
          </div>
          <div>
            <span className="text-foreground">Blue Sky:</span>{" "}
            <a
              href="https://bsky.app/profile/yandi.me"
              target="_blank"
              className="underline"
            >
              @yandi.me
            </a>
          </div>
          <div>
            <span className="text-foreground">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/karyanayandi"
              target="_blank"
              className="underline"
            >
              @karyanayandi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
