import styles from './SectionHeader.module.css';

export default function SectionHeader({ children  }) {
   return (
      <section className={styles.section_heaning}>
         <span className={styles.red_border}></span> {children }
      </section>
   );
}
