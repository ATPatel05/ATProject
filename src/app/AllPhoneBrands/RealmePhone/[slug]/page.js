import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePriceSpecification from '@/components/PhonePriceSpecification';
import { PhoneSpecificationsSEO } from '@/components/PhoneSpecificationsSEO';
import { AllRealmePhonesList } from '@/PhoneData/RealMePhones';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return PhoneSpecificationsSEO({
    slug,
    list: AllRealmePhonesList
  });
}

export default async function Page({ params }) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const phoneDetails = AllRealmePhonesList.find(item => item.slug === slug);

  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <PhonePriceSpecification phoneDetails={phoneDetails} />
      </div>
    </main>
  );
}