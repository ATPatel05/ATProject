import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import { ManagementStrategiesBlogsList ,ManagementStrategiesPage } from '../../../../Data/ManagementStrategiesBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';

const page = () => {
   return (
      <main className={styles.container}>
         <h1 className={styles.title}>{ManagementStrategiesPage.title}</h1>
         {ManagementStrategiesPage.introduction.map((para, index) => (
            <p key={index} className={styles.table_content_list}>
               {para.paragraph}
            </p>
         ))}
         <p className={styles.headning_red_line}>
          {ManagementStrategiesPage.topicintroline}
        </p>
         <SectionHeader >Management Strategies</SectionHeader>
         {ManagementStrategiesBlogsList.map((blog, index) => (
            <BusinessBlogCard key={index} businessBlog={blog} />
         ))}
      </main>
   )
}

export default page