import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects Karyana Yandi",
}

export default function ProjectsPage() {
  return (
    <section>
      <div>
        Check on my{" "}
        <Link
          href="https://github.com/karyanayandi"
          target="_blank"
          className="font-semibold underline"
        >
          github account
        </Link>
        .
      </div>
    </section>
  )
}
