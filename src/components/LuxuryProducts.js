import React from 'react'
import styles from './LuxuryProducts.module.css';
import LuxuryProductsList from './LuxuryProductsList';

const LuxuryProducts = () => {
   return (
      <div className={styles.modile_phone_finder}>
         <div className={styles.select_phone_brand}>
            <p className={styles.phone_brand_heading}>Luxury Items</p>
         </div>
         <LuxuryProductsList />
      </div>
   )
}

export default LuxuryProducts