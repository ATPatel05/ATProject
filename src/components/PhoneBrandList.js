import React from 'react'
import styles from './PhoneBrandList.module.css'

const PhoneBrandList = () => {
   return (
      <ul>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/SamsungPhones' className={styles.phone_brand_link}>
               Samsung
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/ApplePhones' className={styles.phone_brand_link}>
               Apple
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/GooglePixelPhones' className={styles.phone_brand_link}>
               Google
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/OnePlusPhones' className={styles.phone_brand_link}>
               OnePlus
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/OppoPhones' className={styles.phone_brand_link}>
               Oppo
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/XiaoMIPhones' className={styles.phone_brand_link}>
               XiaoMI
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/VivoPhones' className={styles.phone_brand_link}>
               Vivo
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/RealmePhones' className={styles.phone_brand_link}>
               Realme
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/DoogeePhones' className={styles.phone_brand_link}>
               Doogee
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/IQOOPhones' className={styles.phone_brand_link}>
               IQOO
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/BlackViewPhones' className={styles.phone_brand_link}>
               Blackview
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/SonyPhones' className={styles.phone_brand_link}>
               Sony
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/MotorolaPhones' className={styles.phone_brand_link}>
               Motorola
            </a>
         </li>
         <li className={styles.phone_brand}>
            <a href='/AllPhoneBrands/LavaPhones' className={styles.phone_brand_link}>
               Lava
            </a>
         </li>
         <li className={styles.last_phone_brand}>
            <a href='/AllPhoneBrands/PocoPhones' className={styles.phone_brand_link}>
               Poco
            </a>
         </li>
      </ul>
   )
}

export default PhoneBrandList