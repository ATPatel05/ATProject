import Link from 'next/link';
import styles from './YsenseBlogCard.module.css';

export default function page() {
   return (
      <>
         <div className={styles.small_card}>
            <div className={styles.image_wrapper}>
               <Link href='/business-blog/ySense' className={styles.card_link}>
                  <img src='/AT.png' alt='' className={styles.card_image} />
               </Link>
            </div>
            <div className={styles.card_content}>
               <Link href='/business-blog/ySense' className={styles.card_link}>
                  <h3 className={styles.card_title}>How to Make Money Online Without Investment Using ySense Idea for Students</h3>
               </Link>
               <div className={styles.card_country_date}>
                  <div className={styles.subheading}>
                     Breaking
                  </div>
                  <span className={styles.card_date}>4 june, 2025</span>
               </div>
            </div>
         </div>
      </>
   );
}