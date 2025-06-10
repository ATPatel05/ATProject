import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import { MarketingStrategiesBlogsList, MarketingStrategyPage } from '../../../../Data/MarketingStrategiesBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';

const page = () => {
   return (
      <main className={styles.container}>
         <h1 className={styles.title}>{MarketingStrategyPage.title}</h1>
         {MarketingStrategyPage.introduction.map((para, index) => (
            <p key={index} className={styles.table_content_list}>
               {para.paragraph}
            </p>
         ))}
         <p className={styles.headning_red_line}>
            {MarketingStrategyPage.topicintroline}
         </p>
         <SectionHeader >Marketing Strategies</SectionHeader>
         {MarketingStrategiesBlogsList.map((blog, index) => (
            <BusinessBlogCard key={index} businessBlog={blog} />
         ))}
      </main>
   )
}

export default page
