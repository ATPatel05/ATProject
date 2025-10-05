import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllSamsungGadgetsList } from '@/GadgetData/AllSamsungGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/SamsungGadgets`;
  const title = "Samsung Accessories & gadgets with Specification. Buy in india, USA, Canada | SkillUpLines"
  const description = "Samsung Accessories with Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones & Accessories of Samsung Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Samsung accessories",
    "Samsung gadgets",
    "Samsung devices",
    "Samsung phone accessories",
    "Samsung headphones",
    "Samsung earphones",
    "Samsung chargers",
    "Samsung power banks",
    "Samsung cables",
    "Samsung adapters",
    "Samsung speakers",
    "Samsung smart devices",
    "Samsung watches accessories",
    "Samsung mobile accessories",
    "Best Samsung accessories 2025",
    "Samsung accessories price in India",
    "Samsung accessories specifications",
    "Buy Samsung gadgets online",
    "Latest Samsung accessories collection",
    "Original Samsung accessories",
    "Samsung accessories store",
    "Samsung phone parts and accessories",
    "Samsung Bluetooth devices",
    "Samsung smart gadgets",
    "Samsung audio devices",
    "Samsung cases and covers",
    "Samsung gaming accessories",
    "Samsung official accessories",
    "Samsung wireless headphones",
    "Samsung TWS earbuds",
    "Samsung portable speakers",
    "Samsung soundbars",
    "Samsung car audio accessories"
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
    category: "Samsung Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Samsung</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllSamsungGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}