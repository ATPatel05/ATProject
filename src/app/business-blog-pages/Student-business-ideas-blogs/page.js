import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import YsenseBlogCard from '../../../components/YsenseBlogCard';
import { StudentBusinessIdeasBlogsList, StudentBusinessIdeasPage } from '../../../../Data/StudentBusinessIdeasBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';

const page = () => {
   return (
      <main className={styles.container}>
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
