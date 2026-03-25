import PageLayout from "../components/PageTemplate/PageLayout"
import PageHero from "../components/PageTemplate/PageHero"
import PageSection from "../components/PageTemplate/PageSection"
import CardGrid from "../components/Cards/CardGrid"
import ProfileCard from "../components/Cards/ProfileCard"
import InfoCard from "../components/Cards/InfoCard"
import { leadershipTeam, values } from "../data/organization"
import "../styles/features.css"
import "../styles/pages.css"

export default function Team() {
  return (
    <PageLayout
      seoTitle="Team | Jeevika Foundation"
      seoDescription="Meet the leadership team and values guiding Jeevika Foundation's work."
    >
      <PageHero
        kicker="Team"
        title="People who steward the work with care and accountability"
        description="Our leadership team brings field experience, implementation discipline, and a deep commitment to respectful community partnership."
      />

      <PageSection variant="default" title="Leadership team">
        <CardGrid columns={3}>
          {leadershipTeam.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              role={member.role}
              badge={member.name.charAt(0)}
              bio={member.bio}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection
        variant="soft"
        kicker="How we lead"
        title="Values that shape our decisions"
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
    </PageLayout>
  )
}
