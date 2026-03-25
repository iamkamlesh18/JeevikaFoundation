import type { ReactNode } from "react"

interface ProfileCardProps {
  name: string
  role: string
  bio: string
  badge?: string
  children?: ReactNode
}

export default function ProfileCard({ name, role, bio, badge, children }: ProfileCardProps) {
  return (
    <article className="card profile-card">
      {badge && <div className="profile-badge">{badge}</div>}
      <h3>{name}</h3>
      <span className="card-meta">{role}</span>
      <p>{bio}</p>
      {children && <div className="card-content">{children}</div>}
    </article>
  )
}
