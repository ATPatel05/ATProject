import BusinessBlogCard from "@/components/BusinessBlogCard";
import { TopBusinessIdeasBlogsList, BestBusinessPage } from "../../Data/TopBusinessIdeasBlogsList";
import YsenseBlogCard from '@/components/YsenseBlogCard'
import styles from './page.module.css';
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>{BestBusinessPage.title}</h1>
        {BestBusinessPage.introduction.map((para, index) => (
          <p key={index} className={styles.table_content_list}>
            {para.paragraph}
          </p>
        ))}
        <p className={styles.headning_red_line}>
          {BestBusinessPage.topicintroline}
        </p>
        <SectionHeader >Business Ideas</SectionHeader>
        <YsenseBlogCard />
        {TopBusinessIdeasBlogsList.map((blog, index) => (
          <BusinessBlogCard key={index} businessBlog={blog} />
        ))}
      </main>
    </>
  );
}