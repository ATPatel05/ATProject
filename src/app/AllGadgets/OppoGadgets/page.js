import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllOppoGadgetsList } from '@/GadgetData/AllOppoGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/OppoGadgets`;
  const title = "Oppo Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Oppo Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Oppo Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Oppo accessories",
    "Oppo gadgets",
    "Oppo devices",
    "Oppo phone accessories",
    "Oppo headphones",
    "Oppo earphones",
    "Oppo chargers",
    "Oppo power banks",
    "Oppo cables",
    "Oppo adapters",
    "Oppo speakers",
    "Oppo smart devices",
    "Oppo watches accessories",
    "Oppo mobile accessories",
    "Best Oppo accessories 2025",
    "Oppo accessories price in India",
    "Oppo accessories specifications",
    "Buy Oppo gadgets online",
    "Latest Oppo accessories collection",
    "Original Oppo accessories",
    "Oppo accessories store",
    "Oppo phone parts and accessories",
    "Oppo Bluetooth devices",
    "Oppo smart gadgets",
    "Oppo audio devices",
    "Oppo cases and covers",
    "Oppo gaming accessories",
    "Oppo official accessories",
    "Oppo wireless headphones",
    "Oppo TWS earbuds",
    "Oppo portable speakers",
    "Oppo soundbars",
    "Oppo car audio accessories"
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
    category: "Oppo Accessories, Gadgets & Devices full specifications",
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
      <GadgetsBrands />
      <div className={styles.mobile_blog}>
        <SectionHeader>Oppo</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllOppoGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}