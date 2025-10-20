import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllRealmeGadgetsList } from '@/GadgetData/AllRealmeGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/RealmeGadgets`;
  const title = "Realme Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Realme Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Realme Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Realme accessories",
    "Realme gadgets",
    "Realme devices",
    "Realme phone accessories",
    "Realme headphones",
    "Realme earphones",
    "Realme chargers",
    "Realme power banks",
    "Realme cables",
    "Realme adapters",
    "Realme speakers",
    "Realme smart devices",
    "Realme watches accessories",
    "Realme mobile accessories",
    "Best Realme accessories 2025",
    "Realme accessories price in India",
    "Realme accessories specifications",
    "Buy Realme gadgets online",
    "Latest Realme accessories collection",
    "Original Realme accessories",
    "Realme accessories store",
    "Realme phone parts and accessories",
    "Realme Bluetooth devices",
    "Realme smart gadgets",
    "Realme audio devices",
    "Realme cases and covers",
    "Realme gaming accessories",
    "Realme official accessories",
    "Realme wireless headphones",
    "Realme TWS earbuds",
    "Realme portable speakers",
    "Realme soundbars",
    "Realme car audio accessories"
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
    category: "Realme Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Realme</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllRealmeGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}