import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryBreslateList } from '@/LuxuryItemsData/LuxuryBreslateList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Bracelets | Designer & Premium Jewelry Online at best price in india - SkillUpLines"
  const description = "Discover the finest collection of luxury bracelets and designer jewelry. Buy Best premium gold, silver, and fashion bracelets online for men and women, perfect for any occasion.";
  const keywords = [
    "Luxury bracelets",
    "Designer bracelets",
    "Premium bracelets",
    "Luxury jewelry",
    "Luxury gold bracelets",
    "Luxury silver bracelets",
    "Luxury fashion bracelets",
    "Luxury wristwear",
    "High-end bracelets",
    "Luxury bracelets online",
    "Designer jewelry online",
    "Exclusive bracelets collection",
    "Luxury bracelets for women",
    "Luxury bracelets for men",
    "Luxury bangle bracelets",
    "Luxury charm bracelets",
    "Luxury cuff bracelets",
    "Luxury jewelry store",
    "Luxury accessories online",
    "Luxury bracelet price"
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
    category: "Luxury Bracelets, Designer Bracelets & Premium Jewelry",
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
        <SectionHeader>Bracelet</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryBreslateList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}