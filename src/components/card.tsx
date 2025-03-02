import * as React from "react"

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex aspect-square items-center justify-center rounded-md bg-background/50 shadow">
      {children}
    </div>
  )
}
