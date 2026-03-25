import type { ReactNode } from "react"

interface MetricCardProps {
  value: string | number
  label: string
  description: string
  children?: ReactNode
}

export default function MetricCard({ value, label, description, children }: MetricCardProps) {
  return (
    <article className="card metric-card">
      <h3 className="metric-value">{value}</h3>
      <h4>{label}</h4>
      <p>{description}</p>
      {children && <div className="card-content">{children}</div>}
    </article>
  )
}
