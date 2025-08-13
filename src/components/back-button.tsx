"use client"

import * as React from "react"

export const BackButton: React.FC = () => (
  <nav className="flex w-full justify-start py-4">
    <button
      type="button"
      onClick={() => {
        if (document.referrer && document.referrer.includes("yandi.me")) {
          window.history.back()
        } else {
          window.location.href = "/"
        }
      }}
      className="text-base font-medium text-foreground underline-offset-2 transition-all hover:underline"
      aria-label="Go back"
    >
      ← Back
    </button>
  </nav>
)
