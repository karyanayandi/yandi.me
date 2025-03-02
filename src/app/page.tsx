export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Hi!</h1>
      <p className="my-5 max-w-[460px] text-foreground">
        <div className="prose">
          <p>I&apos;m Karyana Yandi, but you can call me Yandi or Adi.</p>
        </div>
      </p>
      <p className="my-5 max-w-[600px] text-foreground">
        <div className="prose">
          <p>
            I am a self-taught Software Engineer, write first code at 2011 and
            have been working in the software engineering industry since 2018.
          </p>
          <div>
            I primarily work with JavaScript/TypeScript, but I also have
            experience with Lua, Go, Python, Rust, and PHP.
          </div>
        </div>
      </p>
    </section>
  )
}

export const revalidate = 60
