import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import { ManagementStrategiesBlogsList, ManagementStrategiesPage } from '@/blogData/ManagementStrategiesBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';

export async function generateMetadata() {
   const blog = ManagementStrategiesPage

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
   const fullUrl = `${siteUrl}/business-blog-pages/Business-management-strategies-blogs`;
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
      category: "Business Management, Leadership, Team Management, Strategic Planning, Organizational Development, Business Planning",
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
         <h1 className={styles.title}>{ManagementStrategiesPage.title}</h1>
         <p className={styles.headning_red_line}>
            {ManagementStrategiesPage.topicintroline}
         </p>
         <h2 className={styles.guide_list_heading}>{ManagementStrategiesPage.guideHeadingLine}</h2>
         <ul className={styles.table_box} >
            {ManagementStrategiesPage.ultimateGuideList.map((para, index) => (
               <li key={index} className={styles.table_content_list}>
                  {para.guide}
               </li>
            ))}
         </ul>
         <SectionHeader >Management Strategies</SectionHeader>
         {ManagementStrategiesBlogsList.map((blog, index) => (
            <BusinessBlogCard key={index} businessBlog={blog} />
         ))}
      </main>
   )
}

export default page