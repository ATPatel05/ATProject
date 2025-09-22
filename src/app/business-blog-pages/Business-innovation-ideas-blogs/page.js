import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import { InnovativeIdeasBlogsList, InnovativeIdeasPage } from '@/blogData/InnovativeIdeasBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';

export async function generateMetadata() {
   const blog = InnovativeIdeasPage

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
      keywords
   } = blog;

   const siteUrl = "https://www.skilluplines.com";
   const fullUrl = `${siteUrl}/business-blog-pages/Business-innovation-ideas-blogs`;
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

const page = () => {
   return (
      <main className={styles.container}>
         
      </main>
   )
}

export default page