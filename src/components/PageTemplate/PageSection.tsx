import type { ReactNode } from "react"

interface PageSectionProps {
  variant?: "default" | "soft"
  kicker?: string
  title?: string
  description?: string
  children: ReactNode
}

export default function PageSection({
  variant = "default",
  kicker,
  title,
  description,
  children,
}: PageSectionProps) {
  const className = `page-section ${variant === "soft" ? "page-section-soft" : ""}`.trim()

  return (
    <section className={className}>
      <div className="container mx-auto px-6 max-w-6xl">
        {(kicker || title) && (
        <div className="section-heading text-center mb-12">
            {kicker && <span className="section-kicker">{kicker}</span>}
            {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}
            {description && <p className="max-w-3xl mx-auto text-xl leading-relaxed mt-4">{description}</p>}
          </div>
        )}
        <div className="flex flex-col items-center gap-12">
          {children}
        </div>
      </div>
    </section>
  )
}
