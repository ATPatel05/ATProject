import React from 'react'
import styles from './LuxuryProductsList.module.css';

const LuxuryProductsList = () => {
   return (
      <ul>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryWatchs' className={styles.phone_brand_link}>
               Watch
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryHandBags' className={styles.phone_brand_link}>
               Hand Bag
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryBreslate' className={styles.phone_brand_link}>
               Breslate
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryPerfume' className={styles.phone_brand_link}>
               Perfume
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryShose' className={styles.phone_brand_link}>
               Shose
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryNeckLace' className={styles.phone_brand_link}>
               NeckLace
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryGoggles' className={styles.phone_brand_link}>
               Goggles
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryMackUpKit' className={styles.phone_brand_link}>
               MackUp Kit
            </a>
         </li>
         <li className={styles.last_phone_brand}>
            <a href='/AllLuxuryProducts/LuxuryBag' className={styles.phone_brand_link}>
               Bag
            </a>
         </li>
      </ul>
   )
}

export default LuxuryProductsList