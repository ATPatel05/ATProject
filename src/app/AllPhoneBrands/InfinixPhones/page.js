import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import SectionHeader from '@/components/SectionHeader';

// export async function generateMetadata({ params }) {
//    const resolvedParams = await params;
//    const slug = resolvedParams.slug;
//    const blog = TopBusinessIdeasBlogsList.find(item => item.slug === slug);

//    if (!blog) {
//       return {
//          title: "Not Found | SkillUpLines",
//          description: "This blog post does not exist on SkillUpLines.",
//       };
//    }

//    const {
//       title,
//       description,
//       image,
//       date,
//       keywords
//    } = blog;

//    const siteUrl = "https://www.skilluplines.com";
//    const fullUrl = `${siteUrl}/business-blog/ideas/${slug}`;
//    const imageUrl = `${siteUrl}${image}`;

//    return {
//       title,
//       description,
//       keywords,
//       metadataBase: new URL(siteUrl),
//       alternates: {
//          canonical: fullUrl,
//       },
//       authors: [{ name: "SkillUpLines Team", url: `${siteUrl}/about` }],
//       creator: "SkillUpLines Team",
//       publisher: "SkillUpLines",
//       category: "Business Ideas, Startup Ideas, Small Business Ideas, Business for Beginners, Online Business, Entrepreneurship",
//       robots: {
//          index: true,
//          follow: true,
//          googleBot: {
//             index: true,
//             follow: true,
//             "max-snippet": -1,
//             "max-image-preview": "large",
//             "max-video-preview": -1,
//          },
//       },
//       icons: {
//          icon: "/favicon.ico",
//       },
//       openGraph: {
//          type: "article",
//          title,
//          description,
//          url: fullUrl,
//          siteName: "SkillUpLines",
//          publishedTime: new Date(date).toISOString(),
//          images: [
//             {
//                url: imageUrl,
//                width: 1200,
//                height: 630,
//                alt: title,
//             },
//          ],
//       },
//       twitter: {
//          card: "summary_large_image",
//          title,
//          description,
//          images: [imageUrl],
//          creator: "@SkillUpLines",
//       }
//    };
// }


export default function Page() {

  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <SectionHeader>Infinix Phones</SectionHeader>
        <div className={styles.maintainence}>
          <p className={styles.message}>Site is in Maintenance</p>
          <p className={styles.message}>All items will be available in short time</p>
        </div>
      </div>
    </main>
  );
}