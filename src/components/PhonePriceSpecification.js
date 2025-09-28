import React from 'react'
import styles from './PhonePriceSpecification.module.css';
import SectionHeader from './SectionHeader';

const PhonePriceSpecification = ({ phoneDetails }) => {

  return (
    <div className={styles.mobile_blog}>
      <SectionHeader>{phoneDetails.phoneHeading}</SectionHeader>
      <section className={styles.phone_review_section}>

        <div className={styles.phone_intro}>
          <div>
            <img className={styles.post_image} src={phoneDetails.image} alt={phoneDetails.phoneHeading} />
          </div>
          <div className={styles.phone_details}>
            <div className={styles.detail} >
              <label className={styles.details_label}>Announced</label>
              <span className={styles.details_span}>{phoneDetails.Announced}</span>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Manufacturer</label>
              <a href={phoneDetails.ManufacturerLink} className={styles.details_phone_link}>
                {phoneDetails.Manufacturer}
              </a>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Body</label>
              <span className={styles.details_span}>{phoneDetails.Body}</span>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Display</label>
              <span className={styles.details_span}>{phoneDetails.Display}</span>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Platform</label>
              <span className={styles.details_span}>{phoneDetails.Platform}</span>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Ram</label>
              <span className={styles.details_span}>{phoneDetails.Ram}</span>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Memory</label>
              <span className={styles.details_span}>{phoneDetails.Memory}</span>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Battery</label>
              <span className={styles.details_span}>{phoneDetails.Battery}</span>
            </div>
            <div className={styles.detail} >
              <label className={styles.details_label}>Description</label>
              <span className={styles.details_span}>{phoneDetails.PhoneDescription}</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.price_aff_section}>

        <SectionHeader>Prices</SectionHeader>
        <div className={styles.Price_Aff} >
          {phoneDetails.AmazonPrice.map((section, index) =>
            <div key={index} className={styles.price_list}>
              <h3 className={styles.ram_heading}>
                {section.RamRom}
              </h3>
              {section.price.map((p, idx) => (
                <a key={idx} href={phoneDetails.ManufacturerLink} className={styles.affLink} >
                  <img
                    className={styles.amazon_logo}
                    src={p.image}
                    alt="amazon logo"
                  />
                  <p className={styles.phone_price}>{p.price}</p>
                </a>
              ))}
            </div>
          )
          }

          {/* <h3 className={styles.ram_heading}>
            128GB 8GB RAM
          </h3>

          <a href={phoneDetails.ManufacturerLink} className={styles.affLink} >
            <img
              className={styles.amazon_logo}
              src="/AmazonIndia.jpg"
              alt="amazon logo of india"
            />
            <p className={styles.phone_price}>₹38,999</p>
          </a>
          <a href={phoneDetails.ManufacturerLink} className={styles.affLink} >
            <img
              className={styles.amazon_logo}
              src="/AmazonCom.jpg"
              alt="amazon logo of india"
            />
            <p className={styles.phone_price}>$38,999</p>
          </a>
          <a href={phoneDetails.ManufacturerLink} className={styles.affLink} >
            <img
              className={styles.amazon_logo}
              src="/AmazonGermany.jpg"
              alt="amazon logo of india"
            />
            <p className={styles.phone_price}>€38,999</p>
          </a>
          <a href={phoneDetails.ManufacturerLink} className={styles.affLink} >
            <img
              className={styles.amazon_logo}
              src="/AmazonCanada.jpg"
              alt="amazon logo of india"
            />
            <p className={styles.phone_price}>₹38,999</p>
          </a>
          <a href={phoneDetails.ManufacturerLink} className={styles.affLink} >
            <img
              className={styles.amazon_logo}
              src="/AmazonUK.jpg"
              alt="amazon logo of india"
            />
            <p className={styles.phone_price}>£38,999</p>
          </a> */}
        </div>


      </section>

      <section className={styles.specifications_section}>

        <SectionHeader>Specifications</SectionHeader>
        <section className={styles.specifications}>

          {phoneDetails.Specifications.map((section, index) =>
            <table key={index} className={styles.specifications_table}>
              <tbody>
                <tr className={styles.row_head} >
                  <th colSpan={2} className={styles.specifications_table_head_up}>
                    {section.SpecificationHeading}
                  </th>
                </tr>
                <tr >
                  <th rowSpan={5} className={styles.specifications_table_head}>
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

          {/* <table className={styles.specifications_table}>
            <tbody>
              <tr className={styles.row_head} >
                <th colSpan={2} className={styles.specifications_table_head_up}>
                  Launch
                </th>
              </tr>
              <tr>
                <th rowSpan={4} className={styles.specifications_table_head} >
                  Launch
                </th >
                <td className={styles.hData} >
                  Announced
                </td >
                <td className={styles.specifications_table_data} >
                  2025, March 04
                </td>
              </tr>
              <tr>
                <td className={styles.hData} >
                  Status
                </td >
                <td className={styles.specifications_table_data} >
                  Available. Released 2025, March 12
                </td>
              </tr>
            </tbody>
          </table> */}
        </section>
      </section>
    </div>
  )
}

export default PhonePriceSpecification