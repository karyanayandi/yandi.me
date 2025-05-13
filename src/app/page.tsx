import Link from "next/link"

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold md:text-4xl">Hello, World!</h1>
      <div className="my-5 max-w-[460px] text-foreground">
        <div className="text-base md:text-lg">
          <p>I&apos;m Karyana Yandi, but you can call me Yandi or Adi.</p>
        </div>
      </div>
      <div className="my-5 max-w-[600px] text-foreground">
        <div className="space-y-4 text-base md:text-lg">
          <p>
            I am a freelance full-stack developer on{" "}
            <Link
              href="https://fiverr.com/users/karyanayandi"
              target="_blank"
              className="font-semibold underline"
            >
              Fiverr
            </Link>
            , specializing in headless technologies and AI-powered tools.
          </p>
          <p>
            I also build{" "}
            <Link
              href="https://github.com/yopem"
              target="_blank"
              className="font-semibold underline"
            >
              open-source projects
            </Link>{" "}
            that provide smart, AI-enhanced alternatives to popular software
            solutions.
          </p>
          <div>
            I primarily work with JavaScript or TypeScript, but I also have
            experience with Lua, Go, Python, and PHP.
          </div>
        </div>
      </div>
    </section>
  )
}

export const revalidate = 60
