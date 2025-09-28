import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePost from '@/components/PhonePost';
import SectionHeader from '@/components/SectionHeader';
import { AllGooglePhonesList } from '@/PhoneData/GooglePhonesList';

// export function generateMetadata() {

//   const siteUrl = "https://www.skilluplines.com";
//   const fullUrl = `${siteUrl}/Gadgets`;
//   const title = "Phone Accessories & gadgets with Specificatio. Buy in india, USA, Canada | SkillUpLines"
//   const description = "Buy All Brand gadgets with Full Specifications Online at Best Prices on Amazon. Shop Top Headphones, bluetooth Speakers, wirless headphones , Cameras, Smart Watches & Accessories in India, USA, Canada, Germany & UK. Fast Delivery & Great Deals.";

//   const keywords = [
//     "Boat",
//     "JBL",
//     "Apple",
//     "Samsung",
//     "OnePlus",
//     "Sony",
//     "Oppo",
//     "Zebronics",
//     "Portonics",
//     "Soundcore",
//     "Goboult",
//     "Noise",
//     "Goboult",
//     "Goboult",
//     "Mivi",
//     "Amazon basis",
//     "Realme",
//     "Latest gadgets",
//     "Latest headphones",
//     "latest earphones",
//     "latest Bluetooth headphones",
//     "Latest airdrops",
//     "latest Bluetooth Speakers",
//     "Latest Phones",
//     "Latest headphones Specification",
//     "Latest 2025 headphones ",
//     "charger",
//     "earphone",
//     "information",
//     "info",
//     "specs",
//     "specification",
//     "Latest Smart Phones",
//   ]

//   return {
//     title,
//     description,
//     keywords,
//     metadataBase: new URL(siteUrl),
//     alternates: {
//       canonical: fullUrl,
//     },
//     authors: [{ name: "SkillUpLines Team", url: `${siteUrl}/about` }],
//     creator: "SkillUpLines Team",
//     publisher: "SkillUpLines",
//     category: "Latest headphones, amazon price, mobile phone Accessories & Parts Full Specification, earphones Details, speaker Price, phone Accessories Full Details, headphones detailed Description",
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-snippet": -1,
//         "max-image-preview": "large",
//         "max-video-preview": -1,
//       },
//     },
//     icons: {
//       icon: "/favicon.ico",
//     },
//     openGraph: {
//       type: "article",
//       title,
//       description,
//       url: fullUrl,
//       siteName: "SkillUpLines",
//       // images: [
//       //   {
//       //     url: imageUrl,
//       //     width: 1200,
//       //     height: 630,
//       //     alt: title,
//       //   },
//       // ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       // images: [imageUrl],
//       creator: "@SkillUpLines",
//     }
//   };
// }

export default function Page() {

  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <SectionHeader>Google</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllGooglePhonesList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}

        </section>

      </div>
    </main>
  );
}
