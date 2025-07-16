import React from 'react'
import styles from './BusinessBlogContentPost.module.css';

const BusinessBlogContentPost = ({ blog }) => {
   return (
      <article>
         <h1 className={styles.title}>{blog.title}</h1>
         <p className={styles.date}>{blog.date}</p>
         <img src={blog.image} alt={blog.title} className={styles.images} />
         <h2 className={styles.sub_heading}>Table of Content</h2>
         <ol>
            {blog.blogContent.map((section, index) => (
               <li key={index} className={styles.table_content_list}>
                  {index + 1}. {section.topicHeading}
               </li>
            ))}
         </ol>
         <p className={styles.disclaimerMessage}>{blog.disclaimerMessage}</p>
         {blog.blogContent.map((section, index) => (
            <section key={index} style={{ marginBottom: '2rem' }}>
               <h2 className={styles.sub_heading}>{index + 1}{". "}{section.topicHeading}</h2>
               {section.paragraphs.map((p, idx) => (
                  <p key={idx} className={styles.stepText}>{p.line}</p>
               ))}
            </section>
         ))}
      </article>
   )
}

export default BusinessBlogContentPost