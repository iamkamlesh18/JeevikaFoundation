import type { ReactNode } from "react"

interface CardGridProps {
  columns?: 1 | 2 | 3 | 4
  variant?: "default" | "compact" | "wide"
  children: ReactNode
}

export default function CardGrid({ columns = 3, variant = "default", children }: CardGridProps) {
  const className = `card-grid grid-cols-${columns} variant-${variant}`.trim()
  return <div className={className}>{children}</div>
}
