import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePost from '@/components/PhonePost';
import SectionHeader from '@/components/SectionHeader';
import { AllMotarolaPhonesList } from '@/PhoneData/MotarolaPhonesLists';

// export function generateMetadata() {

//   const siteUrl = "https://www.skilluplines.com";
//   const fullUrl = `${siteUrl}/LuxuryProducts`;
//   const title = "Luxury Products full Specification. Buy in india, USA, Canada, Germany | SkillUpLines"
//   const description = "Buy luxury items with Full Specifications Online at Best Prices on Amazon. Shop Top watch, Hand Bag, Breslate  Perfume, Shose, NeckLace, Goggles & MackUp Kit in India, USA, Canada, Germany & UK. Fast Delivery & Great Deals.";
//   const keywords = [
//     "Luxury Items",
//     "expensive products",
//     "expensive luxury",
//     "Luxury products",
//     "stylish watch",
//     "specification",
//     "luxury",
//     "best luxury product",
//     "expensive luxury items",
//     "expensive luxury product",
//     "luxury Hand Bag",
//     "luxury Breslate",
//     "best Perfume",
//     "best Shose",
//     "luxury NeckLace",
//     "Fancy Goggles",
//     "luxury MackUp Kit",
//     "luxury bag",
//     "luxury stylish bag",
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
//     category: "Luxury Items, expensive products, expensive luxury, stylish watch, Luxury products, expensive luxury items, expensive luxury product, luxury Hand Bag, luxury Breslate, best Perfume, best Shose, luxury NeckLace, Fancy Goggles, luxury MackUp Kit, luxury bag",
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
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       creator: "@SkillUpLines",
//     }
//   };
// }



export default function Page() {

  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <SectionHeader>Motarola</SectionHeader>
        <section className={styles.phone_review_section}>
          {AllMotarolaPhonesList.map((phone, index) => (
            <PhonePost key={index} phone={phone} />
          ))}

        </section>

      </div>
    </main>
  );
}