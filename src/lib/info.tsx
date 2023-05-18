import NextLink from "next/link"

export const about = () => {
  return (
    <div className="prose dark:prose-invert">
      <p>I&apos;m Karyana Yandi, but you can call me Yandi or Adi.</p>
    </div>
  )
}
export const bio = () => {
  return (
    <div className="prose dark:prose-invert">
      <p>
        I am a self-taught programmer since 2011 and have been working in the
        software engineering industry since 2018. Currently, I hold the position
        of a Fullstack Software Engineer at{" "}
        <NextLink href="https://dafunda.com" target="_blank">
          Dafunda Media (PT Melabuh Media Kreatif)
        </NextLink>
        .
      </p>
      <div>
        As part of my role, I am responsible for overseeing all technology
        aspects of the Dafunda Media websites. This includes front-end and
        back-end development, server deployment, as well as leading the
        development team.
      </div>
    </div>
  )
}
