import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllAppleGadgetsList } from '@/GadgetData/AllAppleGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AppleGadgets`;
  const title = "Apple Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Apple Accessories with full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Apple Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Apple accessories",
    "Apple gadgets",
    "Apple devices",
    "Apple phone accessories",
    "Apple earphones",
    "Apple headphones",
    "Apple chargers",
    "Apple power banks",
    "Apple cables",
    "Apple adapters",
    "Apple speakers",
    "Apple AirPods",
    "Apple MagSafe accessories",
    "Apple watch accessories",
    "Apple iPhone accessories",
    "Best Apple accessories 2025",
    "Apple accessories price in India",
    "Apple accessories full specifications",
    "Buy Apple gadgets online",
    "Latest Apple accessories collection",
    "Original Apple accessories",
    "Apple accessories store",
    "Apple mobile gadgets",
    "Apple phone parts and accessories",
    "Apple accessories comparison",
    "Apple smart gadgets",
    "Apple Bluetooth devices",
    "Apple AirPods Pro",
    "Apple HomePod mini",
    "Apple official accessories"
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
    category: "Apple Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Apple</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllAppleGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}