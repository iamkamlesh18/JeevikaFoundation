import { useMemo, useState } from "react"
import type { FormEvent } from "react"
import { Link } from "react-router-dom"
import { FiCalendar, FiUser } from "react-icons/fi"
import { posts } from "../data/posts"
import PageLayout from "../components/PageTemplate/PageLayout"
import PageHero from "../components/PageTemplate/PageHero"
import PageSection from "../components/PageTemplate/PageSection"
import { sitePaths } from "../site"
import "../styles/pages.css"
import "../styles/forms.css"
import "../styles/features.css"

export default function Blog() {
  const categories = useMemo(() => ["All", ...new Set(posts.map((post) => post.category))], [])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const visiblePosts = useMemo(
    () => (selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)),
    [selectedCategory],
  )

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <PageLayout
      seoTitle="Stories | Jeevika Foundation"
      seoDescription="Stories, updates, and field reflections from Jeevika Foundation."
    >
      <PageHero
        kicker="From the field"
        title="Field notes, community stories, and signs of progress"
        description="These stories capture how change unfolds across education, health, livelihoods, and local leadership through the people and partnerships that shape it over time."
      />

      <PageSection
        variant="default"
        kicker="Explore by area"
        title="Explore stories by focus area"
      >
        <div className="filter-row">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === selectedCategory ? "btn btn-secondary" : "btn btn-outline"}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={category === selectedCategory}
            >
              {category}
            </button>
          ))}
        </div>
      </PageSection>

      <PageSection variant="default" title="Story listing">
        <div className="story-card-grid">
          {visiblePosts.map((post) => (
            <Link key={post.slug} to={`${sitePaths.blog}/${post.slug}`} className="story-list-card">
              <div className="story-list-icon">{post.image}</div>
              <span className="story-list-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="story-list-meta">
                <span>
                  <FiCalendar size={14} /> {post.date}
                </span>
                <span>
                  <FiUser size={14} /> {post.author}
                </span>
              </div>
            </Link>
          ))}
        </div>
        {visiblePosts.length === 0 && (
          <p className="empty-state-copy">No stories are available in this category yet.</p>
        )}
      </PageSection>

      <PageSection
        variant="soft"
        kicker="Stay updated"
        title="Receive future stories and impact notes"
        description="Subscribe for occasional field notes, program reflections, and new stories from the communities we work alongside."
      >
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="your@email.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-secondary">
            Subscribe
          </button>
        </form>

        {isSubscribed && (
          <p className="success-message newsletter-success">
            Thanks for subscribing. We will share future stories with you.
          </p>
        )}
      </PageSection>
    </PageLayout>
  )
}
