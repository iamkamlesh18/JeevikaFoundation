import { Link } from "react-router-dom"
import PageLayout from "../components/PageTemplate/PageLayout"
import PageHero from "../components/PageTemplate/PageHero"
import PageSection from "../components/PageTemplate/PageSection"
import PageCTA from "../components/PageTemplate/PageCTA"
import CardGrid from "../components/Cards/CardGrid"
import InfoCard from "../components/Cards/InfoCard"
import FAQList, { FAQItem } from "../components/FAQ/FAQList"
import { organizationFaqs, involvementOptions } from "../data/organization"
import { siteConfig, sitePaths } from "../site"
import "../styles/features.css"
import "../styles/pages.css"

export default function GetInvolved() {
  return (
    <PageLayout
      seoTitle="Get Involved | Jeevika Foundation"
      seoDescription="Volunteer, partner, give, or advocate with Jeevika Foundation to support community-led impact."
    >
      <PageHero
        kicker="Ways to participate"
        title="There are many ways to build impact with us"
        description="Whether you bring time, funding, expertise, or community relationships, your support can strengthen long-term programs where they are needed most."
      />

      <PageSection variant="default" title="Ways to support the foundation">
        <CardGrid columns={3}>
          {involvementOptions.map((option) => (
            <InfoCard
              key={option.title}
              title={option.title}
              description={option.description}
            >
              <Link to={sitePaths.contact} className="inline-link">
                Start here
              </Link>
            </InfoCard>
          ))}
        </CardGrid>
      </PageSection>

      <PageSection variant="soft">
        <CardGrid columns={2}>
          <div className="card detail-card">
            <span className="section-kicker">If you want to volunteer</span>
            <h3>Contribute your time and skills</h3>
            <p>
              Volunteers support events, mentoring, communications, research, digital literacy, and
              field coordination depending on current program needs.
            </p>
            <a href={`mailto:${siteConfig.email}?subject=Volunteer Inquiry`} className="btn btn-secondary">
              Email the team
            </a>
          </div>

          <div className="card detail-card">
            <span className="section-kicker">If you want to partner</span>
            <h3>Design meaningful partnerships</h3>
            <p>
              We collaborate with companies, educators, healthcare providers, and community groups
              on implementation, CSR, and long-term capacity-building efforts.
            </p>
            <a href={`mailto:${siteConfig.email}?subject=Partnership Inquiry`} className="btn btn-outline">
              Explore partnership
            </a>
          </div>
        </CardGrid>
      </PageSection>

      <PageSection
        variant="default"
        kicker="Common questions"
        title="Common questions from new supporters"
      >
        <FAQList>
          {organizationFaqs.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </FAQList>
      </PageSection>

      <PageCTA
        title="Ready to make your contribution count?"
        description="Tell us how you would like to help and we will guide you toward the most relevant next step."
      >
        <Link to={sitePaths.contact} className="cta-btn">
          Contact Us
        </Link>
        <Link to={sitePaths.projects} className="cta-btn cta-btn-outline">
          View Programs
        </Link>
      </PageCTA>
    </PageLayout>
  )
}
