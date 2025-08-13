import { Terminal } from "@/components/terminal"

export default function HomePage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="w-full max-w-3xl">
        <Terminal />
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        <p>Type "help" to see available commands</p>
      </div>
    </section>
  )
}

export const revalidate = 60
