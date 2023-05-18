import { about, bio } from "@/lib/info"

export const revalidate = 60

export default async function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Hi!</h1>
      <p className="my-5 max-w-[460px] text-foreground">{about()}</p>
      <p className="my-5 max-w-[600px] text-foreground">{bio()}</p>
    </section>
  )
}
