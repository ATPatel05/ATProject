import styles from './SideJobIdea.module.css';

export default function Breaking() {
   return (
      <>
         <div className={styles.breaking_news_head_title}>
            <div className={styles.breaking_head}>
               Side Business
            </div>
            <marquee className={styles.breaking_title}>
               ySense is best idea for side income
            </marquee>
         </div>
      </>
   );
}