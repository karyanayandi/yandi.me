import type { Metadata } from "next"
import Link from "next/link"

import { TimeLine, TimeLineList } from "@/components/time-line"

export const metadata: Metadata = {
  title: "About",
  description: "About Karyana Yandi",
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="my-5 space-y-5 text-foreground">
        <p>
          I started learning programming as a hobby in 2011, without knowing
          that it would eventually lead me to become a software developer.
        </p>
        <p>
          After graduating from high school and faced with economic demands, I
          explored various jobs outside of programming. These included trading,
          working as a cook&apos;s helper, and even farming, as I was uncertain
          about my career path.
        </p>
        <p>
          Towards the end of 2018, I made the decision to fully commit to a
          career in programming. Recognizing the challenges faced by high school
          graduates in securing programming roles, I took a chance and began
          freelancing through Facebook Groups and freelancing through Fiverr
          since January 2020.
        </p>
        <p>
          In June 2020, I was offered a position as a full-stack software
          developer at{" "}
          <Link
            href="https://dafunda.com"
            target="_blank"
            className="font-semibold underline"
          >
            PT. Melabuh Media Kreatif (Dafunda Media)
          </Link>
          , and I have been working there ever since.
        </p>
        <p>
          Until Januari 2025 I worked independently, taking charge of all
          aspects of website technology at Dafunda Media. This involved tasks
          such as UI/UX design, developing UI libraries, working on both the
          frontend and backend, and handling server deployment.
        </p>
        <p>
          Currently, I focused working as a freelancing on{" "}
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
      </div>
      <div className="my-5 space-y-5 text-foreground">
        <h2 className="text-2xl font-bold">Education</h2>
        <TimeLine>
          <TimeLineList
            date="2020-2021"
            title="Universitas Ahmad Dahlan Yogyakarta"
            description="Information System (Drop Out)"
          />
          <TimeLineList
            date="2014-2017"
            title="MA Alif Al-Ittifaq Bandung"
            description="Natural Science"
          />
        </TimeLine>
      </div>
      <div className="my-5 space-y-5 text-foreground">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <TimeLine>
          <TimeLineList
            date="June 2020 - January 2025"
            title="Dafunda Media (PT Melabuh Media Kreatif)"
            description="Full-stack Software Developer"
          />
          <TimeLineList
            date="January 2020 - Current"
            title="Fiverr"
            description="Freelance Software Developer"
          />
          <TimeLineList
            date="November 2018 - June 2020"
            title="Freelance Software Developer"
          />
        </TimeLine>
      </div>
    </section>
  )
}
