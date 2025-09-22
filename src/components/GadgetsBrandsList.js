import React from 'react'

import styles from './GadgetsBrandsList.module.css';

const GadgetsBrandsList = () => {
   return (
      <ul>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/AppleAccessories' className={styles.phone_brand_link}>
               Apple
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/SamsungAccessories' className={styles.phone_brand_link}>
               Samsung
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/OnePlusAccessories' className={styles.phone_brand_link}>
               OnePlus
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/BoatAccessories' className={styles.phone_brand_link}>
               Boat
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/JBLAccessories' className={styles.phone_brand_link}>
               JBL
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/SonyAccessories' className={styles.phone_brand_link}>
               Sony
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/OppoAccessories' className={styles.phone_brand_link}>
               Oppo
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/ZebronicsAccessories' className={styles.phone_brand_link}>
               Zebronics
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/PortonicsAccessories' className={styles.phone_brand_link}>
               Portonics
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/InfinixAccessories' className={styles.phone_brand_link}>
               Infinix
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/GoboultAccessories' className={styles.phone_brand_link}>
               Goboult
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/NoiseAccessories' className={styles.phone_brand_link}>
               Noise
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/MiviAccessories' className={styles.phone_brand_link}>
               Mivi
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllAccessories/AmazonBasisAccessories' className={styles.phone_brand_link}>
               Amazon Basis
            </a>
         </li>
         <li className={styles.last_phone_brand}>
            <a href='/AllPhoneBrands/DigitekAccessories' className={styles.phone_brand_link}>
               Digitek
            </a>
         </li>
      </ul>
   )
}

export default GadgetsBrandsList