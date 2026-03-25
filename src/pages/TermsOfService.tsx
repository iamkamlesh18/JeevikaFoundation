import SEO from "../components/SEO/SEO"
import "../styles/policy.css"

export default function TermsOfService() {
  return (
    <div className="container-md">
      <SEO
        title="Terms of Service | Jeevika Foundation"
        description="Read the terms and conditions for using Jeevika Foundation's website and services."
      />

      <section className="section policy-page">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: March 24, 2026</p>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website operated by Jeevika Foundation, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Jeevika Foundation's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Jeevika Foundation's website are provided on an 'as is' basis. Jeevika Foundation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Limitations</h2>
            <p>
              In no event shall Jeevika Foundation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Jeevika Foundation's website.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Jeevika Foundation's website could include technical, typographical, or photographic errors. Jeevika Foundation does not warrant that any of the materials on the website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Links</h2>
            <p>
              Jeevika Foundation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Jeevika Foundation of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Modifications</h2>
            <p>
              Jeevika Foundation may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Donations</h2>
            <p>
              All donations are non-refundable unless otherwise specified. By making a donation, you authorize Jeevika Foundation to use your donation to support our programs and initiatives as described on our website.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Volunteering</h2>
            <p>
              Volunteers agree to follow Jeevika Foundation's volunteer code of conduct and any guidelines provided. Jeevika Foundation reserves the right to reject, remove, or restrict any volunteer at its sole discretion.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
