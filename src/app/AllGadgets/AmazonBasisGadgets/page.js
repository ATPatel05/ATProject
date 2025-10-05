import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllAmazonBasisGadgetsList } from '@/GadgetData/AllAmazonBasisGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/AmazonBasisGadgets`;
  const title = "Amazon Basis Accessories & gadgets with Specification. Buy in india, USA, Canada | SkillUpLines"
  const description = "Amazon Basis gadgets with Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones & Accessories of Amazon Basis Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Amazon Basics accessories",
    "Amazon Basics gadgets",
    "Amazon Basics devices",
    "Amazon Basics phone accessories",
    "Amazon Basics chargers",
    "Amazon Basics cables",
    "Amazon Basics adapters",
    "Amazon Basics headphones",
    "Amazon Basics earphones",
    "Amazon Basics speakers",
    "Amazon Basics smart devices",
    "Amazon Basics power banks",
    "Amazon Basics watches accessories",
    "Amazon Basics mobile accessories",
    "Best Amazon Basics accessories 2025",
    "Amazon Basics accessories price in India",
    "Amazon Basics accessories specifications",
    "Buy Amazon Basics gadgets online",
    "Latest Amazon Basics accessories collection",
    "Original Amazon Basics accessories",
    "Amazon Basics accessories store",
    "Amazon Basics smart gadgets",
    "Amazon Basics audio devices",
    "Amazon Basics cases and covers",
    "Amazon Basics gaming accessories",
    "Amazon Basics Bluetooth devices",
    "Amazon Basics official accessories",
    "Amazon Basics electronics accessories"
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
    category: "Amazon Basis Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Amazon Basis</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllAmazonBasisGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}