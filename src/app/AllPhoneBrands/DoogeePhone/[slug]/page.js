import styles from './page.module.css';
import PhoneBrands from '@/components/PhoneBrands';
import PhonePriceSpecification from '@/components/PhonePriceSpecification';
import { AllDooGeePhonesList } from '@/PhoneData/DooGeePhonesList';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const PhoneSEO = AllDooGeePhonesList.find(item => item.slug === slug);

  if (!PhoneSEO) {
    return {
      title: "Not Found | SkillUpLines",
      description: "This blog post does not exist on SkillUpLines.",
    };
  }

  const {
    title,
    description,
    image,
    keywords
  } = PhoneSEO;

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/${PhoneSEO.folderPath}/${slug}`;
  const imageUrl = `${siteUrl}${image}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    authors: [{ name: "SkillUpLines Team", url: `${siteUrl}/about` }],
    creator: "SkillUpLines Team",
    publisher: "SkillUpLines",
    category: "Business Ideas, Startup Ideas, Small Business Ideas, Business for Beginners, Online Business, Entrepreneurship",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: fullUrl,
      siteName: "SkillUpLines",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@SkillUpLines",
    }
  };
}

export default async function Page({ params }) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const phoneDetails = AllDooGeePhonesList.find(item => item.slug === slug);

  return (
    <main className={styles.container}>
      <PhoneBrands />
      <div className={styles.mobile_blog}>
        <PhonePriceSpecification phoneDetails={phoneDetails} />
      </div>
    </main>
  );
}