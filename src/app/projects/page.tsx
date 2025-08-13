import type { Metadata } from "next"

import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects Karyana Yandi",
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-3xl py-8">
      <BackButton />
      <div className="rounded-lg border border-black bg-white p-6 font-mono text-black dark:border-white dark:bg-black dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">{"$ ls projects/"}</h1>
        <div className="space-y-4">
          <div className="border-l-2 border-black pl-4 dark:border-white">
            <h2 className="text-xl font-bold text-black dark:text-white">
              Open Source Projects
            </h2>
            <p className="mt-2">
              {">"} I build open-source projects that provide smart, AI-enhanced
              alternatives to popular software solutions.
            </p>
            <p className="mt-2">
              {">"} Check out my work on{" "}
              <a
                href="https://github.com/karyanayandi"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="border-l-2 border-black pl-4 dark:border-white">
            <h2 className="text-xl font-bold text-black dark:text-white">
              Freelance Work
            </h2>
            <p className="mt-2">
              {">"} Specializing in headless technologies and AI-powered tools.
            </p>
            <p className="mt-2">
              {">"} Available for hire on{" "}
              <a
                href="https://fiverr.com/users/karyanayandi"
                target="_blank"
                className="underline"
              >
                Fiverr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
