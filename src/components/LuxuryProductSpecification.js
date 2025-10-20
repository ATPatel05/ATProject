import React from 'react'
import styles from './LuxuryProductSpecification.module.css';
import SectionHeader from './SectionHeader';

const LuxuryProductSpecification = ({ LuxuryProdDetails }) => {

   return (
      <div className={styles.mobile_blog}>
         <SectionHeader>{LuxuryProdDetails.ProductHeading}</SectionHeader>
         <section className={styles.phone_review_section}>
            <div className={styles.phone_intro}>
               <div>
                  <img className={styles.post_image} src={LuxuryProdDetails.image} alt={LuxuryProdDetails.phoneHeading} />
               </div>
               <div className={styles.phone_details}>
                  <div className={styles.detail} >
                     <label className={styles.details_label}>Brand</label>
                     <a
                        href={LuxuryProdDetails.ManufacturerLink}
                        className={styles.details_phone_link}
                        rel="nofollow sponsored"
                     >
                        {LuxuryProdDetails.Brand}
                     </a>
                  </div>
                  {LuxuryProdDetails.ItroData.map((IntroDetail, index) =>
                     <div key={index} className={styles.detail} >
                        <label className={styles.details_label}>{IntroDetail.IntroHeading}</label>
                        <span className={styles.details_span}>{IntroDetail.IntroLine}</span>
                     </div>
                  )}
               </div>
            </div>
         </section>
         {/* <section className={styles.price_aff_section}>
            <SectionHeader>Prices</SectionHeader>
            <div className={styles.Price_Aff} >
               {LuxuryProdDetails.AmazonPrice.map((section, index) =>
                  <div key={index} className={styles.price_list}>
                     <h3 className={styles.ram_heading}>
                        {section.RamRom}
                     </h3>
                     {section.price.map((p, idx) => (
                        <a
                           key={idx}
                           href={LuxuryProdDetails.ManufacturerLink}
                           className={styles.affLink}
                           rel="nofollow sponsored"
                           target="_blank">
                           <img
                              className={styles.amazon_logo}
                              src={p.image}
                              alt="amazon logo"
                           />
                           <p className={styles.phone_price}>{p.price}</p>
                        </a>
                     ))}
                  </div>
               )}
            </div>
         </section> */}

         <section className={styles.specifications_section}>
            <SectionHeader>Specifications</SectionHeader>
            <section className={styles.specifications}>
               {LuxuryProdDetails.Specifications.map((section, index) =>
                  <table key={index} className={styles.specifications_table}>
                     <tbody>
                        <tr className={styles.row_head} >
                           <th colSpan={2} className={styles.specifications_table_head_up}>
                              {section.SpecificationHeading}
                           </th>
                        </tr>
                        <tr >
                           <th rowSpan={section.Details.length + 2} className={styles.specifications_table_head}>
                              {section.SpecificationHeading}
                           </th>
                        </tr>
                        <tr className={styles.row_head} >
                        </tr>
                        {section.Details.map((data, idx) => (
                           <tr key={idx}>
                              <td className={styles.hData} >
                                 {data.SpecificationType}
                              </td >
                              <td className={styles.specifications_table_data} >
                                 {data.typeDetail}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               )}
            </section>
         </section>
      </div>
   )
}

export default LuxuryProductSpecification