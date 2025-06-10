import React from 'react'

import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>

      <p className={styles.description_paragraph}>
        We’d love to hear from you! If you have any questions, feedback, or business inquiries, feel free to get in touch with us.
      </p>

      <p className={styles.description_paragraph}>
        <strong>Email:</strong>{" "}
        <a href="mailto:contact@yoursitename.com" className="text-blue-600 underline">
          contact@yoursitename.com
        </a>
      </p>
      <p className={styles.description_paragraph}>We typically respond within 24–48 hours. Thank you for visiting our website!</p>
    </main>
  );
}
