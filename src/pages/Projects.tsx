import { Link } from "react-router-dom"
import PageLayout from "../components/PageTemplate/PageLayout"
import PageHero from "../components/PageTemplate/PageHero"
import PageSection from "../components/PageTemplate/PageSection"
import PageCTA from "../components/PageTemplate/PageCTA"
import CardGrid from "../components/Cards/CardGrid"
import InfoCard from "../components/Cards/InfoCard"
import Timeline, { TimelineItem } from "../components/Timeline/Timeline"
import { milestones } from "../data/organization"
import { programs } from "../data/programs"
import { sitePaths } from "../site"
import "../styles/features.css"
import "../styles/pages.css"

export default function Projects() {
  return (
    <PageLayout
      seoTitle="Programs | Jeevika Foundation"
      seoDescription="Explore Jeevika Foundation programs across education, health, livelihoods, infrastructure, and disaster recovery."
    >
      <PageHero
        kicker="Where we work"
        title="Integrated programs that respond to real local needs"
        description="Our programs are designed to be practical, collaborative, and rooted in the conditions communities actually face. We focus on continuity, trust, and outcomes that can last."
      />

      <PageSection variant="default" title="Program portfolio">
        <CardGrid columns={3}>
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <InfoCard
                key={program.slug}
                icon={<Icon size={30} />}
                title={program.title}
                description={program.summary}
                meta={program.location}
              >
                <div className="info-list">
                  {program.outcomes.map((outcome) => (
                    <span key={outcome} className="info-pill">
                      {outcome}
                    </span>
                  ))}
                </div>
              </InfoCard>
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection
        variant="soft"
        kicker="How the work grew"
        title="How our programs have evolved over time"
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

      <PageCTA
        title="Support a program area that aligns with your priorities"
        description="We welcome volunteering, partnerships, and targeted support across education, livelihoods, health, infrastructure, and recovery initiatives."
      >
        <Link to={sitePaths.getInvolved} className="cta-btn">
          Get Involved
        </Link>
        <Link to={sitePaths.contact} className="cta-btn cta-btn-outline">
          Talk to Us
        </Link>
      </PageCTA>
    </PageLayout>
  )
}
