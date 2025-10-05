import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePost from '@/components/PhonePost';
import SectionHeader from '@/components/SectionHeader';
import { AllOnePlusPhonesList } from '@/PhoneData/OnePlusPhonesList';

export function generateMetadata() {

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/OnePlusPhones`;
  const title = "OnePlus Phones Full Specifications | Buy in India, USA & Canada - SkillUpLines"
  const description = "OnePlus Phones Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones & Accessories of OnePlus Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "OnePlus",
    "OnePlus Phones",
    "Latest OnePlus Phones 2025",
    "All OnePlus Models",
    "OnePlus Devices",
    "OnePlus Mobile Specifications",
    "Latest OnePlus Gadgets"
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
    category: "OnePlus Phones, Gadgets & Accessories with specifications",
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
        <SectionHeader>OnePlus</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllOnePlusPhonesList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}

        </section>

      </div>
    </main>
  );
}