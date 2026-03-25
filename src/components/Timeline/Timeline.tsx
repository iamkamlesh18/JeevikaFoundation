import type { ReactNode } from "react"

interface TimelineItemProps {
  year: string | number
  title: string
  description: string
  children?: ReactNode
}

export function TimelineItem({ year, title, description, children }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <div className="timeline-year">{year}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {children && <div className="timeline-item-content">{children}</div>}
      </div>
    </article>
  )
}

interface TimelineProps {
  children: ReactNode
}

export default function Timeline({ children }: TimelineProps) {
  return <div className="timeline">{children}</div>
}
