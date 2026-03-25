import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"
import SEO from "../components/SEO/SEO"
import Logo from "../components/Logo"
import { headlineStats, impactHighlights, organizationOverview, testimonials } from "../data/organization"
import { programs } from "../data/programs"
import { buildAbsoluteUrl, siteConfig, sitePaths } from "../site"
import "../styles/cta.css"
import "../styles/home.css"

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    url: buildAbsoluteUrl(sitePaths.home),
    logo: buildAbsoluteUrl("/logo.svg"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Shree Ganesh Complex, FC Road, Shivajinagar",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411005",
      addressCountry: "IN",
    },
  }

  return (
    <>
      <SEO
        title="Jeevika Foundation | Community-led social impact"
        description="Jeevika Foundation advances education, health, livelihoods, and grassroots leadership through community-led programs."
        structuredData={organizationSchema}
      />

      <section className="home-canvas">
        <div className="home-shell">
          <section className="soft-hero">
            <div className="soft-hero-copy">
              <span className="soft-kicker">Gentle, rooted, community-first</span>
              <div className="soft-title-row">
                <Logo />
                <div>
                  <h1>{organizationOverview.name}</h1>
                  <p className="soft-tagline">{organizationOverview.tagline}</p>
                </div>
              </div>
              <p className="soft-lead">{organizationOverview.mission}</p>
              <div className="soft-actions">
                <Link to={sitePaths.getInvolved} className="cta-btn">
                  Get Involved <FiArrowRight size={16} />
                </Link>
                <Link to={sitePaths.projects} className="soft-text-link">
                  Explore programs
                </Link>
              </div>
            </div>

            <div className="soft-hero-art" aria-hidden="true">
              <div className="soft-hero-core">
                <div className="soft-orbit soft-orbit-large" />
                <div className="soft-orbit soft-orbit-medium" />
                <div className="soft-orbit soft-orbit-small" />
                <div className="soft-floating-card soft-floating-card-left">
                  <div className="soft-floating-card-inner">
                    <span>Education</span>
                    <span>Health</span>
                    <span>Livelihoods</span>
                  </div>
                </div>
                <div className="soft-center-circle">
                  <div className="soft-center-logo">
                    <Logo />
                  </div>
                  <div className="soft-center-number">50+</div>
                  <strong>Active initiatives</strong>
                  <span>Steady local partnerships and community-rooted support.</span>
                </div>
                <div className="soft-floating-card soft-floating-card-right">
                  <div className="soft-floating-card-inner">
                    <span>Built with local trust</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="soft-stats">
            <h2 className="sr-only">Impact highlights</h2>
            {headlineStats.map((stat) => (
              <article key={stat.label} className="soft-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.description}</p>
              </article>
            ))}
          </section>

          <section className="soft-section">
            <div className="soft-section-heading">
              <span className="soft-kicker">Focus Areas</span>
              <h2>Interconnected support, delivered with patience and continuity</h2>
            </div>
            <div className="soft-focus-grid">
              {impactHighlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <article key={highlight.title} className="soft-focus-card">
                    <div className="soft-focus-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                    <span>{highlight.metric}</span>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="soft-section soft-program-section">
            <div className="soft-section-heading soft-heading-row">
              <div>
                <span className="soft-kicker">Programs</span>
                <h2>Work that quietly strengthens everyday life</h2>
              </div>
              <Link to={sitePaths.projects} className="soft-text-link">
                View all programs
              </Link>
            </div>

            <div className="soft-program-list">
              {programs.slice(0, 4).map((program) => {
                const Icon = program.icon
                return (
                  <article key={program.slug} className="soft-program-card">
                    <div className="soft-program-head">
                      <div className="soft-program-icon">
                        <Icon size={22} />
                      </div>
                      <span>{program.location}</span>
                    </div>
                    <h3>{program.title}</h3>
                    <p>{program.summary}</p>
                    <div className="soft-chip-row">
                      {program.outcomes.slice(0, 2).map((outcome) => (
                        <span key={outcome} className="soft-chip">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="soft-section soft-story-section">
            <div className="soft-story-panel">
              <span className="soft-kicker">Story</span>
              <h2>Change grows when support feels steady, respectful, and local</h2>
              <p>
                Our work is not built around noise. It is built around presence, trust, and the
                belief that communities deserve support shaped with them, not imposed on them.
              </p>
            </div>

            <div className="soft-testimonial-stack">
              {testimonials.slice(0, 3).map((testimonial) => (
                <article key={testimonial.author} className="soft-testimonial-card">
                  <p>"{testimonial.quote}"</p>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="cta home-final-cta">
        <h2>Be part of gentle, long-term change</h2>
        <p>
          Volunteer, collaborate, or support the work in a way that matches your capacity and
          commitment.
        </p>
        <div className="cta-buttons">
          <Link to={sitePaths.getInvolved} className="cta-btn">
            Ways to Help
          </Link>
          <Link to={sitePaths.contact} className="cta-btn cta-btn-outline">
            Contact the Team
          </Link>
        </div>
      </section>
    </>
  )
}
