import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryGogglesList } from '@/LuxuryItemsData/LuxuryGogglesList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Luxury Goggles, Designer Eyewear & Premium Sunglasses Online - SkillUpLines"
  const description = "Discover the finest collection of luxury goggles and designer sunglasses. Shop premium eyewear online for men and women, offering style, protection, and elegance.";
  const keywords = [
    "Luxury goggles",
    "Designer goggles",
    "Premium goggles",
    "Luxury sunglasses",
    "Designer eyewear",
    "High-end goggles",
    "Luxury fashion eyewear",
    "Luxury protective goggles",
    "Luxury sports goggles",
    "Luxury goggles for men",
    "Luxury goggles for women",
    "Luxury goggles online",
    "Exclusive goggles collection",
    "Luxury goggles price",
    "Luxury eyewear store",
    "Luxury UV protection sunglasses",
    "Premium eyewear accessories",
    "Luxury goggles brands",
    "Best luxury goggles 2025",
    "Luxury eyewear collection"
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
    category: "Luxury Goggles, Designer Eyewear & Premium Sunglasses",
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
        <SectionHeader>Goggle</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllLuxuryGogglesList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
