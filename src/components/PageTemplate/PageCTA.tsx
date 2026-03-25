import type { ReactNode } from "react"

interface PageCTAProps {
  title: string
  description: string
  children: ReactNode
}

export default function PageCTA({ title, description, children }: PageCTAProps) {
  return (
    <section className="cta">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="cta-buttons">{children}</div>
    </section>
  )
}
