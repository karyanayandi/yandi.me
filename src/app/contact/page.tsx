import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Karyana Yandi",
}

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-8">
      <div className="bg-black border border-green-400 rounded-lg p-6 text-green-400 font-mono">
        <h1 className="text-2xl font-bold mb-4">{"$ cat contact.txt"}</h1>
        <div className="space-y-3">
          <div>
            <span className="text-green-300">Email:</span>{" "}
            <a href="mailto:karyana@yandi.me" className="underline">karyana@yandi.me</a>
          </div>
          <div>
            <span className="text-green-300">Github:</span>{" "}
            <a href="https://github.com/karyanayandi" target="_blank" className="underline">@karyanayandi</a>
          </div>
          <div>
            <span className="text-green-300">X:</span>{" "}
            <a href="https://x.com/@karyanayandi" target="_blank" className="underline">@karyanayandi</a>
          </div>
          <div>
            <span className="text-green-300">Blue Sky:</span>{" "}
            <a href="https://bsky.app/profile/yandi.me" target="_blank" className="underline">@yandi.me</a>
          </div>
          <div>
            <span className="text-green-300">LinkedIn:</span>{" "}
            <a href="https://linkedin.com/in/karyanayandi" target="_blank" className="underline">@karyanayandi</a>
          </div>
        </div>
      </div>
    </section>
  )
}
