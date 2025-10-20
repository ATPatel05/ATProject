import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllSoundcoreGadgetsList } from '@/GadgetData/AllSoundcoreGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllGadgets/SoundcoreGadgets`;
  const title = "Soundcore Accessories & gadgets with Specification. Buy at best price in india, USA, Canada | SkillUpLines"
  const description = "Soundcore Accessories with Full Specifications Online at Best Prices. Buy best Headphones, bluetooth Speakers, wirless headphones & Accessories of Soundcore Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "Soundcore accessories",
    "Soundcore gadgets",
    "Soundcore devices",
    "Soundcore headphones",
    "Soundcore earphones",
    "Soundcore chargers",
    "Soundcore power banks",
    "Soundcore cables",
    "Soundcore adapters",
    "Soundcore speakers",
    "Soundcore smart devices",
    "Soundcore watches accessories",
    "Soundcore mobile accessories",
    "Best Soundcore accessories 2025",
    "Soundcore accessories price in India",
    "Soundcore accessories specifications",
    "Buy Soundcore gadgets online",
    "Latest Soundcore accessories collection",
    "Original Soundcore accessories",
    "Soundcore accessories store",
    "Soundcore Bluetooth devices",
    "Soundcore smart gadgets",
    "Soundcore audio devices",
    "Soundcore cases and covers",
    "Soundcore gaming accessories",
    "Soundcore official accessories",
    "Soundcore wireless headphones",
    "Soundcore TWS earbuds",
    "Soundcore portable speakers",
    "Soundcore soundbars",
    "Soundcore car audio accessories"
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
    category: "Soundcore Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>SoundCore</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllSoundcoreGadgetsList.map((phone, index) => (
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