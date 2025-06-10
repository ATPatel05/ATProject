import Link from 'next/link';
import styles from './BusinessBlogCard.module.css';

export default function BusinessBlogCard({ businessBlog }) {
  const postUrl = `/business-blog/${businessBlog.folderPath}/${businessBlog.slug}`;

  return (
    <div className={styles.small_card}>
      <div className={styles.image_wrapper}>
        <Link href={postUrl} className={styles.card_link}>
          <img src={businessBlog.image} alt={businessBlog.title} className={styles.card_image} />
        </Link>
      </div>
      <div className={styles.card_content}>
        <Link href={postUrl} className={styles.card_link}>
          <h3 className={styles.card_title}>{businessBlog.title}</h3>
        </Link>
        <div className={styles.card_country_date}>
          <div className={styles.subheading}>{businessBlog.chipName}</div>
          <span className={styles.card_date}>{businessBlog.date}</span>
        </div>
      </div>
    </div>
  );
}
