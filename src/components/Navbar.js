import Link from 'next/link';
import styles from './Navbar.module.css';
import Navigations from './Navigations';

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link href="/">
          <img
            className={styles.nav_image}
            src="/SkillUpLines-logo.png"
            alt="SkillUpLines logo - Business Ideas, Management ,Marketing & Innovative Blog"
          />
        </Link>
      </nav>
      <hr className={styles.divider} />
      <Navigations />
    </header>
  );
}