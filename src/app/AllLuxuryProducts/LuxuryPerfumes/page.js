import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryPerfumeList } from '@/LuxuryItemsData/LuxuryPerfumeList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Perfumes, Designer Fragrances & Premium Scents Online at best price in india  - SkillUpLines"
  const description = "Discover the finest collection of luxury perfumes and designer fragrances. Buy Best premium scents online for men and women, perfect for gifting or personal use.";
  const keywords = [
    "Luxury perfume",
    "Designer perfume",
    "Premium perfume",
    "Luxury fragrance",
    "High-end perfume",
    "Luxury cologne",
    "Luxury perfume for women",
    "Luxury perfume for men",
    "Luxury scented perfumes",
    "Luxury perfume online",
    "Designer fragrances online",
    "Exclusive luxury perfumes",
    "Luxury perfume brands",
    "Luxury perfume price",
    "Luxury perfume collection",
    "Premium scented perfumes",
    "Luxury gift perfumes",
    "Luxury perfume set",
    "Best luxury perfumes 2025",
    "Luxury perfume store"
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
    category: "Luxury Perfumes, Designer Fragrances & Premium Scents",
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
        <SectionHeader>Perfume</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryPerfumeList.map((phone, index) => (
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

