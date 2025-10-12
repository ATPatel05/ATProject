import React from 'react'
import styles from './page.module.css';
import SectionHeader from "@/components/SectionHeader";
import LuxuryProducts from '@/components/LuxuryProducts';
import PhonePost from '@/components/PhonePost';
import { AllLuxuryWatchList } from '@/LuxuryItemsData/LuxuryWatchList';
import { AllLuxuryHandBagList } from '@/LuxuryItemsData/LuxuryHandBagList';
import { AllLuxuryBreslateList } from '@/LuxuryItemsData/LuxuryBreslateList';
import { AllLuxuryPerfumeList } from '@/LuxuryItemsData/LuxuryPerfumeList';
import { AllLuxuryShoseList } from '@/LuxuryItemsData/LuxuryShoseList';
import { AllLuxuryNacklaceList } from '@/LuxuryItemsData/LuxuryNacklaceList';
import { AllLuxuryGogglesList } from '@/LuxuryItemsData/LuxuryGogglesList';
import { AllLuxuryMakeUpKitList } from '@/LuxuryItemsData/LuxuryMakeUpKitList';
import { AllLuxuryBagList } from '@/LuxuryItemsData/LuxuryBagList';

export function generateMetadata() {

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/Gadgets`;
  const title = "Best Luxury Products full Specification. Buy in india, USA, Canada, Germany | SkillUpLines"
  const description = "Buy luxury items with Full Specifications Online at Best Prices on Amazon. Shop Top watch, Hand Bag, Breslate  Perfume, Shose, NeckLace, Goggles & MackUp Kit in India, USA, Canada, Germany & UK. Fast Delivery & Great Deals.";
  const keywords = [
    "Luxury Items",
    "expensive products",
    "expensive luxury",
    "Luxury products",
    "stylish watch",
    "specification",
    "luxury",
    "best luxury product",
    "expensive luxury items",
    "expensive luxury product",
    "luxury Hand Bag",
    "luxury Breslate",
    "best Perfume",
    "best Shose",
    "luxury NeckLace",
    "Fancy Goggles",
    "luxury MackUp Kit",
    "luxury bag",
    "luxury stylish bag",
  ]

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    authors: [{ name: "SkillUpLines Team", url: `${siteUrl}/about` }],
    creator: "SkillUpLines Team",
    publisher: "SkillUpLines",
    category: "Luxury Products, Premium Accessories, Designer Watches, Luxury Handbags, Elegant Bracelets, Branded Perfumes, Fashionable Shoes, Luxury Necklaces, Fancy Goggles, Premium Makeup Kits, Exclusive Luxury Collection, Expensive Lifestyle Items, Stylish Luxury Gifts, High-End Fashion Accessories, Luxury Home Décor, Designer Jewelry, Trendy Handbags, Luxury Fashion Items, Premium Branded Products, Modern Luxury Style",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: fullUrl,
      siteName: "SkillUpLines",
      // images: [
      //   {
      //     url: imageUrl,
      //     width: 1200,
      //     height: 630,
      //     alt: title,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [imageUrl],
      creator: "@SkillUpLines",
    }
  };
}

const page = () => {
  return (
    <main className={styles.container}>
      <LuxuryProducts />
      <div className={styles.mobile_blog}>
        <section className={styles.phone_review_section}>
          <SectionHeader>Luxury Items</SectionHeader>
          <p className={styles.site_message}>
            Our website is currently under maintenance. We’ll be back shortly with an improved experience.
          </p>
        </section>
        {/* <section className={styles.phone_review_section}>
          <SectionHeader>Watch</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryWatchList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Hand Bag</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryHandBagList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Breslate</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryBreslateList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Perfume</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryPerfumeList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Shose</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryShoseList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Nacklace</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryNacklaceList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Gogglse</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryGogglesList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>MakeUp Kit</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryMakeUpKitList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Bag</SectionHeader>
          <section className={styles.all_phones}>
            {AllLuxuryBagList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section> */}
      </div>
    </main>
  )
}

export default page;
