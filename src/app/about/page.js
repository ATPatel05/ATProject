import React from 'react';
import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.container}>
      <article>
        <h1 className={styles.title}>About Us</h1>

        <section className="mb-6">
          <h2 className={styles.title}>What is SkillUpLines?</h2>
          <p className={styles.description_paragraph}>
            SkillUpLines offers top small business ideas through blogs that guide you to start, grow, and manage successful businesses. We also provide expert business management and marketing strategies to help expand effectively.
          </p>
        </section>

        <section className="mb-6">
          <h2 className={styles.title}>Our Mission</h2>
          <p className={styles.description_paragraph}>
            Our mission is to help aspiring entrepreneurs start and grow successful businesses by providing the best tools and strategies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className={styles.title}>What We Cover</h2>
          <ul className={styles.description_paragraph}>
            <li><strong>Small Business Ideas</strong>: From low-investment ventures to scalable side hustles</li>
            <li><strong>Business from Home</strong>: Work-from-home ideas and productivity tools</li>
            <li><strong>Business for Students</strong>: Learn while you earn</li>
            <li><strong>Marketing Strategies</strong>: Digital and offline approaches to growth</li>
            <li><strong>Management Strategies</strong>: Manage teams, time, and workflows</li>
            <li><strong>Advertising Strategies</strong>: Get your brand seen and remembered</li>
            <li><strong>Branding</strong>: Build your business identity and reputation</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className={styles.title}>What Makes SkillUpLines Different</h2>
          <p className={styles.description_paragraph}>
            SkillUpLines not only uncovers business ideas but also provides real-world strategies to manage, grow, and build high-value businesses.
          </p>
          <p className={styles.description_paragraph}>
            We’re not just building a business blog — we’re building a <strong>movement</strong> of dreamers who take action.
          </p>
        </section>

        <p className={styles.description_paragraph}>– Team SkillUpLines</p>
      </article>
    </main>
  );
}