import BusinessBlogContentPost from '@/components/PhonePriceSpecification';
import { InnovativeIdeasBlogsList } from '@/blogData/InnovativeIdeasBlogsList';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
   const resolvedParams = await params;
   const slug = resolvedParams.slug;
   const blog = InnovativeIdeasBlogsList.find(item => item.slug === slug);

   if (!blog) {
      return {
         title: "Not Found | SkillUpLines",
         description: "This blog post does not exist on SkillUpLines.",
      };
   }

   const {
      title,
      description,
      image,
      date,
      keywords
   } = blog;

   const siteUrl = "https://www.skilluplines.com";
   const fullUrl = `${siteUrl}/business-blog/innovation/${slug}`;
   const imageUrl = `${siteUrl}${image}`;

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
      category: "Innovation, Business Innovation, Startup Innovation, Product Innovation, Creative Business Ideas, Future Business Trends",
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
         publishedTime: new Date(date).toISOString(),
         images: [
            {
               url: imageUrl,
               width: 1200,
               height: 630,
               alt: title,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images: [imageUrl],
         creator: "@SkillUpLines",
      }
   };
}

export default async function Page({ params }) {

   const resolvedParams = await params;
   const slug = resolvedParams.slug;
   const blog = InnovativeIdeasBlogsList.find(item => item.slug === slug);

   return (
      <main className={styles.container}>
         <BusinessBlogContentPost blog={blog} />
      </main>
   );
}

