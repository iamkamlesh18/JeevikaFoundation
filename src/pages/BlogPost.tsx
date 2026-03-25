import { useParams, Link } from "react-router-dom"
import { FiArrowLeft, FiCalendar, FiShare2, FiUser } from "react-icons/fi"
import SEO from "../components/SEO/SEO"
import { posts } from "../data/posts"
import { sitePaths } from "../site"
import "../styles/features.css"
import "../styles/pages.css"

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)
  const shareUrl = typeof window === "undefined" ? "" : window.location.href

  if (!post) {
    return (
      <div className="page-shell">
        <section className="page-section story-detail-shell story-empty-state">
          <SEO
            title="Story Not Found | Jeevika Foundation"
            description="The requested Jeevika Foundation story could not be found."
            noindex
          />
          <h1>Story Not Found</h1>
          <p>Sorry, we couldn't find the story you're looking for.</p>
          <Link to={sitePaths.blog} className="btn btn-primary">
            Back to Stories
          </Link>
        </section>
      </div>
    )
  }

  const relatedPosts = posts.filter((entry) => entry.slug !== slug).slice(0, 2)

  return (
    <div className="page-shell">
      <section className="page-section story-detail-shell">
        <SEO title={`${post.title} | Jeevika Foundation`} description={post.excerpt} />

        <Link to={sitePaths.blog} className="story-back-link">
          <FiArrowLeft size={16} /> Back to Stories
        </Link>

        <header className="story-detail-hero">
          <div className="story-detail-icon">{post.image}</div>
          <span className="story-detail-tag">{post.category}</span>
          <h1>{post.title}</h1>

          <div className="story-detail-meta">
            <span>
              <FiCalendar size={16} /> {post.date}
            </span>
            <span>
              <FiUser size={16} /> {post.author}
            </span>
          </div>

          <div className="story-detail-excerpt">
            <p>{post.excerpt}</p>
          </div>
        </header>

        <div className="story-detail-body">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>

        <div className="story-detail-footer">
          <div>
            <p className="story-share-label">Share this story</p>
            <div className="story-share-actions">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-small btn-outline"
              >
                <FiShare2 size={16} /> Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-small btn-outline"
              >
                <FiShare2 size={16} /> Twitter
              </a>
            </div>
          </div>

          <Link to={sitePaths.blog} className="btn btn-secondary">
            Read More Stories
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <span className="section-kicker">More stories</span>
          <h2>Continue reading from the field</h2>
        </div>
        <div className="story-card-grid">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.slug}
              to={`${sitePaths.blog}/${relatedPost.slug}`}
              className="story-list-card"
            >
              <div className="story-list-icon">{relatedPost.image}</div>
              <span className="story-list-tag">{relatedPost.category}</span>
              <h3>{relatedPost.title}</h3>
              <p>{relatedPost.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
