import type { Metadata } from "next"

import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "About",
  description: "About Karyana Yandi",
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl py-8">
      <BackButton />
      <div className="rounded-lg border border-border bg-background p-6 font-mono text-foreground">
        <div className="mb-6">
          <h1 className="mb-4 text-2xl font-bold">{"$ cat about.txt"}</h1>
          <div className="space-y-4">
            <p>
              {">"} I started learning programming as a hobby in 2011, without
              knowing that it would eventually lead me to become a software
              developer.
            </p>
            <p>
              {">"} After graduating from high school and faced with economic
              demands, I explored various jobs outside of programming. These
              included trading, working as a cook&apos;s helper, and even
              farming, as I was uncertain about my career path.
            </p>
            <p>
              {">"} Towards the end of 2018, I made the decision to fully commit
              to a career in programming. Recognizing the challenges faced by
              high school graduates in securing programming roles, I took a
              chance and began freelancing through Facebook Groups and
              freelancing through Fiverr since January 2020.
            </p>
            <p>
              {">"} In June 2020, I was offered a position as a full-stack
              software developer at PT. Melabuh Media Kreatif (Dafunda Media),
              and I have been working there ever since.
            </p>
            <p>
              {">"} Until January 2025 I worked independently, taking charge of
              all aspects of website technology at Dafunda Media. This involved
              tasks such as UI/UX design, developing UI libraries, working on
              both the frontend and backend, and handling server deployment.
            </p>
            <p>
              {">"} Currently, I focused working as a freelancing on Fiverr,
              specializing in headless technologies and AI-powered tools.
            </p>
            <p>
              {">"} I also build open-source projects that provide smart,
              AI-enhanced alternatives to popular software solutions.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold">{"$ cat education.txt"}</h2>
          <ul className="ml-4 space-y-2">
            <li className="list-disc">
              <span className="text-foreground">2020-2021:</span> Universitas
              Ahmad Dahlan Yogyakarta - Information System (Drop Out)
            </li>
            <li className="list-disc">
              <span className="text-foreground">2014-2017:</span> MA Alif
              Al-Ittifaq Bandung - Natural Science
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold">{"$ cat experience.txt"}</h2>
          <ul className="ml-4 space-y-2">
            <li className="list-disc">
              <span className="text-foreground">June 2020 - January 2025:</span>{" "}
              Dafunda Media (PT Melabuh Media Kreatif) - Full-stack Software
              Developer
            </li>
            <li className="list-disc">
              <span className="text-foreground">January 2020 - Current:</span>{" "}
              Fiverr - Freelance Software Developer
            </li>
            <li className="list-disc">
              <span className="text-foreground">
                November 2018 - June 2020:
              </span>{" "}
              Freelance Software Developer
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
