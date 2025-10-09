import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllOnePlusGadgetsList } from '@/GadgetData/AllOnePlusGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/OnePlusGadgets`;
  const title = "OnePlus Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "OnePlus Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of OnePlus Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "OnePlus accessories",
    "OnePlus gadgets",
    "OnePlus devices",
    "OnePlus phone accessories",
    "OnePlus headphones",
    "OnePlus earphones",
    "OnePlus chargers",
    "OnePlus power banks",
    "OnePlus cables",
    "OnePlus adapters",
    "OnePlus speakers",
    "OnePlus smart devices",
    "OnePlus watches accessories",
    "OnePlus mobile accessories",
    "Best OnePlus accessories 2025",
    "OnePlus accessories price in India",
    "OnePlus accessories specifications",
    "Buy OnePlus gadgets online",
    "Latest OnePlus accessories collection",
    "Original OnePlus accessories",
    "OnePlus accessories store",
    "OnePlus phone parts and accessories",
    "OnePlus Bluetooth devices",
    "OnePlus smart gadgets",
    "OnePlus audio devices",
    "OnePlus cases and covers",
    "OnePlus gaming accessories",
    "OnePlus official accessories",
    "OnePlus wireless headphones",
    "OnePlus TWS earbuds",
    "OnePlus portable speakers",
    "OnePlus soundbars",
    "OnePlus car audio accessories"
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
    category: "OnePlus Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>OnePlus</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllOnePlusGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
