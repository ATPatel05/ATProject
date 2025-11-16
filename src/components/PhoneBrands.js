import React from 'react'
import styles from './PhoneBrands.module.css';
import PhoneBrandList from './PhoneBrandList';

const PhoneBrands = () => {
   return (
      <div className={styles.modile_phone_finder}>
         <div className={styles.select_phone_brand}>
            <p className={styles.phone_brand_heading}>Phone Brands</p>
         </div>
         <PhoneBrandList />
      </div>
   )
}

export default PhoneBrands