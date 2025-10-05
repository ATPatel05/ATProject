import React from 'react'
import styles from './GadgetsBrands.module.css';
import GadgetsBrandsList from './GadgetsBrandsList';

const GadgetsBrands = () => {
   return (
      <div className={styles.modile_phone_finder}>
         <div className={styles.select_phone_brand}>
            <p className={styles.phone_brand_heading}>Accessories</p>
         </div>
         <GadgetsBrandsList />
      </div>
   )
}

export default GadgetsBrands