import React from 'react';
import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import SectionHeader from '@/components/SectionHeader';

export default function page() {
   return (
      <main className={styles.container}>
         <PhoneBrands />
         <div className={styles.mobile_blog}>
            <section className={styles.disclaimer_section}>
               <SectionHeader>Disclaimer</SectionHeader>
               <p className={styles.Text}>
                  At SkillUpLines.com, we make every effort to ensure that the information provided on our website is accurate, reliable, and up to date. Our platform is dedicated to offering detailed specifications, comparisons, and insights on Mobiles, Gadgets, Beauty Products, and Luxury Items to help users make more informed decisions.
               </p>
               <p className={styles.Text}>
                  We gather product details from official brand sources, trusted retailers, and verified online listings. Wherever possible, we cross-check and review this information to maintain accuracy. However, despite our best efforts, we cannot guarantee that all details, prices, or specifications are 100% correct or current at all times.
               </p>
               <p className={styles.Text}>
                  All content published on SkillUpLines.com is provided for informational and educational purposes only. We do not sell any products directly and are not responsible for purchase decisions made by users. If any specification or feature is crucial to you, we strongly recommend confirming it through the official brand website or authorized retailer before making any buying decision.
               </p>
               <p className={styles.Text}>
                  SkillUpLines.com is not responsible for any errors, omissions, or outcomes resulting from the use of this information. All data, images, and links are provided “as is” without any warranties, express or implied, regarding completeness, accuracy, reliability, or suitability.
               </p>
            </section>
         </div>
      </main>
   );
}
