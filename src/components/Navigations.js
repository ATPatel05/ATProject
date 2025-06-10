'use client'
import React from 'react'
import styles from './Navigations.module.css'
import Link from 'next/link'

const Navigations = () => {
   return (
      <main className={styles.container}>
         <div className={styles.carrrousel}>
            <div className={styles.linkWrapper}>
               <Link href="/" className={styles.businessBlogLink}>Business Ideas</Link>
            </div>
            <div className={styles.linkWrapper}>
               <Link href="/business-blog-pages/Student-business-ideas-blogs" className={styles.businessBlogLink}>Student Business Ideas</Link>
            </div>
            <div className={styles.linkWrapper}>
               <Link href="/business-blog-pages/business-management-blogs" className={styles.businessBlogLink}>Management Strategies</Link>
            </div>
            <div className={styles.linkWrapper}>
               <Link href="/business-blog-pages/business-marketing-blogs" className={styles.businessBlogLink}>Marketing Strategies</Link>
            </div>
            <div className={styles.linkWrapper}>
               <Link href="/business-blog-pages/Business-innovation-ideas-blogs" className={styles.businessBlogLink}>Innovation Blog</Link>
            </div>
         </div>
      </main>
   )
}

export default Navigations
