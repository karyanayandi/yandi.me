import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects Karyana Yandi",
}

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto py-8">
      <div className="bg-black border border-green-400 rounded-lg p-6 text-green-400 font-mono">
        <h1 className="text-2xl font-bold mb-4">{"$ ls projects/"}</h1>
        <div className="space-y-4">
          <div className="border-l-2 border-green-400 pl-4">
            <h2 className="text-xl font-bold text-green-300">Open Source Projects</h2>
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
          
          <div className="border-l-2 border-green-400 pl-4">
            <h2 className="text-xl font-bold text-green-300">Freelance Work</h2>
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
