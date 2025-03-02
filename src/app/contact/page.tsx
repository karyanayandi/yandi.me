import type { Metadata } from "next"
import NextLink from "next/link"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Karyana Yandi",
}

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="prose">
        <ul>
          <li>
            Email:{" "}
            <NextLink href="mailto:karyana@yandi.me">karyana@yandi.me</NextLink>
          </li>
          <li>
            Github:{" "}
            <NextLink href="https://github.com/karyanayandi" target="__blank">
              @karyanayandi
            </NextLink>
          </li>
          <li>
            X:{" "}
            <NextLink href="https://x.com/@karyanayandi" target="__blank">
              @karyanayandi
            </NextLink>
          </li>
          <li>
            Blue Sky:{" "}
            <NextLink href="https://bsky.app/profile/yandi.me" target="__blank">
              @yandi.me
            </NextLink>
          </li>
          <li>
            Linkedin:{" "}
            <NextLink
              href="https://linkedin.com/in/karyanayandi"
              target="__blank"
            >
              @karyanayandi
            </NextLink>
          </li>
        </ul>
      </div>
    </section>
  )
}
