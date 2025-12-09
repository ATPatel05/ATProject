import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePriceSpecification from '@/components/PhonePriceSpecification';
import { PhoneSpecificationsSEO } from '@/components/PhoneSpecificationsSEO';
import { AllApplePhonesList } from '@/PhoneData/ApplePhonesList';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return PhoneSpecificationsSEO({
    slug,
    list: AllApplePhonesList
  });
}

export default async function Page({ params }) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const phoneDetails = AllApplePhonesList.find(item => item.slug === slug);

  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <PhonePriceSpecification phoneDetails={phoneDetails} />
      </div>
    </main>
  );
}