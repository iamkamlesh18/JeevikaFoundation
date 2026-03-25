import type { ReactNode } from "react"
import SEO from "../SEO/SEO"

interface PageLayoutProps {
  seoTitle: string
  seoDescription: string
  children: ReactNode
  structuredData?: Record<string, unknown>
}

export default function PageLayout({
  seoTitle,
  seoDescription,
  children,
  structuredData,
}: PageLayoutProps) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} structuredData={structuredData} />
      <div className="page-shell">{children}</div>
    </>
  )
}
