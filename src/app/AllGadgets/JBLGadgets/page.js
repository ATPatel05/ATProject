import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllJBLGadgetsList } from '@/GadgetData/AllJBLGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/JBLGadgets`;
  const title = "JBL Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "JBL Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of JBL Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "JBL accessories",
    "JBL gadgets",
    "JBL devices",
    "JBL headphones",
    "JBL earphones",
    "JBL chargers",
    "JBL power banks",
    "JBL cables",
    "JBL adapters",
    "JBL speakers",
    "JBL smart devices",
    "JBL watches accessories",
    "JBL mobile accessories",
    "Best JBL accessories 2025",
    "JBL accessories price in India",
    "JBL accessories specifications",
    "Buy JBL gadgets online",
    "Latest JBL accessories collection",
    "Original JBL accessories",
    "JBL accessories store",
    "JBL Bluetooth devices",
    "JBL smart gadgets",
    "JBL audio devices",
    "JBL cases and covers",
    "JBL gaming accessories",
    "JBL official accessories",
    "JBL wireless headphones",
    "JBL TWS earbuds",
    "JBL portable speakers",
    "JBL soundbars",
    "JBL car audio accessories"
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
    category: "JBL Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>JBL</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllJBLGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
