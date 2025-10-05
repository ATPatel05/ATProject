import React from 'react'
import styles from './LuxuryProductsList.module.css';

const LuxuryProductsList = () => {
   return (
      <ul>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryWatches' className={styles.phone_brand_link}>
               Watch
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryHandBags' className={styles.phone_brand_link}>
               Hand Bag
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryBracelets' className={styles.phone_brand_link}>
               Bracelet
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryPerfumes' className={styles.phone_brand_link}>
               Perfume
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryShoses' className={styles.phone_brand_link}>
               Shose
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryNacklaces' className={styles.phone_brand_link}>
               NeckLace
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryGoggleses' className={styles.phone_brand_link}>
               Goggles
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryMakeUpKits' className={styles.phone_brand_link}>
               MackUp Kit
            </a>
         </li>
         <li className={styles.last_phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryBags' className={styles.phone_brand_link}>
               Bag
            </a>
         </li>
      </ul>
   )
}

export default LuxuryProductsList