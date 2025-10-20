import React from 'react';
import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import SectionHeader from '@/components/SectionHeader';

export default function page() {
   return (
      <main className={styles.container}>
         <PhoneBrands />
         <div className={styles.mobile_blog}>
            <section className={styles.privacy_section}>
               <SectionHeader>Privacy Policy</SectionHeader>
               <p className={styles.Text}>
                  Welcome to SkillUpLines.com — your trusted source for reliable information on mobiles, gadgets, luxury products, and beauty.
               </p>
               <p className={styles.Text}>
                  Your privacy is important to us. This Privacy Policy explains how we handle your information when you visit our website.
               </p>
               <p className={styles.Text}>
                  We do not collect any personal data from visitors, provide user accounts or login options, request names, emails, or contact details, or store any user-submitted information on our servers.
               </p>
               <p className={styles.Text}>
                  To enhance the performance and user experience of SkillUpLines.com, we may use limited cookies or analytics tools such as Google Analytics. These tools collect non-personal data, including page views, traffic sources, and the amount of time spent on different pages. This information helps us understand how visitors interact with our website and allows us to improve content, structure, and usability.
               </p>
               <p className={styles.Text}>
                  Please note that this data is entirely anonymous and cannot be used to identify individual users. If you prefer not to share this non-personal information, you can disable cookies through your browser settings at any time. Doing so will not affect your ability to access or use our website’s features.
               </p>
               <p className={styles.Text}>
                  Since we do not collect or store personal data, no personal information is at risk.
               </p>
               <p className={styles.Text}>
                  We still use secure hosting and regular maintenance to protect the site from unauthorized access.
               </p>
               <p className={styles.Text}>
                  By using SkillUpLines.com, you agree to this Privacy Policy and its terms.
               </p>
               <p className={styles.Text}>
                 We may update this policy periodically.
               </p>

            </section>
         </div>
      </main>
   );
}
