import React from 'react'

import styles from './GadgetsBrandsList.module.css';

const GadgetsBrandsList = () => {
   return (
      <ul>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/BoatGadgets' className={styles.phone_brand_link}>
               Boat
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/JBLGadgets' className={styles.phone_brand_link}>
               JBL
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/AppleGadgets' className={styles.phone_brand_link}>
               Apple
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/SamsungGadgets' className={styles.phone_brand_link}>
               Samsung
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/OnePlusGadgets' className={styles.phone_brand_link}>
               OnePlus
            </a>
         </li>

         <li className={styles.phone_brand}>
            <a href='/AllGadgets/SonyGadgets' className={styles.phone_brand_link}>
               Sony
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/OppoGadgets' className={styles.phone_brand_link}>
               Oppo
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/ZebronicsGadgets' className={styles.phone_brand_link}>
               Zebronics
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/PortonicsGadgets' className={styles.phone_brand_link}>
               Portonics
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/SoundcoreGadgets' className={styles.phone_brand_link}>
               Soundcore
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/GoboultGadgets' className={styles.phone_brand_link}>
               Goboult
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/NoiseGadgets' className={styles.phone_brand_link}>
               Noise
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/MiviGadgets' className={styles.phone_brand_link}>
               Mivi
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllGadgets/AmazonBasisGadgets' className={styles.phone_brand_link}>
               Amazon Basis
            </a>
         </li>
         <li className={styles.last_phone_brand}>
            <a href='/AllGadgets/DigitekGadgets' className={styles.phone_brand_link}>
               Digitek
            </a>
         </li>
      </ul>
   )
}

export default GadgetsBrandsList