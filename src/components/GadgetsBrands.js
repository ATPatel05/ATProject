import React from 'react'
import styles from './GadgetsBrands.module.css';
import GadgetsBrandsList from './GadgetsBrandsList';
import PhoneBrandList from './PhoneBrandList';
import LuxuryProductsList from './LuxuryProductsList';

const GadgetsBrands = () => {
   return (
      <div className={styles.modile_phone_finder}>
         <div className={styles.select_phone_brand}>
            <p className={styles.phone_brand_heading}>Gadget Brands</p>
         </div>
         <GadgetsBrandsList />
      </div>
   )
}

export default GadgetsBrands