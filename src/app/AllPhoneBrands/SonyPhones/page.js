import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePost from '@/components/PhonePost';
import SectionHeader from '@/components/SectionHeader';
import { AllSonyPhonesList } from '@/PhoneData/SonyPhonesLists';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/SonyPhones`;
  const title = "All Sony Phones with full Specifications | Buy Online at Best price in India, USA & Canada - SkillUpLines"
  const description = "All Sony Phones with full Specifications Online at Best Prices. Shop Top Headphones, bluetooth Speakers, wirless headphones & Accessories of Sony Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Sony",
    "Sony Phones",
    "Latest Sony Phones 2025",
    "All Sony Models",
    "Sony Devices",
    "Sony Mobile Specifications",
    "Latest Sony Gadgets"
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
    category: "Sony Phones, Gadgets & Accessories with specifications",
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
        <SectionHeader>Sony</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllSonyPhonesList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}

        </section>
      </div>
    </main>
  );
}