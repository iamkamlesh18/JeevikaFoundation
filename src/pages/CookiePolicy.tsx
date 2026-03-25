import SEO from "../components/SEO/SEO"
import "../styles/policy.css"

export default function CookiePolicy() {
  return (
    <div className="container-md">
      <SEO
        title="Cookie Policy | Jeevika Foundation"
        description="Learn about how Jeevika Foundation uses cookies and similar technologies on our website."
      />

      <section className="section policy-page">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last updated: March 24, 2026</p>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, mobile phone, or tablet) when you visit our website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Why We Use Cookies</h2>
            <p>Jeevika Foundation uses cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, including navigating pages and accessing secure areas.</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website, including which pages are most popular.</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and personalize your experience on our website.</li>
              <li><strong>Analytics Cookies:</strong> Allow us to track and analyze website usage patterns to improve our services.</li>
              <li><strong>Marketing Cookies:</strong> Used to track your interests and display relevant content or advertisements.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Types of Cookies Used</h2>
            <p><strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser.</p>
            <p><strong>Persistent Cookies:</strong> These remain on your device for a specified period or until you manually delete them.</p>
          </section>

          <section className="policy-section">
            <h2>4. Third-Party Cookies</h2>
            <p>
              We may also allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These third parties include:
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>Social media platforms</li>
              <li>Payment processors</li>
              <li>Email service providers</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. Common browsers provide the following links:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Do Not Track</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature. Currently, there is no industry standard recognizing DNT signals, and Jeevika Foundation does not currently respond to DNT signals.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Cookie Preferences</h2>
            <p>
              You can manage your cookie preferences through our website settings. If you disable certain cookies, your experience on our website may be affected, and some features may not function properly.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Updates to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:jeevikafoundation@gmail.com">jeevikafoundation@gmail.com</a><br />
              <strong>Phone:</strong> <a href="tel:+917770000347">+91 7770000347</a>
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
