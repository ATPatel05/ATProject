import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryNacklaceList } from '@/LuxuryItemsData/LuxuryNacklaceList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Necklaces, Designer Jewelry & Premium Accessories Online at best price in india  - SkillUpLines"
  const description = "Explore the finest collection of luxury necklaces and designer jewelry. Buy Best premium gold, silver, and fashion necklaces online for men and women, perfect for any occasion.";
  const keywords = [
    "Luxury necklaces",
    "Designer necklaces",
    "Premium necklaces",
    "Luxury jewelry",
    "High-end necklaces",
    "Luxury gold necklaces",
    "Luxury silver necklaces",
    "Luxury fashion necklaces",
    "Luxury pendant necklaces",
    "Luxury necklaces online",
    "Designer jewelry online",
    "Exclusive necklaces collection",
    "Luxury necklaces for women",
    "Luxury necklaces for men",
    "Luxury chains",
    "Luxury necklaces price",
    "Luxury jewelry store",
    "Luxury accessories online",
    "Luxury necklace brands",
    "Best luxury necklaces 2025"
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
    category: "Luxury Necklaces, Designer Jewelry & Premium Accessories",
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
        <SectionHeader>Nacklace</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryNacklaceList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>

        {/* <section>
          <SectionHeader>Latest Phones</SectionHeader>
        </section>

        <section>
          <SectionHeader>Populer Phones</SectionHeader>
        </section> */}

      </div>
    </main>
  );
}
