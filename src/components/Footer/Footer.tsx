import { Link } from "react-router-dom"
import { FiHeart, FiMail, FiPhone, FiMapPin } from "react-icons/fi"

import Logo from "../Logo"
import SocialLinks from "../SocialLinks/SocialLinks"
import "../../styles/footer.css"
import { siteConfig, sitePaths } from "../../site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer glow-on-load">
      <div className="footer-content">
        <div className="footer-brand-section">
          <Logo />
          <h3>{siteConfig.name}</h3>
          <p>Grounded in trust. Guided by long-term commitment.</p>
          <p>Supporting education, health, livelihoods, and local leadership.</p>
        </div>

        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={sitePaths.home}>Home</Link></li>
            <li><Link to={sitePaths.about}>About</Link></li>
            <li><Link to={sitePaths.projects}>Programs</Link></li>
            <li><Link to={sitePaths.impact}>Impact</Link></li>
            <li><Link to={sitePaths.team}>Team</Link></li>
            <li><Link to={sitePaths.blog}>Stories</Link></li>
            <li><Link to={sitePaths.getInvolved}>Get Involved</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <h4>Contact</h4>
          <div className="contact-item">
            <FiMail />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div className="contact-item">
            <FiPhone />
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
          </div>

          <div className="contact-item">
            <FiMapPin />
            <span>{siteConfig.location}</span>
          </div>
          <SocialLinks variant="footer" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} {siteConfig.name}. Made with <FiHeart size={14} /> for steady social change.</p>
        <div>
          <Link to={sitePaths.privacyPolicy}>Privacy Policy</Link> • 
          <Link to={sitePaths.termsOfService}>Terms</Link> • 
          <Link to={sitePaths.cookiePolicy}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

