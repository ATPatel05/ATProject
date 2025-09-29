import styles from './page.module.css';
import LuxuryProducts from '@/components/LuxuryProducts';
import { AllLuxuryNacklaceList } from '@/LuxuryItemsData/LuxuryNacklaceList';
import LuxuryProductSpecification from '@/components/LuxuryProductSpecification';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const LuxuryProdSEO = AllLuxuryNacklaceList.find(item => item.slug === slug);

  if (!LuxuryProdSEO) {
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
  } = LuxuryProdSEO;

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/${LuxuryProdSEO.folderPath}/${slug}`;
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
  const LuxuryProdDetails = AllLuxuryNacklaceList.find(item => item.slug === slug);

  return (
    <main className={styles.container}>
      <LuxuryProducts />
      <div className={styles.mobile_blog}>
        <LuxuryProductSpecification LuxuryProdDetails={LuxuryProdDetails} />
      </div>
    </main>
  );
}