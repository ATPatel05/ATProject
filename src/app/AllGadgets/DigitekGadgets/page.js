import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllDigitekGadgetsList } from '@/GadgetData/AllDigitekGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/DigitekGadgets`;
  const title = "Digitek Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Digitek Accessories with Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones & Accessories of Digitek Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Digitek accessories",
    "Digitek gadgets",
    "Digitek devices",
    "Digitek phone accessories",
    "Digitek headphones",
    "Digitek earphones",
    "Digitek chargers",
    "Digitek power banks",
    "Digitek cables",
    "Digitek adapters",
    "Digitek speakers",
    "Digitek smart devices",
    "Digitek watches accessories",
    "Digitek mobile accessories",
    "Best Digitek accessories 2025",
    "Digitek accessories price in India",
    "Digitek accessories specifications",
    "Buy Digitek gadgets online",
    "Latest Digitek accessories collection",
    "Original Digitek accessories",
    "Digitek accessories store",
    "Digitek Bluetooth devices",
    "Digitek smart gadgets",
    "Digitek audio devices",
    "Digitek cases and covers",
    "Digitek gaming accessories",
    "Digitek official accessories",
    "Digitek wireless headphones",
    "Digitek TWS earbuds",
    "Digitek portable speakers"
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
    category: "Digitek Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>Digitek</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllDigitekGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}
