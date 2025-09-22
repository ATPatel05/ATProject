import React from 'react'
import styles from './LuxuryProducts.module.css';
import LuxuryProductsList from './LuxuryProductsList';
import PhoneBrandList from './PhoneBrandList';
import GadgetsBrandsList from './GadgetsBrandsList';

const LuxuryProducts = () => {
   return (
      <div className={styles.modile_phone_finder}>
         <div className={styles.select_phone_brand}>
            <p className={styles.phone_brand_heading}>Luxury Items</p>
         </div>
         <LuxuryProductsList />

         <div className={styles.select_gadgets_Accessories}>
            <div className={styles.select_phone_brand}>
               <p className={styles.phone_brand_heading}>Phone Brands</p>
            </div>
            <PhoneBrandList />
         </div>

         <div className={styles.select_gadgets_Accessories}>
            <div className={styles.select_phone_brand}>
               <p className={styles.phone_brand_heading}>Gadgets Brands</p>
            </div>
            <GadgetsBrandsList />
         </div>
      </div>
   )
}

export default LuxuryProducts