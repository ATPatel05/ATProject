import React from 'react'
import styles from './PhoneBrands.module.css';
import PhoneBrandList from './PhoneBrandList';
import GadgetsBrandsList from './GadgetsBrandsList';
import LuxuryProductsList from './LuxuryProductsList';

const PhoneBrands = () => {
   return (
      <div className={styles.modile_phone_finder}>
         <div className={styles.select_phone_brand}>
            <p className={styles.phone_brand_heading}>Phone Brands</p>
         </div>
         <PhoneBrandList />
         <div className={styles.select_gadgets_Accessories}>
            <div className={styles.select_phone_brand}>
               <p className={styles.phone_brand_heading}>Gadgets Brands</p>
            </div>

            <GadgetsBrandsList />
         </div>
         <div className={styles.select_gadgets_Accessories}>
            <div className={styles.select_phone_brand}>
               <p className={styles.phone_brand_heading}>Luxury Products</p>
            </div>

            <LuxuryProductsList />
         </div>

      </div>
   )
}

export default PhoneBrands