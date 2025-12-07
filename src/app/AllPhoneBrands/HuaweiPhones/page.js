import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePost from '@/components/PhonePost';
import SectionHeader from '@/components/SectionHeader';
import { AllHuaweiPhonesList } from '@/PhoneData/HuaweiPhonesList';

export function generateMetadata() {

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/HonorPhones`;
  const title = "All Honor Phones with full Specifications | Buy Online at Best price in India, USA & Canada - SkillUpLines"
  const description = "All Google Phones with full Specifications Online at Best Prices on Amazon. Buy Best Headphones, bluetooth Speakers, wirless headphones, Smart Watches & Accessories of Google Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Honor",
    "Honor Phones",
    "Latest Honor Phones 2025",
    "All Honor Models",
    "Honor Devices",
    "Honor Mobile Specifications",
    "Latest Honor Gadgets"
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
    category: "Honor Phones, Gadgets & Accessories with specifications",
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
        <SectionHeader>Huawei</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllHuaweiPhonesList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
