import React from 'react'
import BusinessBlogCard from '../../../components/BusinessBlogCard';
import { InnovativeIdeasBlogsList, InnovativeIdeasPage } from '../../../../Data/InnovativeIdeasBlogsList';
import styles from './page.module.css';
import SectionHeader from '@/components/SectionHeader';

const page = () => {
   return (
      <main className={styles.container}>

         <h1 className={styles.title}>{InnovativeIdeasPage.title}</h1>
         {InnovativeIdeasPage.introduction.map((para, index) => (
            <p key={index} className={styles.table_content_list}>
               {para.paragraph}
            </p>
         ))}

         <SectionHeader >Innovative Blog</SectionHeader>
         {InnovativeIdeasBlogsList.map((blog, index) => (
            <BusinessBlogCard key={index} businessBlog={blog} />
         ))}
      </main>
   )
}

export default page
