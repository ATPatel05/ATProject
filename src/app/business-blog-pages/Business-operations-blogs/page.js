import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import { BuisnessOperationBlogsList, OperationPage } from '@/blogData/OperationsIdeasBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import SideJobIdea from '@/components/SideJobIdea';

export async function generateMetadata() {
   const blog = OperationPage

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
   const fullUrl = `${siteUrl}/business-blog-pages/Business-operations-blogs`;
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
      category: "Business Operations, Business Routines, Operational Efficiency, Process Management, Business Systems, Daily Business Activities",
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
         <SideJobIdea />
         <h1 className={styles.title}>{OperationPage.title}</h1>
         <p className={styles.headning_red_line}>
            {OperationPage.topicintroline}
         </p>
         <h2 className={styles.guide_list_heading}>{OperationPage.guideHeadingLine}</h2>
         <ul className={styles.table_box} >
            {OperationPage.ultimateGuideList.map((para, index) => (
               <li key={index} className={styles.table_content_list}>
                  {para.guide}
               </li>
            ))}
         </ul>
         <SectionHeader >Operations & Routines</SectionHeader>
         {BuisnessOperationBlogsList.map((blog, index) => (
            <BusinessBlogCard key={index} businessBlog={blog} />
         ))}
      </main>
   )
}

export default page
