import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <div className={styles.img_detail}>
              <Link href="/" passHref>
                <img
                  className={styles.footer_image}
                  src="/Logo.jpg"
                  alt="SkillUpLines logo - Business Ideas, Management ,Marketing & Innovative Blog"
                />
              </Link>
              <p className={styles.web_content}>
                You have a skill to purchase best product online at best price product with ultimate guides of skilluplines.
              </p>
            </div>
          </div>
          <div className={styles.news_links}>
            <div className={styles.categories}>
              <Link href="/about" className={styles.categoryLink}>About Us</Link>
              {/* <Link href="/contact" className={styles.categoryLink}>Contact Us</Link> */}
              <Link href="/privacy-policy" className={styles.categoryLink}>Privacy Policy</Link>
              <Link href="/disclaimer" className={styles.categoryLink}>Disclamer</Link>
              <Link href="/terms-and-conditions" className={styles.categoryLink}>Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_responsible_company}>
        <span>© 2025 - SkillsUpLines.</span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
}
