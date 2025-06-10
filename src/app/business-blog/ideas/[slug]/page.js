import { TopBusinessIdeasBlogsList } from '../../../../../Data/TopBusinessIdeasBlogsList';
import styles from './page.module.css';

export default async function Page({ params }) {

   const resolvedParams = await params;
   const slug = resolvedParams.slug;
   const blog = TopBusinessIdeasBlogsList.find(item => item.slug === slug);

   return (
      <main className={styles.container}>
         <h1 className={styles.title}>{blog.title}</h1>
         <p className={styles.date}>{blog.date}</p>
         <img src={blog.image} alt="Ysense_play" className={styles.images} />
         
         <h2 className={styles.sub_heading}>Table of Content</h2>
         {blog.blogContent.map((section, index) => (
            <p className={styles.table_content_list}>{index + 1}{". "}{section.topicHeading}</p>
         ))}

         {blog.blogContent.map((section, index) => (
            <section key={index} style={{ marginBottom: '2rem' }}>
               <h2  key={index} className={styles.sub_heading}>{index + 1}{". "}{section.topicHeading}</h2>
               {section.paragraphs.map((p, idx) => (
                  <p key={idx} className={styles.stepText}>{p.line}</p>
               ))}
            </section>
         ))}
      </main>
   );
}
