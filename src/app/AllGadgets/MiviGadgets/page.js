import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllMiviGadgetsList } from '@/GadgetData/AllMiviGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/MiviGadgets`;
  const title = "Mivi Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Mivi Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Mivi Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Mivi accessories",
    "Mivi gadgets",
    "Mivi devices",
    "Mivi headphones",
    "Mivi earphones",
    "Mivi chargers",
    "Mivi power banks",
    "Mivi cables",
    "Mivi adapters",
    "Mivi speakers",
    "Mivi smart devices",
    "Mivi watches accessories",
    "Mivi mobile accessories",
    "Best Mivi accessories 2025",
    "Mivi accessories price in India",
    "Mivi accessories specifications",
    "Buy Mivi gadgets online",
    "Latest Mivi accessories collection",
    "Original Mivi accessories",
    "Mivi accessories store",
    "Mivi Bluetooth devices",
    "Mivi smart gadgets",
    "Mivi audio devices",
    "Mivi cases and covers",
    "Mivi gaming accessories",
    "Mivi official accessories",
    "Mivi wireless headphones",
    "Mivi TWS earbuds",
    "Mivi portable speakers",
    "Mivi soundbars",
    "Mivi car audio accessories"
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
    category: "Mivi Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Mivi</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllMiviGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
