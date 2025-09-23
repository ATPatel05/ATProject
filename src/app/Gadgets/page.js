import React from 'react'
import styles from './page.module.css';
import SectionHeader from "@/components/SectionHeader";
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllSamsungPhonesList } from '@/PhoneData/SamsungPhonesList';
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
import { AllNoiceGadgetsList } from '@/GadgetData/AllNoiseGadgetsList';
import { AllMiviGadgetsList } from '@/GadgetData/AllMiviGadgetsList';
import { AllAmazonBasisGadgetsList } from '@/GadgetData/AllAmazonBasisGadgetsList';
import { AllDigitekGadgetsList } from '@/GadgetData/AllDigitekGadgetsList';

export function generateMetadata() {

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/Gadgets`;
  const title = "Phone Accessories & gadgets with Specificatio. Buy in india, USA, Canada | SkillUpLines"
  const description = "Buy All Brand gadgets with Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones , Cameras, Smart Watches & Accessories in India, USA, Canada, Germany & UK. Fast Delivery & Great Deals.";

  const keywords = [
    "Latest gadgets",
    "Latest headphones",
    "latest earphones",
    "latest Bluetooth headphones",
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
          <SectionHeader>BoAT Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllBoATGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>JBL Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllJBLGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Apple Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllAppleGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Samsung Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllSamsungGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>OnePlus Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllOnePlusGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Sony Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllSonyGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Oppo Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllOppoGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Zebronics Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllZebronicsGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Portonics Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllPortonicsGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Soundcore Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllSoundcoreGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Goboult Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllGoboultGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Noise Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllNoiceGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
        <section className={styles.phone_review_section}>
          <SectionHeader>Mivi Gadgets</SectionHeader>
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
          <SectionHeader>Digitek Gadgets</SectionHeader>
          <section className={styles.all_phones}>
            {AllDigitekGadgetsList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
        </section>
      </div>
    </main>
  )
}
export default page
