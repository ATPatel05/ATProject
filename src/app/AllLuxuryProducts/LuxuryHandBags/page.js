import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryHandBagList } from '@/LuxuryItemsData/LuxuryHandBagList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Handbags, Designer Bags & Premium Accessories Online at best price in india - SkillUpLines"
  const description = "Explore the finest collection of luxury handbags and designer bags. Buy Best premium leather, tote, clutch, and crossbody handbags online for men and women, perfect for any occasion.";
  const keywords = [
    "Luxury handbags",
    "Designer handbags",
    "Premium handbags",
    "Luxury leather handbags",
    "High-end handbags",
    "Luxury tote bags",
    "Luxury clutch bags",
    "Luxury crossbody bags",
    "Luxury handbags online",
    "Designer handbags online",
    "Luxury bag brands",
    "Luxury purse collection",
    "Luxury fashion handbags",
    "Exclusive luxury handbags",
    "Luxury handbags for women",
    "Luxury handbags for men",
    "Luxury backpack handbags",
    "Luxury handbag price",
    "Luxury handbag sale",
    "Luxury handbag latest collection"
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
    category: "Luxury Handbags, Designer Bags & Premium Accessories",
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
        <SectionHeader>Hand Bag</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryHandBagList.map((phone, index) => (
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
