import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryMakeUpKitList } from '@/LuxuryItemsData/LuxuryMakeUpKitList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Makeup Kits, Designer Cosmetics & Premium Beauty Products Online - SkillUpLines"
  const description = "Discover the finest collection of luxury makeup kits and designer cosmetics. Shop premium beauty products online for women, including makeup sets, kits, and essentials for any occasion.";
  const keywords = [
    "Luxury makeup kit",
    "Designer makeup kit",
    "Premium makeup kit",
    "Luxury cosmetics",
    "High-end makeup kit",
    "Luxury beauty products",
    "Luxury makeup kit for women",
    "Luxury makeup set",
    "Luxury makeup collection",
    "Luxury makeup kit online",
    "Designer cosmetics online",
    "Exclusive luxury makeup kit",
    "Luxury makeup brands",
    "Luxury makeup kit price",
    "Luxury cosmetic set",
    "Premium beauty kit",
    "Luxury makeup accessories",
    "Best luxury makeup kit 2025",
    "Luxury makeup kit sale",
    "Luxury makeup essentials"
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
    category: "Luxury Makeup Kits, Designer Cosmetics & Premium Beauty Products",
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
        <SectionHeader>MakeUp Kit</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryMakeUpKitList.map((phone, index) => (
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

