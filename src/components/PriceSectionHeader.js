import styles from './SectionHeader.module.css';

export default function SectionHeader({ children  }) {
   return (
      <h2 className={styles.section_heaning}>
         <span className={styles.red_border}></span> {children }
      </h2>
   );
}
