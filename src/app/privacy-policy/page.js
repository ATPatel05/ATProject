import React from 'react';
import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.description_paragraph}>Effective Date: [Insert Date]</p>
      <p className={styles.description_paragraph}>
        Website Name: <strong>BusinessUpLines</strong>
      </p>
      <p className={styles.description_paragraph}>
        Website URL:{' '}
        <a href="https://www.businessuplines.com" className="text-blue-600 underline">
          https://www.businessuplines.com
        </a>
      </p>

      <section className="space-y-6">
        <div>
          <h2 className={styles.title}>Information We Collect</h2>
          <p className={styles.description_paragraph}>
            We may collect the following information from users:
          </p>
          <ul className={styles.description_paragraph} style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
            <li>Name (if provided)</li>
            <li>Feedback or descriptions submitted via forms</li>
            <li>Browser and usage data for analytics purposes</li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Purpose of Collection</h2>
          <p className={styles.description_paragraph}>
            The information collected is used to:
          </p>
          <ul className={styles.description_paragraph} style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
            <li>Improve website content and user experience</li>
            <li>Respond to user feedback and inquiries</li>
            <li>Conduct analytics and measure site traffic</li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Data Protection</h2>
          <p className={styles.description_paragraph}>
            We implement appropriate technical and organizational measures to protect your data from misuse, loss, or unauthorized access.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Third-Party Services</h2>
          <p className={styles.description_paragraph}>
            We may use third-party services such as Google Analytics to collect non-personally identifiable data for improving our site.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Cookies</h2>
          <p className={styles.description_paragraph}>
            Cookies may be used to enhance user experience and track site usage. You can disable cookies via your browser settings if you prefer.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>User Rights</h2>
          <p className={styles.description_paragraph}>
            You have the right to request access to, or deletion of, your personal data. Contact us at the email below to exercise these rights.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Updates</h2>
          <p className={styles.description_paragraph}>
            This Privacy Policy may be updated periodically. Please review it regularly to stay informed of any changes.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.description_paragraph}>
            For questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:support@businessuplines.com" className="text-blue-600 underline">
              support@businessuplines.com
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}
