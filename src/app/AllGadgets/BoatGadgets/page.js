import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import PhonePost from '@/components/PhonePost';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllBoATGadgetsList } from '@/GadgetData/AllBoATGadgetsList';

export function generateMetadata() {
  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/AllPhoneBrands/BoatGadgets`;
  const title = "BoAT Accessories & gadgets with Specification. Buy in india, USA, Canada | SkillUpLines"
  const description = "BoAT Accessories with Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones & Accessories of BoAT Brand in India, USA, Canada, Germany & UK.";
  const keywords = [
    "BoAT accessories",
    "BoAT gadgets",
    "BoAT devices",
    "BoAT headphones",
    "BoAT earphones",
    "BoAT chargers",
    "BoAT power banks",
    "BoAT cables",
    "BoAT adapters",
    "BoAT speakers",
    "BoAT smart devices",
    "BoAT watches accessories",
    "BoAT mobile accessories",
    "Best BoAT accessories 2025",
    "BoAT accessories price in India",
    "BoAT accessories specifications",
    "Buy BoAT gadgets online",
    "Latest BoAT accessories collection",
    "Original BoAT accessories",
    "BoAT accessories store",
    "BoAT phone parts and accessories",
    "BoAT Bluetooth devices",
    "BoAT smart gadgets",
    "BoAT audio devices",
    "BoAT cases and covers",
    "BoAT gaming accessories",
    "BoAT official accessories",
    "BoAT wireless headphones",
    "BoAT TWS earbuds",
    "BoAT portable speakers"
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
    category: "BoAT Accessories, Gadgets & Devices full specifications",
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
        <SectionHeader>BoAT</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllBoATGadgetsList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}
        </section>
      </div>
    </main>
  );
}




// export default async function Page({ params }) {
{/* 
        <section>
          <SectionHeader>Latest Phones</SectionHeader>
        </section>

        <section>
          <SectionHeader>Populer Phones</SectionHeader>
        </section> */}
//    const resolvedParams = await params;
//    const slug = resolvedParams.slug;
//    const blog = TopBusinessIdeasBlogsList.find(item => item.slug === slug);

//    return (
//       <main className={styles.container}>
//          <BusinessBlogContentPost blog={blog} />
//       </main>
//    );
// }
