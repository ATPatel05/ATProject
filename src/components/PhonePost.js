import React from 'react'
import styles from './PhonePost.module.css';

const PhonePost = ({ phone }) => {
const PhoneDetailUrl = `/${phone.folderPath}/${phone.slug}`;

   return (
      <h3 className={styles.phone_post}>
         <a href={PhoneDetailUrl}>
            <img className={styles.post_image} src={phone.image}>
            </img>
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