import React from 'react';
import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import SectionHeader from '@/components/SectionHeader';

export default function page() {
  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <section className={styles.about_section}>
          <SectionHeader>About SkillUpLines</SectionHeader>
          <p className={styles.Text}>
            SkillUpLines.com is your trusted source for discovering the latest and most reliable information about Mobiles, Gadgets, Luxury Products and Beauty items across top global markets — India, USA, UK, Canada, and Germany.
          </p>
          <p className={styles.Text}>
            Founded in 2025, SkillUpLines aims to simplify the way digital consumers explore, compare, and choose their favorite products. Whether you’re searching for the latest smartphone, a premium gadget, or luxury essentials, we deliver accurate and helpful insights to make smarter buying decisions.
          </p>
          <p className={styles.Text}>
            Latest Mobile Phones & Prices — covering all major brands like Samsung, Apple, OnePlus, Realme, and more.
          </p>
          <p className={styles.Text}>
            Gadgets & Accessories — including smartwatches, Bluetooth speakers, and more.
          </p>
          <p className={styles.Text}>
            Luxury & Beauty Products — curated lists of premium and trending products.
          </p>
          <p className={styles.Text}>
            Our platform helps users discover products, all specifications, and check availability on trusted marketplaces like Amazon (India, US, Canada, UK, Germany).
          </p>
          <p className={styles.Text}>
            To become a trusted global tech and lifestyle discovery platform that connects consumers to the best products and reliable marketplaces through transparent, data-driven information.
          </p>
          <p className={styles.Text}>
            Our team of tech and lifestyle enthusiasts researches, analyzes, and verifies every product detail to provide authentic, unbiased, and easy-to-understand content.
          </p>
          <p className={styles.Text}>
            We combine data, design, and expertise to ensure you always find what’s new, trending, and worth your attention.
          </p>
          <p className={styles.Text}>
            SkillUpLines is dedicated to keeping content transparent, reliable, and user-focused.
          </p>
          {/* <p>
            Content Reach: SkillUpLines is steadily growing with thousands of monthly visitors worldwide, focused on technology, lifestyle, and smart shopping.
          </p>
          <p>
            Audience: Our readers include tech enthusiasts, smart shoppers, and brand-conscious buyers looking for verified information and fair comparisons.
          </p>
          <p>
            Database: We maintain a continuously expanding database of mobile phones, gadgets, and lifestyle products across multiple countries.
          </p> */}
        </section>
      </div>
    </main>
  );
}
