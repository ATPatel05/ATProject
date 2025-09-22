import PhoneBrands from '@/components/PhoneBrands';
import styles from './page.module.css';
import SectionHeader from "@/components/SectionHeader";
import { AllSamsungPhonesList } from '@/PhoneData/SamsungPhonesList';
import PhonePost from '@/components/PhonePost';

export default function HomePage() {
  return (
    <>
      <main className={styles.container}>
        <PhoneBrands />
        <div className={styles.mobile_blog}>
          <section className={styles.phone_review_section}>
            <SectionHeader>Samsung Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Apple Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Google Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>OnePlus Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Oppo Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>XiaoMI Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Vivo Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Realme Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>IQOO Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>BlackView Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Sony Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Motarola Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Lava phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Poco phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

{/* <SideJobIdea />
        <h1 className={styles.title}>{BestBusinessPage.title}</h1>
        <p className={styles.headning_red_line}>
          {BestBusinessPage.topicintroline}
        </p>
        {/* <section className={styles.phone_review_section}>
            <div className={styles.mobile_review_blog}>
              <h3>
                <a href='/' className={styles.phone_review_blog}>
                  Sennheiser MOMENTUM 4 Wireless 80th Anniversary Edition launched in India
                </a>
              </h3>
              <p className={styles.phone_review_blog_description}>
                Sennheiser has introduced the MOMENTUM 4 Wireless 80th Anniversary Edition in India to mark 80 years of sound innovation....
              </p>
            </div>
            <div className={styles.mobile_review_blog}>
              <h3>
                <a href='/' className={styles.phone_review_blog}>
                  Sennheiser MOMENTUM 4 Wireless 80th Anniversary Edition launched in India
                </a>
              </h3>
              <p className={styles.phone_review_blog_description}>
                Sennheiser has introduced the MOMENTUM 4 Wireless 80th Anniversary Edition in India to mark 80 years of sound innovation....
              </p>
            </div>
            <div className={styles.mobile_review_blog}>
              <h3>
                <a href='/' className={styles.phone_review_blog}>
                  Sennheiser MOMENTUM 4 Wireless 80th Anniversary Edition launched in India
                </a>
              </h3>
              <p className={styles.phone_review_blog_description}>
                Sennheiser has introduced the MOMENTUM 4 Wireless 80th Anniversary Edition in India to mark 80 years of sound innovation....
              </p>
            </div>
          </section> 
        <h2 className={styles.guide_list_heading}>{BestBusinessPage.guideHeadingLine}</h2>
        <ul className={styles.table_box} >
          {BestBusinessPage.ultimateGuideList.map((para, index) => (
            <li key={index} className={styles.table_content_list}>
              {para.guide}
            </li>
          ))}
        </ul>
        <SectionHeader >Best Business Ideas</SectionHeader>
        <YsenseBlogCard />
        {TopBusinessIdeasBlogsList.map((blog, index) => (
          <article key={index}>
            <BusinessBlogCard businessBlog={blog} />
          </article>
        ))} */}