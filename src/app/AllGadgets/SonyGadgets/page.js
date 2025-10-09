import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllSonyGadgetsList } from '@/GadgetData/AllSonyGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/SonyGadgets`;
  const title = "Sony Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Sony Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Sony Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Sony accessories",
    "Sony gadgets",
    "Sony devices",
    "Sony headphones",
    "Sony earphones",
    "Sony chargers",
    "Sony power banks",
    "Sony cables",
    "Sony adapters",
    "Sony speakers",
    "Sony smart devices",
    "Sony watches accessories",
    "Sony mobile accessories",
    "Best Sony accessories 2025",
    "Sony accessories price in India",
    "Sony accessories specifications",
    "Buy Sony gadgets online",
    "Latest Sony accessories collection",
    "Original Sony accessories",
    "Sony accessories store",
    "Sony phone parts and accessories",
    "Sony Bluetooth devices",
    "Sony smart gadgets",
    "Sony audio devices",
    "Sony cases and covers",
    "Sony gaming accessories",
    "Sony official accessories",
    "Sony wireless headphones",
    "Sony TWS earbuds",
    "Sony portable speakers",
    "Sony soundbars",
    "Sony car audio accessories"
  ];


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
    category: "Sony Accessories, Gadgets & Devices full specifications",
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

export default function Page() {

  return (
    <main className={styles.container}>
      <GadgetsBrands />
      <div className={styles.mobile_blog}>
        <SectionHeader>Sony</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllSonyGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}