import type { ReactNode } from "react"

interface InfoCardProps {
  icon?: ReactNode
  title: string
  description: string
  meta?: string
  children?: ReactNode
}

export default function InfoCard({ icon, title, description, meta, children }: InfoCardProps) {
  return (
    <article className="card info-card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {children && <div className="card-content">{children}</div>}
      {meta && <span className="card-meta">{meta}</span>}
    </article>
  )
}
