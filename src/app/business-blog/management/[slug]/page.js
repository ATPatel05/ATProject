import { ManagementStrategiesBlogsList } from '../../../../../Data/ManagementStrategiesBlogsList';
import styles from './page.module.css';


export async function generateMetadata({ params }) {
   const resolvedParams = await params;
   const slug = resolvedParams.slug;
   const blog = ManagementStrategiesBlogsList.find(item => item.slug === slug);

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
      date,
      keywords,
      disclaimerMessage,
      chipName,
   } = blog;

   const siteUrl = "https://www.skilluplines.com";
   const fullUrl = `${siteUrl}/business-blog/management/${slug}`;
   console.log("full Url : ", fullUrl);
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
      category: "Business, Entrepreneurship, Marketing",
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
         publishedTime: new Date(date).toISOString(),
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
      },
      other: {
         disclaimer: disclaimerMessage,
         chip: chipName,
      },
   };
}

export default async function Page({ params }) {

   const resolvedParams = await params;
   const slug = resolvedParams.slug;
   const blog = ManagementStrategiesBlogsList.find(item => item.slug === slug);

   return (
      <main className={styles.container}>
         <h1 className={styles.title}>{blog.title}</h1>
         <p className={styles.date}>{blog.date}</p>
         <img src={blog.image} alt="Ysense_play" className={styles.images} />

         <h2 className={styles.sub_heading}>Table of Content</h2>
         {blog.blogContent.map((section, index) => (
            <p key={index} className={styles.table_content_list}>{index + 1}{". "}{section.topicHeading}</p>
         ))}

         {blog.blogContent.map((section, index) => (
            <section key={index} style={{ marginBottom: '2rem' }}>
               <h2 key={index} className={styles.sub_heading}>{index + 1}{". "}{section.topicHeading}</h2>
               {section.paragraphs.map((p, idx) => (
                  <p key={idx} className={styles.stepText}>{p.line}</p>
               ))}
            </section>
         ))}
      </main>
   );
}
