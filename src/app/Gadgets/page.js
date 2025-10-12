import React from 'react'
import styles from './page.module.css';
import SectionHeader from "@/components/SectionHeader";
import GadgetsBrands from '@/components/GadgetsBrands';
import PhonePost from '@/components/PhonePost';
import { AllBoATGadgetsList } from '@/GadgetData/AllBoATGadgetsList';
import { AllJBLGadgetsList } from '@/GadgetData/AllJBLGadgetsList';
import { AllAppleGadgetsList } from '@/GadgetData/AllAppleGadgetsList';
import { AllSamsungGadgetsList } from '@/GadgetData/AllSamsungGadgetsList';
import { AllOnePlusGadgetsList } from '@/GadgetData/AllOnePlusGadgetsList';
import { AllSonyGadgetsList } from '@/GadgetData/AllSonyGadgetsList';
import { AllOppoGadgetsList } from '@/GadgetData/AllOppoGadgetsList';
import { AllZebronicsGadgetsList } from '@/GadgetData/AllZebronicsGadgetsList';
import { AllPortonicsGadgetsList } from '@/GadgetData/AllPortonicsGadgetsList';
import { AllSoundcoreGadgetsList } from '@/GadgetData/AllSoundcoreGadgetsList';
import { AllGoboultGadgetsList } from '@/GadgetData/AllGoboultGadgetsList';
import { AllNoiseGadgetsList } from '@/GadgetData/AllNoiseGadgetsList';
import { AllMiviGadgetsList } from '@/GadgetData/AllMiviGadgetsList';
import { AllAmazonBasisGadgetsList } from '@/GadgetData/AllAmazonBasisGadgetsList';
import { AllDigitekGadgetsList } from '@/GadgetData/AllDigitekGadgetsList';

export function generateMetadata() {

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/Gadgets`;
  const title = "Phone Accessories & gadget products with Specification. Buy in india, USA, Canada | SkillUpLines"
  const description = "Buy All Brand gadgets with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones, Cameras, Smart Watches & Accessories in India, USA, Canada, Germany & UK.";

  const keywords = [
    "Boat",
    "JBL",
    "Apple",
    "Samsung",
    "OnePlus",
    "Sony",
    "Oppo",
    "Zebronics",
    "Portonics",
    "Soundcore",
    "Goboult",
    "Noise",
    "Goboult",
    "Goboult",
    "Mivi",
    "Amazon basis",
    "Realme",
    "Latest gadgets",
    "Latest headphones",
    "latest earphones",
    "latest Bluetooth headphones",
    "Latest airdrops",
    "latest Bluetooth Speakers",
    "Latest Phones",
    "Latest headphones Specification",
    "Latest 2025 headphones ",
    "charger",
    "earphone",
    "information",
    "info",
    "specs",
    "specification",
    "Latest Smart Phones",
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
    category: "Latest headphones, amazon price, mobile phone Accessories & Parts Full Specification, earphones Details, speaker Price, phone Accessories Full Details, headphones detailed Description",
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
      <GadgetsBrands />
      <div className={styles.mobile_blog}>
        <section className={styles.phone_review_section}>
          <SectionHeader>Accessories & Gadgets</SectionHeader>
          <p className={styles.site_message}>
            Our website is currently under maintenance. We’ll be back shortly with an improved experience.
          </p>
        </section>
        {/* <section className={styles.phone_review_section}>
          <SectionHeader>BoAT</SectionHeader>
          <section className={styles.all_phones}>
            {AllBoATGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>JBL</SectionHeader>
          <section className={styles.all_phones}>
            {AllJBLGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Apple</SectionHeader>
          <section className={styles.all_phones}>
            {AllAppleGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Samsung</SectionHeader>
          <section className={styles.all_phones}>
            {AllSamsungGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>OnePlus</SectionHeader>
          <section className={styles.all_phones}>
            {AllOnePlusGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Sony </SectionHeader>
          <section className={styles.all_phones}>
            {AllSonyGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Oppo </SectionHeader>
          <section className={styles.all_phones}>
            {AllOppoGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Zebronics </SectionHeader>
          <section className={styles.all_phones}>
            {AllZebronicsGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Portonics </SectionHeader>
          <section className={styles.all_phones}>
            {AllPortonicsGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Soundcore </SectionHeader>
          <section className={styles.all_phones}>
            {AllSoundcoreGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Goboult </SectionHeader>
          <section className={styles.all_phones}>
            {AllGoboultGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Noise </SectionHeader>
          <section className={styles.all_phones}>
            {AllNoiseGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Mivi </SectionHeader>
          <section className={styles.all_phones}>
            {AllMiviGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Amazon Basis</SectionHeader>
          <section className={styles.all_phones}>
            {AllAmazonBasisGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Digitek</SectionHeader>
          <section className={styles.all_phones}>
            {AllDigitekGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section> */}
      </div>
    </main>
  )
}
export default page
