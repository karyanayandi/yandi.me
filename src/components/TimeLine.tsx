import * as React from "react"

export const TimeLine = ({ children }: { children: React.ReactNode }) => {
  return <ol className="relative border-l border-border">{children}</ol>
}

interface TimeLineListProps {
  date: string
  title: string
  description?: string
}

export const TimeLineList = (props: TimeLineListProps) => {
  const { date, title, description } = props
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-foreground/80"></div>
      <time className="mb-1 text-sm font-normal leading-none text-foreground/50">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="text-base font-normal text-foreground/50">
          {description}
        </p>
      )}
    </li>
  )
}
