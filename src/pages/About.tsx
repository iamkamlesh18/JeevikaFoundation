import { Link } from "react-router-dom"
import PageLayout from "../components/PageTemplate/PageLayout"
import PageHero from "../components/PageTemplate/PageHero"
import PageSection from "../components/PageTemplate/PageSection"
import PageCTA from "../components/PageTemplate/PageCTA"
import CardGrid from "../components/Cards/CardGrid"
import InfoCard from "../components/Cards/InfoCard"
import MetricCard from "../components/Cards/MetricCard"
import { headlineStats, organizationOverview, values } from "../data/organization"
import { sitePaths } from "../site"
import "../styles/features.css"
import "../styles/pages.css"

export default function About() {
  return (
    <PageLayout
      seoTitle="About | Jeevika Foundation"
      seoDescription="Learn about Jeevika Foundation's mission, values, and community-led approach to social impact."
    >
      <PageHero
        kicker="Who we are"
        title={organizationOverview.tagline}
        description={organizationOverview.mission}
      />

      <PageSection variant="default" kicker="How we began" title="How the foundation grew from local intent to broader impact">
        <div className="faq-list">
          {organizationOverview.story.map((paragraph) => (
            <article key={paragraph} className="faq-item">
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        variant="soft"
        kicker="What guides us"
        title="What guides our decisions and relationships"
      >
        <CardGrid columns={3}>
          {values.map((value) => {
            const Icon = value.icon
            return (
              <InfoCard
                key={value.title}
                icon={<Icon size={28} />}
                title={value.title}
                description={value.description}
              />
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection variant="default" title="Key organization highlights">
        <CardGrid columns={2}>
          {headlineStats.map((stat) => (
            <MetricCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageCTA
        title="Meet the people behind the work"
        description="Learn more about the people, values, and leadership approach guiding how we steward partnerships and programs with accountability."
      >
        <Link to={sitePaths.team} className="cta-btn">
          Visit Team Page
        </Link>
        <Link to={sitePaths.impact} className="cta-btn cta-btn-outline">
          Explore Impact
        </Link>
      </PageCTA>
    </PageLayout>
  )
}
