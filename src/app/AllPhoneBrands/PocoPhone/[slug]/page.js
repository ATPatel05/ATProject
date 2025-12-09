import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePriceSpecification from '@/components/PhonePriceSpecification';
import { PhoneSpecificationsSEO } from '@/components/PhoneSpecificationsSEO';
import { AllPocoPhonesList } from '@/PhoneData/PocoPhonesLists';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return PhoneSpecificationsSEO({
    slug,
    list: AllPocoPhonesList
  });
}

export default async function Page({ params }) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const phoneDetails = AllPocoPhonesList.find(item => item.slug === slug);

  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <PhonePriceSpecification phoneDetails={phoneDetails} />
      </div>
    </main>
  );
}