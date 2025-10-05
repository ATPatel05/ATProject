import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryWatchList } from '@/LuxuryItemsData/LuxuryWatchList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Watches | Designer Watches & Premium Timepieces Online - SkillUpLines"
  const description = "Discover the finest collection of luxury watches and designer timepieces. Shop premium wristwatches online for men and women, including smart, mechanical, and fashion watches.";
  const keywords = [
    "Luxury watches",
    "Designer watches",
    "Premium watches",
    "Luxury wristwatches",
    "High-end watches",
    "Luxury watches for men",
    "Luxury watches for women",
    "Luxury watch brands",
    "Luxury watch online",
    "Exclusive luxury watches",
    "Luxury smartwatches",
    "Luxury mechanical watches",
    "Luxury watch collection",
    "Luxury watch price",
    "Luxury watch sale",
    "Premium timepieces",
    "Luxury fashion watches",
    "Luxury sports watches",
    "Best luxury watches 2025",
    "Luxury watch store"
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
    category: "Luxury Watches, Designer Watches & Premium Timepieces",
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
        <SectionHeader>Watch</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryWatchList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
