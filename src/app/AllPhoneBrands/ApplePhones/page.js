import { AllApplePhonesList } from '@/PhoneData//ApplePhonesList';
import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';

export function generateMetadata() {

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/ApplePhones`;
  const title = "Apple Phones Full Specifications | Buy in India, USA & Canada - SkillUpLines"
  const description = "Appple Phones Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones, Smart Watches & Accessories of Apple Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Apple",
    "Apple Phones",
    "Apple iPhone Models",
    "Latest Apple Phones 2025",
    "Apple iPhone 17",
    "Apple iPhone 17 Pro",
    "Apple iPhone 16",
    "Apple iPhone 16 Pro Max",
    "All iPhone Models",
    "Apple Smartphones",
    "Apple Devices",
    "Apple Mobile Specifications",
    "Latest Apple Gadgets"
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
    category: "Apple Phones, Gadgets & Accessories with specifications",
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
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <SectionHeader>Apple</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllApplePhonesList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
