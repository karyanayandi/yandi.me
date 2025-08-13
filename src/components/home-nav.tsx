import * as React from "react"
import Link from "next/link"

export const HomeNav: React.FC = () => (
  <nav className="flex w-full justify-start py-4">
    <Link
      href="/"
      className="text-base font-medium text-foreground underline-offset-2 transition-all hover:underline"
      aria-label="Back to homepage"
    >
      ← Home
    </Link>
  </nav>
)
