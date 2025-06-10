import React from 'react';
import styles from './page.module.css';

export default function page() {
   return (
      <main className={styles.container}>
         <article>
            <h1 className={styles.title}>Website Disclaimer</h1>

            <section className="mb-6">
               <p className={styles.description_paragraph}>
                  The content provided on this website is intended for general informational purposes only.
               </p>
            </section>
            <section className="mb-6">
               <p className={styles.description_paragraph}>
                  The information provided by BusinessUpLines is for general purposes only. While we strive to keep the content accurate and up to date, we make no guarantees or warranties—express or implied—about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on it for any purpose. Any reliance you place on such information is strictly at your own risk.
               </p>
            </section>
            <section className="mb-6">
               <p className={styles.description_paragraph}>
                  Under no circumstances shall we be held liable for any loss or damage, including but not limited to indirect or consequential loss or damage, or any loss or damage whatsoever arising from the loss of data or profits, arising out of or in connection with the use of this website.
               </p>
            </section>
            <section className="mb-6">
               <p className={styles.description_paragraph}>
                  Through this website, you may be able to access links to other websites that are not controlled by BusinessUpLines. We have no authority over the nature, content, or availability of those external sites. The presence of any links does not necessarily imply our endorsement or recommendation of the views expressed within them.
               </p>
            </section>
            <section className="mb-6">
               <p className={styles.description_paragraph}>
                  We strive to ensure that the website remains operational at all times. However, BusinessUpLines is not responsible and will not be liable if the website is temporarily unavailable due to technical problems beyond our control.
               </p>
            </section>

            <p className={styles.description_paragraph}>– Team SkillUpLines</p>
         </article>
      </main>
   );
}