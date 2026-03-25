import type { ReactNode } from "react"

interface FAQItemProps {
  question: string
  answer: string
  children?: ReactNode
}

export function FAQItem({ question, answer, children }: FAQItemProps) {
  return (
    <article className="faq-item">
      <h3>{question}</h3>
      <p>{answer}</p>
      {children && <div className="faq-item-content">{children}</div>}
    </article>
  )
}

interface FAQListProps {
  children: ReactNode
}

export default function FAQList({ children }: FAQListProps) {
  return <div className="faq-list">{children}</div>
}
