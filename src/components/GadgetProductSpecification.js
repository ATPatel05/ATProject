import React from 'react'
import styles from './GadgetProductSpecification.module.css';
import SectionHeader from './SectionHeader';

const GadgetProductSpecification = ({ GadgetDetails }) => {

   return (
      <div className={styles.mobile_blog}>
         <SectionHeader>{GadgetDetails.ProductHeading}</SectionHeader>
         <section className={styles.phone_review_section}>

            <div className={styles.phone_intro}>
               <div>
                  <img className={styles.post_image} src={GadgetDetails.image} alt={GadgetDetails.phoneHeading} />
               </div>
               <div className={styles.phone_details}>
                  <div className={styles.detail} >
                     <label className={styles.details_label}>Announced</label>
                     <span className={styles.details_span}>{GadgetDetails.Announced}</span>
                  </div>
                  <div className={styles.detail} >
                     <label className={styles.details_label}>Brand</label>
                     <a
                        href={GadgetDetails.ManufacturerLink}
                        className={styles.details_phone_link}
                        rel="nofollow sponsored"
                     >
                        {GadgetDetails.Brand}
                     </a>
                  </div>

                  {GadgetDetails.ItroData.map((IntroDetail, index) =>
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
               {GadgetDetails.AmazonPrice.map((section, index) =>
                  <div key={index} className={styles.price_list}>
                     <h3 className={styles.ram_heading}>
                        {section.RamRom}
                     </h3>
                     {section.price.map((p, idx) => (
                        <a key={idx} href={p.affLink} className={styles.affLink} >
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
               {GadgetDetails.Specifications.map((section, index) =>
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

export default GadgetProductSpecification