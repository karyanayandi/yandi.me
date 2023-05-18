import { TimeLine, TimeLineList } from "@/components/TimeLine"

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="my-5 space-y-5 text-foreground">
        <p>
          I started learning programming as a hobby in 2011, without knowing
          that it would eventually lead me to become a software engineer.
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
          freelancing through Facebook Groups.
        </p>
        <p>
          In 2020, I was offered a position as a full-stack software engineer at
          Dafunda Media, and I have been working there ever since.
        </p>
        <p>
          Initially, I worked independently, taking charge of all aspects of
          website technology at Dafunda Media. This involved tasks such as UI/UX
          design, developing UI libraries, working on both the frontend and
          backend, and handling server deployment.
        </p>
        <p>
          Currently, I am leading a development team in the process of
          converting a WordPress website to a headless architecture. We are
          utilizing Next.js as the frontend framework, building new APIs with
          Fastify, and utilizing Postgres as our database.
        </p>
        <p>
          Outside of my busy work schedule, I have very little time for other
          activities. However, when I do find some spare time, I enjoy engaging
          in farming, playing futsal, and watching anime.
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
          <TimeLineList date="2011-2014" title="MTs Alif Al-Ittifaq Bandung" />
          <TimeLineList
            date="2005-2011"
            title="SDN Babakan Jampang 1 Bandung"
          />
        </TimeLine>
      </div>
      <div className="my-5 space-y-5 text-foreground">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <TimeLine>
          <TimeLineList
            date="June 2020 - Current"
            title="Dafunda Media (PT Melabuh Media Kreatif)"
            description="Fullstack Software Engineer"
          />
          <TimeLineList
            date="November 2018 - June 2020"
            title="Freelance Software Engineer"
          />
          <TimeLineList
            date="Jully 2018 - November 2018"
            title="Sate Cilampeni"
            description="Cook Helper"
          />
          <TimeLineList
            date="Jully 2016 - January 2017"
            title="DSV Stawberry"
            description="Strawberry Packer"
          />
          <TimeLineList
            date="June 2014 - November 2014"
            title="MA Alif Al-Ittifaq"
            description="Internet Cafe Operator"
          />
        </TimeLine>
      </div>
    </section>
  )
}
