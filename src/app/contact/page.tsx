import NextLink from "next/link"

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <ul>
          <li>
            Email:{" "}
            <NextLink href="mailto:halo@yandi.me">halo@yandi.me</NextLink>
          </li>
          <li>
            Github:{" "}
            <NextLink href="https://github.com/karyanayandi" target="__blank">
              @karyanayandi
            </NextLink>
          </li>
          <li>
            Twitter:{" "}
            <NextLink href="https://twitter.com/@karyanayandi" target="__blank">
              @karyanayandi
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
          <li>
            Facebook:{" "}
            <NextLink href="https://facebook.com/karyanayandi" target="__blank">
              @karyanayandi
            </NextLink>
          </li>
          <li>
            Mastodon:{" "}
            <NextLink
              href="https://fosstodon.org/@karyanayandi"
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
