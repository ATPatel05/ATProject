import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllNoiseGadgetsList } from '@/GadgetData/AllNoiseGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/NoiseGadgets`;
  const title = "Noise Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Noise Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Noise Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Noise accessories",
    "Noise gadgets",
    "Noise devices",
    "Noise headphones",
    "Noise earphones",
    "Noise chargers",
    "Noise power banks",
    "Noise cables",
    "Noise adapters",
    "Noise speakers",
    "Noise smart devices",
    "Noise watches accessories",
    "Noise mobile accessories",
    "Best Noise accessories 2025",
    "Noise accessories price in India",
    "Noise accessories specifications",
    "Buy Noise gadgets online",
    "Latest Noise accessories collection",
    "Original Noise accessories",
    "Noise accessories store",
    "Noise Bluetooth devices",
    "Noise smart gadgets",
    "Noise audio devices",
    "Noise cases and covers",
    "Noise gaming accessories",
    "Noise official accessories",
    "Noise wireless headphones",
    "Noise TWS earbuds",
    "Noise portable speakers",
    "Noise soundbars",
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
    category: "Noise Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Noise</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllNoiseGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}