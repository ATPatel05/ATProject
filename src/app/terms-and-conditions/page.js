import React from 'react';
import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.description_paragraph}>Effective Date: May 31, 2025</p>
      <p className={styles.description_paragraph}>
        Website Name: <strong>BusinessUpLines</strong>
      </p>
      <p className={styles.description_paragraph}>
        Website URL: <a href="https://www.businessuplines.com" className="text-blue-600 underline">https://www.businessuplines.com</a>
      </p>

      <section className="space-y-6">
        <div>
          <h2 className={styles.title}>Acceptance of Terms</h2>
          <p className={styles.description_paragraph}>
            By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the site.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Website Purpose</h2>
          <p className={styles.description_paragraph}>
            This site is for educational purposes only. We provide business ideas, marketing strategies, and advertising tips. Nothing on this site should be considered professional legal or financial advice.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>User Conduct</h2>
          <p className={styles.description_paragraph}>
            You agree not to use this website for any unlawful activities, harm others, or disrupt our services. Misuse of the content is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Intellectual Property</h2>
          <p className={styles.description_paragraph}>
            All content on this website, including articles, images, graphics, and branding, is the intellectual property of BusinessUpLines. You may not reproduce, distribute, or use our content without prior written permission.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Disclaimer</h2>
          <p className={styles.description_paragraph}>
            All content is provided for general information only. We make no warranties about the accuracy, reliability, or completeness of any content. Your use of any information on the site is strictly at your own risk.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Limitation of Liability</h2>
          <p className={styles.description_paragraph}>
            BusinessUpLines will not be held liable for any direct or indirect damages arising from the use of this site or the information provided. Use the site at your own risk.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Privacy</h2>
          <p className={styles.description_paragraph}>
            We may collect user names and feedback for improvement purposes. Please refer to our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> for more information on how we handle your data.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Governing Law</h2>
          <p className={styles.description_paragraph}>
            These Terms and Conditions are governed by the laws of your jurisdiction. Any disputes will be resolved in the courts of [Insert Your State/Country].
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Changes to Terms</h2>
          <p className={styles.description_paragraph}>
            We may revise these Terms at any time without notice. By continuing to use the site, you accept any changes to these Terms and Conditions.
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Contact Information</h2>
          <p className={styles.description_paragraph}>
            For any questions regarding these Terms and Conditions, contact us at <a href="mailto:support@businessuplines.com" className="text-blue-600 underline">support@businessuplines.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
