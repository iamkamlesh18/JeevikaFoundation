import SEO from "../components/SEO/SEO"
import "../styles/policy.css"

export default function PrivacyPolicy() {
  return (
    <div className="container-md">
      <SEO
        title="Privacy Policy | Jeevika Foundation"
        description="Learn about how Jeevika Foundation collects, uses, and protects your personal information."
      />

      <section className="section policy-page">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: March 24, 2026</p>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              Jeevika Foundation ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when filling out forms.</li>
              <li><strong>Donation Information:</strong> Payment details when you make a donation (processed securely through third-party providers).</li>
              <li><strong>Volunteer Information:</strong> Details about your skills and availability when you express interest in volunteering.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>Jeevika Foundation uses the collected information for various purposes:</p>
            <ul>
              <li>To process donations and volunteer applications</li>
              <li>To send newsletters, updates, and information about our programs</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To detect and prevent fraudulent activities</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Third-Party Services</h2>
            <p>
              We may use third-party services for payment processing, email delivery, and analytics. These third parties have access only to the information necessary to perform their functions and are contractually obligated to maintain the confidentiality of your data.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal constraints)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:jeevikafoundation@gmail.com">jeevikafoundation@gmail.com</a><br />
              <strong>Phone:</strong> <a href="tel:+917770000347">+91 7770000347</a>
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date above.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
