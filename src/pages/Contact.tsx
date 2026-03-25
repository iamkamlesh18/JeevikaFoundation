import { useState, useCallback, useEffect } from "react"
import type { FormEvent } from "react"
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck } from "react-icons/fi"
import PageLayout from "../components/PageTemplate/PageLayout"
import PageHero from "../components/PageTemplate/PageHero"
import PageSection from "../components/PageTemplate/PageSection"
import FAQList, { FAQItem } from "../components/FAQ/FAQList"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import { siteConfig } from "../site"
import "../styles/pages.css"
import "../styles/forms.css"
import "../styles/contact.css"
import "../styles/animations.css"

const contactQuestions = [
  {
    question: "How can I volunteer with Jeevika Foundation?",
    answer: "Share your skills, interests, and availability with us. We will suggest volunteer opportunities that fit our current work.",
  },
  {
    question: "Can organizations partner with the foundation?",
    answer: "Yes. We welcome institutional, CSR, research, and implementation partnerships aligned with our mission areas.",
  },
  {
    question: "What is the best way to discuss donations or sponsorships?",
    answer: "Email or call us directly and we can guide you toward the most relevant program area or type of support.",
  },
] as const

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState<Record<string, boolean>>({})
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const copyToClipboard = useCallback(async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(prev => ({ ...prev, [key]: true }))
      setTimeout(() => setCopied(prev => ({ ...prev, [key]: false })), 2000)
    } catch (err) {
      console.error('Failed to copy', err)
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <PageLayout
      seoTitle="Contact Jeevika Foundation | Connect With Impact"
      seoDescription="Reach Jeevika Foundation team for volunteering, partnerships, donations and collaboration opportunities."
    >
      <PageHero
        kicker="Let's connect"
        title="How can we help?"
        description="Got a question about our work? Ready to volunteer, partner, or contribute? Reach out and let's build impact together."
      />

      <PageSection
        variant="default"
        kicker="Get in touch"
        title="Reach us anytime"
      >
        <div className={`contact-card-grid ${animateCards ? 'stagger-children' : ''}`}>
          {/* Email Card */}
          <article className="contact-card">
            <div className="contact-card-icon">
              <FiMail size={24} />
            </div>
            <h3>Email us</h3>
            <p>Best for partnerships, volunteering, and program inquiries.</p>
            <div className="contact-actions">
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(siteConfig.email, 'email')}
                title="Copy email"
              >
                {copied.email ? <FiCheck /> : <FiCopy />}
                <span>{siteConfig.email}</span>
              </button>
              <a href={`mailto:${siteConfig.email}`} className="contact-btn">
                Send Email
              </a>
            </div>
          </article>

          {/* Phone Card */}
          <article className="contact-card">
            <div className="contact-card-icon">
              <FiPhone size={24} />
            </div>
            <h3>Call us</h3>
            <p>For immediate questions and coordination.</p>
            <div className="contact-actions">
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(siteConfig.phone, 'phone')}
                title="Copy phone"
              >
                {copied.phone ? <FiCheck /> : <FiCopy />}
                <span>{siteConfig.phone}</span>
              </button>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="contact-btn">
                Call Now
              </a>
            </div>
          </article>

          {/* Location Card */}
          <article className="contact-card">
            <div className="contact-card-icon">
              <FiMapPin size={24} />
            </div>
            <h3>Visit us</h3>
            <p className="location-detail">{siteConfig.location}</p>
            <div className="contact-actions">
              <a href="https://maps.google.com" target="_blank" className="contact-btn" rel="noopener">
                Get Directions
              </a>
            </div>
          </article>
        </div>
      </PageSection>

      <PageSection variant="default">
        <div className="contact-social-section">
          <div className="contact-social-content">
            <h2>Follow our journey</h2>
            <p>Stay updated with impact stories, volunteer opportunities, and community highlights</p>
          </div>
          <SocialLinks variant="contact" />
        </div>
      </PageSection>

      <PageSection
        variant="soft"
        kicker="Send us a message"
        title="We'd love to hear from you"
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="required">*</span></label>
              <input id="name" type="text" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required">*</span></label>
              <input id="email" type="email" placeholder="your@email.com" required />
            </div>
          </div>

          <div className="form-group form-group-full">
            <label htmlFor="subject">What's your inquiry about? <span className="required">*</span></label>
            <select id="subject" required>
              <option value="">Select a topic</option>
              <option>Volunteering</option>
              <option>Partnerships</option>
              <option>Donations</option>
              <option>General inquiry</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group form-group-full">
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea
              id="message"
              placeholder="Tell us about your interest, skills, or how you'd like to collaborate..."
              rows={6}
              required
            />
          </div>

          <div className="contact-form-footer">
            <p className="contact-form-note">
              We'll respond thoughtfully within 1-2 business days.
            </p>

            <button type="submit" className="btn btn-submit">
              Send Message
            </button>
          </div>

          {isSubmitted && (
            <div className="success-message">
              <FiCheck size={20} />
              <p>Thank you! Your message has been sent. We'll get back to you soon.</p>
            </div>
          )}
        </form>
      </PageSection>

      <PageSection
        variant="soft"
        kicker="Before reaching out"
        title="Frequently asked questions"
      >
        <FAQList>
          {contactQuestions.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </FAQList>
      </PageSection>
    </PageLayout>
  )
}

