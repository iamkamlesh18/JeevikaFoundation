import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { siteConfig } from "../../site"
import "../../styles/social.css"

interface SocialLinksProps {
  variant?: "footer" | "contact" | "inline"
  showLabels?: boolean
}

export default function SocialLinks({ variant = "footer", showLabels = false }: SocialLinksProps) {
  const socialIcons = {
    GitHub: FiGithub,
    Instagram: FiInstagram,
    LinkedIn: FiLinkedin,
    Twitter: FiTwitter,
    WhatsApp: FaWhatsapp,
  }

  return (
    <div className={`social-links social-variant-${variant}`}>
      {siteConfig.socialLinks.map((socialLink) => {
        const Icon = socialIcons[socialLink.label as keyof typeof socialIcons]
        
        if (!Icon) return null
        
        return (
          <a
            key={socialLink.label}
            href={socialLink.href || "#"}
            title={socialLink.label}
            aria-label={socialLink.label}
            target="_blank"
            rel="noreferrer"
            className={`social-link ${!socialLink.href ? "disabled" : ""}`}
            onClick={(e) => {
              if (!socialLink.href) {
                e.preventDefault()
              }
            }}
          >
            <Icon />
            {showLabels && <span className="social-label">{socialLink.label}</span>}
          </a>
        )
      })}
    </div>
  )
}
