import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryBagList } from '@/LuxuryItemsData/LuxuryBagList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Bags, Designer bags & Premium Accessories Online at best price in india - SkillUpLines"
  const description = "Explore the latest collection of luxury bags and designer handbags. Buy best premium, high-quality leather bags, clutches, totes, and crossbody bags online for men and women.";
  const keywords = [
    "Luxury bags",
    "Designer bags",
    "Premium handbags",
    "Luxury leather bags",
    "High-end handbags",
    "Luxury tote bags",
    "Luxury clutch bags",
    "Luxury crossbody bags",
    "Luxury handbags online",
    "Designer handbags online",
    "Luxury bag brands",
    "Luxury purse collection",
    "Luxury fashion bags",
    "Exclusive luxury bags",
    "Luxury bag for women",
    "Luxury bag for men",
    "Luxury backpack",
    "Luxury bag price",
    "Luxury bag sale",
    "Luxury bag latest collection"
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
    category: "Luxury Bags, Designer Bags & Premium Accessories",
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
        <SectionHeader>Bag</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryBagList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
