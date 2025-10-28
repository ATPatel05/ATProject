import PhoneBrands from '@/components/PhoneBrands';
import styles from './page.module.css';
import SectionHeader from "@/components/SectionHeader";
import PhonePost from '@/components/PhonePost';
import { AllSamsungPhonesList } from '@/PhoneData/SamsungPhonesList';
import { AllApplePhonesList } from '@/PhoneData/ApplePhonesList';
import { AllOnePlusPhonesList } from '@/PhoneData/OnePlusPhonesList';
import { AllOppoPhonesList } from '@/PhoneData/OppoPhonesList';
import { AllXiaoMIPhonesList } from '@/PhoneData/XiaoMIPhonesList';
import { AllVivoPhonesList } from '@/PhoneData/VivoPhonesList';
import { AllRealmePhonesList } from '@/PhoneData/RealMePhones';
import { AllPocoPhonesList } from '@/PhoneData/PocoPhonesLists';
import { AllPopulerPhoneList } from '@/PhoneData/PopulerPhonesList';
import { AllHeadphonesList } from '@/GadgetData/HeadphoneList';
import { AllAirdropsList } from '@/GadgetData/AirdropsList';
import { AllNackbandsList } from '@/GadgetData/Nackband';
import { AllWatchList } from '@/LuxuryItemsData/WatchList';
import { AllPerfumeList } from '@/LuxuryItemsData/PerfumesList';
import { AllGooglePhonesList } from '@/PhoneData/GooglePhonesList';

const AllLatestPhoneList = [
   ...AllSamsungPhonesList.slice(0, 2),
   ...AllApplePhonesList.slice(0, 2),
   ...AllOnePlusPhonesList.slice(0, 2),
   ...AllOppoPhonesList.slice(0, 2),
   ...AllVivoPhonesList.slice(0, 2),
   ...AllRealmePhonesList.slice(0, 2),
   ...AllXiaoMIPhonesList.slice(0, 2),

]
export default function HomePage() {
  return (
    <>
      <main className={styles.container}>
        <PhoneBrands />
        <div className={styles.mobile_blog}>
          <section className={styles.phone_review_section}>
            <SectionHeader>Populer Mobile Phones</SectionHeader>
            {AllPopulerPhoneList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Latest Mobile Phones</SectionHeader>
            {AllLatestPhoneList.map((phone, index) => (
              <PhonePost key={index} phone={phone} />
            ))}
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Samsung</SectionHeader>
            <section className={styles.all_phones}>
              {AllSamsungPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Apple</SectionHeader>
            <section className={styles.all_phones}>
              {AllApplePhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Google</SectionHeader>
            <section className={styles.all_phones}>
              {AllGooglePhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>

          <section className={styles.phone_review_section}>
            <SectionHeader>OnePlus Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllOnePlusPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Oppo Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllOppoPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>XiaoMI Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllXiaoMIPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Vivo Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllVivoPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Realme Phones</SectionHeader>
            <section className={styles.all_phones}>
              {AllRealmePhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Headphones</SectionHeader>
            <section className={styles.all_phones}>
              {AllHeadphonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>AirDrops</SectionHeader>
            <section className={styles.all_phones}>
              {AllAirdropsList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Nackband</SectionHeader>
            <section className={styles.all_phones}>
              {AllNackbandsList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Watch</SectionHeader>
            <section className={styles.all_phones}>
              {AllWatchList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Perfumes</SectionHeader>
            <section className={styles.all_phones}>
              {AllPerfumeList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
          <section className={styles.phone_review_section}>
            <SectionHeader>Handbag</SectionHeader>
            <section className={styles.all_phones}>
              {AllPocoPhonesList.map((phone, index) => (
                <PhonePost key={index} phone={phone} />
              ))}
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
