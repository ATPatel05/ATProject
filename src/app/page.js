import BusinessBlogCard from "@/components/BusinessBlogCard";
import SideJobIdea from '@/components/SideJobIdea'
import { TopBusinessIdeasBlogsList, BestBusinessPage } from "../blogData/TopBusinessIdeasBlogsList";
import YsenseBlogCard from '@/components/YsenseBlogCard'
import styles from './page.module.css';
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <>
      <main className={styles.container}>
        <SideJobIdea />
        <h1 className={styles.title}>{BestBusinessPage.title}</h1>
        <p className={styles.headning_red_line}>
          {BestBusinessPage.topicintroline}
        </p>
        <h2 className={styles.guide_list_heading}>{BestBusinessPage.guideHeadingLine}</h2>
        <ul className={styles.table_box} >
          {BestBusinessPage.ultimateGuideList.map((para, index) => (
            <li key={index} className={styles.table_content_list}>
              {para.guide}
            </li>
          ))}
        </ul>
        <SectionHeader >Best Business Ideas</SectionHeader>
        <YsenseBlogCard />
        {TopBusinessIdeasBlogsList.map((blog, index) => (
          <article key={index}>
            <BusinessBlogCard businessBlog={blog} />
          </article>
        ))}
      </main>
    </>
  );
}