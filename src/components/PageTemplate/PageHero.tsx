import type { ReactNode } from "react"

interface PageHeroProps {
  kicker: string
  title: string
  description: string
  children?: ReactNode
}

export default function PageHero({ kicker, title, description, children }: PageHeroProps) {
  return (
    <section className="page-hero hero-title">
      <span className="section-kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {children && <div className="page-hero-content">{children}</div>}
    </section>
  )
}

