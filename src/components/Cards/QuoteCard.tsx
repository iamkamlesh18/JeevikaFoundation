import type { ReactNode } from "react"

interface QuoteCardProps {
  quote: string
  author: string
  role?: string
  children?: ReactNode
}

export default function QuoteCard({ quote, author, role, children }: QuoteCardProps) {
  return (
    <article className="card quote-card">
      <p>"{quote}"</p>
      <strong>{author}</strong>
      {role && <span className="card-meta">{role}</span>}
      {children && <div className="card-content">{children}</div>}
    </article>
  )
}
