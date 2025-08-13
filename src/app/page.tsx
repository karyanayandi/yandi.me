import { Terminal } from "@/components/terminal"

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-3xl">
        <Terminal />
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-xs">
        <p>Type "help" to see available commands</p>
      </div>
    </section>
  )
}

export const revalidate = 60
