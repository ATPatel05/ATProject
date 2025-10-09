import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryShoseList } from '@/LuxuryItemsData/LuxuryShoseList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Shoes | Designer Footwear & Premium Sneakers Online at best price in india  - SkillUpLines"
  const description = "Explore the latest collection of luxury shoes and designer footwear. Buy Best premium sneakers, heels, loafers, and formal shoes online for men and women, perfect for any occasion.";
  const keywords = [
    "Luxury shoes",
    "Designer shoes",
    "Premium shoes",
    "Luxury footwear",
    "High-end shoes",
    "Luxury sneakers",
    "Luxury heels",
    "Luxury loafers",
    "Luxury shoes for men",
    "Luxury shoes for women",
    "Luxury shoes online",
    "Designer footwear online",
    "Exclusive luxury shoes",
    "Luxury shoe brands",
    "Luxury shoes price",
    "Luxury fashion shoes",
    "Luxury casual shoes",
    "Luxury formal shoes",
    "Best luxury shoes 2025",
    "Luxury shoe collection"
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
    category: "Luxury Shoes, Designer Footwear & Premium Sneakers",
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
      <LuxuryProducts />
      <div className={styles.mobile_blog}>
        <SectionHeader>Shose</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryShoseList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
        {/* 
        <section>
          <SectionHeader>Latest Phones</SectionHeader>
        </section>

        <section>
          <SectionHeader>Populer Phones</SectionHeader>
        </section> */}

      </div>
    </main>
  );
}
