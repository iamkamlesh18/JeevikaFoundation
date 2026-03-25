import { Link } from "react-router-dom"
import PageLayout from "../components/PageTemplate/PageLayout"
import PageHero from "../components/PageTemplate/PageHero"
import PageSection from "../components/PageTemplate/PageSection"
import PageCTA from "../components/PageTemplate/PageCTA"
import CardGrid from "../components/Cards/CardGrid"
import MetricCard from "../components/Cards/MetricCard"
import InfoCard from "../components/Cards/InfoCard"
import QuoteCard from "../components/Cards/QuoteCard"
import Timeline, { TimelineItem } from "../components/Timeline/Timeline"
import { headlineStats, impactHighlights, milestones, testimonials } from "../data/organization"
import { sitePaths } from "../site"
import "../styles/features.css"
import "../styles/pages.css"

export default function Impact() {
  return (
    <PageLayout
      seoTitle="Impact | Jeevika Foundation"
      seoDescription="Explore Jeevika Foundation's impact across education, health, livelihoods, and community resilience."
    >
      <PageHero
        kicker="What is changing"
        title="Measurable progress, rooted in people and place"
        description="We measure impact through outcomes, participation, trust, and long-term community capability. The numbers matter because the lives, relationships, and progress behind them matter."
      />

      <PageSection variant="default" title="Impact headline metrics">
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

      <PageSection
        variant="default"
        kicker="Where progress appears"
        title="Program outcomes across our core areas"
        description="We build impact through layered interventions that combine direct support with skills, relationships, and local participation."
      >
        <CardGrid columns={3}>
          {impactHighlights.map((item) => {
            const Icon = item.icon
            return (
              <InfoCard
                key={item.title}
                icon={<Icon size={30} />}
                title={item.title}
                description={item.description}
                meta={item.metric}
              />
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection
        variant="soft"
        kicker="Progress over time"
        title="How the work has evolved"
      >
        <Timeline>
          {milestones.map((milestone) => (
            <TimelineItem
              key={milestone.year}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
            />
          ))}
        </Timeline>
      </PageSection>

      <PageSection
        variant="default"
        kicker="Voices and reflections"
        title="Impact that communities can describe in their own words"
      >
        <CardGrid columns={3}>
          {testimonials.slice(0, 3).map((testimonial) => (
            <QuoteCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageCTA
        title="Support the next chapter of impact"
        description="We are always looking for committed supporters, implementation partners, and champions who believe in dignified, community-led change."
      >
        <Link to={sitePaths.getInvolved} className="cta-btn">
          Get Involved
        </Link>
        <Link to={sitePaths.contact} className="cta-btn cta-btn-outline">
          Partner With Us
        </Link>
      </PageCTA>
    </PageLayout>
  )
}
