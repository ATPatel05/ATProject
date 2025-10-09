import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllGoboultGadgetsList } from '@/GadgetData/AllGoboultGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/GoboultGadgets`;
  const title = "Goboult Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Goboult Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Goboult Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Goboult accessories",
    "Goboult gadgets",
    "Goboult devices",
    "Goboult phone accessories",
    "Goboult headphones",
    "Goboult earphones",
    "Goboult chargers",
    "Goboult power banks",
    "Goboult cables",
    "Goboult adapters",
    "Goboult speakers",
    "Goboult smart devices",
    "Goboult watches accessories",
    "Goboult mobile accessories",
    "Best Goboult accessories 2025",
    "Goboult accessories price in India",
    "Goboult accessories specifications",
    "Buy Goboult gadgets online",
    "Latest Goboult accessories collection",
    "Original Goboult accessories",
    "Goboult accessories store",
    "Goboult Bluetooth devices",
    "Goboult smart gadgets",
    "Goboult audio devices",
    "Goboult cases and covers",
    "Goboult gaming accessories",
    "Goboult official accessories",
    "Goboult wireless headphones",
    "Goboult TWS earbuds",
    "Goboult portable speakers"
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
    category: "Goboult Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Goboult</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllGoboultGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
