import React from 'react'
import styles from './PhonePost.module.css';

const PhonePost = ({ phone }) => {
   const PhoneDetailUrl = `/${phone.folderPath}/${phone.slug}`;

   return (
      <h3 className={styles.phone_post}>
         <a href={PhoneDetailUrl}
            rel="nofollow sponsored"
         >
            <img className={styles.post_image} src={phone.image} alt={phone.title} />
            <strong >
               <span className={styles.phone_name}>
                  {phone.postName}
               </span>
            </strong>
         </a>
      </h3>
   )
}

export default PhonePost