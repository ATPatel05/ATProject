import React from 'react';
import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import SectionHeader from '@/components/SectionHeader';

export default function page() {
   return (
      <main className={styles.container}>
         <PhoneBrands />
         <div className={styles.mobile_blog}>
            <section className={styles.terms_section}>
               <SectionHeader>Terms of use</SectionHeader>
               <p className={styles.Text}>
                  Please review the following terms and conditions before using this website. By accessing, browsing, or using SkillUpLines.com, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use this website.
               </p>
               <p className={styles.Text}>
                  Copyright © 2025 SkillUpLines.com. All rights reserved. All product names, logos, brand names, and trademarks mentioned on this website are the property of their respective owners and are used only for identification purposes. SkillUpLines.com respects all intellectual property rights and acknowledges ownership of third-party content accordingly.
               </p>
               <p className={styles.Text}>
                  You may view, download, and print the information available on SkillUpLines.com strictly for your personal and informational use. The content provided on this website is meant to help visitors learn about various products and make informed choices based on reliable information.
               </p>
               <p className={styles.Text}>
                  However, you may not modify, reproduce, distribute, or republish any material from this website without prior written permission. The information, product descriptions, and comparisons published here are protected by copyright and are not to be used for commercial, resale, or promotional purposes.
               </p>
               <p className={styles.Text}>
                  All product specifications, reviews, and comparisons shared on SkillUpLines.com are created for educational and informational purposes only. We encourage users to verify details directly with the official product manufacturer or seller before making any purchasing decisions.
               </p>
               <p className={styles.Text}>
                  The information provided on SkillUpLines.com may include unintentional errors, omissions, or outdated data. All content, specifications, and product details are provided “as is” without warranties of any kind, either express or implied.
               </p>
               <p className={styles.Text}>
                  We make every effort to ensure accuracy, but we do not guarantee the completeness, reliability, or suitability of the information for any purpose.
               </p>
               <p className={styles.Text}>
                  SkillUpLines.com shall not be held liable for any loss, damage, or inconvenience arising from the use or reliance on the content provided here.
               </p>
               <p className={styles.Text}>
                  By using this website, you agree to indemnify and hold SkillUpLines.com, its owners, affiliates, contributors, and partners harmless from any claims, losses, or liabilities that may arise from your use of this site or violation of these Terms.
               </p>
               <p className={styles.Text}>
                  SkillUpLines.com reserves the right to modify or update these Terms of Use at any time without prior notice. Continued use of this website after any changes indicates your acceptance of the revised terms.
               </p>
            </section>
         </div>
      </main>
   );
}
