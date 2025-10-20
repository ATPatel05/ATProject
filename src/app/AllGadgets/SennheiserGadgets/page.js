import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllSennheiserGadgetsList } from '@/GadgetData/AllSennheiserGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/PortonicsGadgets`;
  const title = "Portonics Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Portonics Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Portonics Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Portonics accessories",
    "Portonics gadgets",
    "Portonics devices",
    "Portonics phone accessories",
    "Portonics headphones",
    "Portonics earphones",
    "Portonics chargers",
    "Portonics power banks",
    "Portonics cables",
    "Portonics adapters",
    "Portonics speakers",
    "Portonics smart devices",
    "Portonics watches accessories",
    "Portonics mobile accessories",
    "Best Portonics accessories 2025",
    "Portonics accessories price in India",
    "Portonics accessories specifications",
    "Buy Portonics gadgets online",
    "Latest Portonics accessories collection",
    "Original Portonics accessories",
    "Portonics accessories store",
    "Portonics Bluetooth devices",
    "Portonics smart gadgets",
    "Portonics audio devices",
    "Portonics cases and covers",
    "Portonics gaming accessories",
    "Portonics official accessories",
    "Portonics wireless headphones",
    "Portonics TWS earbuds",
    "Portonics portable speakers",
    "Portonics soundbars",
    "Portonics car audio accessories"
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
    category: "Portonics Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Sennheiser</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllSennheiserGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}