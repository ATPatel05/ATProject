import styles from './page.module.css';
import { AllApplePhonesList } from '@/PhoneData/ApplePhonesList';
import PhonePriceSpecification from '@/components/PhonePriceSpecification';
import GadgetsBrands from '@/components/GadgetsBrands';



export default async function Page({ params }) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const phoneDetails = AllApplePhonesList.find(item => item.slug === slug);

  return (
    <main className={styles.container}>
      <GadgetsBrands />
      <div className={styles.mobile_blog}>
        <PhonePriceSpecification phoneDetails={phoneDetails} />
      </div>
    </main>
  );
}