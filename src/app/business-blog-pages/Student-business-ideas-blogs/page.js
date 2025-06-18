import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import YsenseBlogCard from '../../../components/YsenseBlogCard';
import { StudentBusinessIdeasBlogsList, StudentBusinessIdeasPage } from '../../../../Data/StudentBusinessIdeasBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';
import SideJobIdea from '@/components/SideJobIdea';

export async function generateMetadata() {
   const blog = StudentBusinessIdeasPage

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
   const fullUrl = `${siteUrl}/business-blog/ySense`;
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
      category: "Business, Small Business, Business Blog",
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
         <h1 className={styles.title}>{StudentBusinessIdeasPage.title}</h1>
         {StudentBusinessIdeasPage.introduction.map((para, index) => (
            <p key={index} className={styles.table_content_list}>
               {para.paragraph}
            </p>
         ))}

         <p className={styles.headning_red_line}>
          {StudentBusinessIdeasPage.topicintroline}
        </p>
         <SectionHeader >Student Business Ideas</SectionHeader>
         <YsenseBlogCard />
         {StudentBusinessIdeasBlogsList.map((blog, index) => (
            <BusinessBlogCard key={index} businessBlog={blog} />
         ))}
      </main>
   )
}

export default page
