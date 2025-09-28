import styles from './page.module.css';
import GadgetsBrands from '@/components/GadgetsBrands';
import { AllAppleGadgetsList } from '@/GadgetData/AllAppleGadgetsList';
import GadgetProductSpecification from '@/components/GadgetProductSpecification';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const GadgetSEO = AllAppleGadgetsList.find(item => item.slug === slug);

  if (!GadgetSEO) {
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
  } = GadgetSEO;

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/${GadgetSEO.folderPath}/${slug}`;
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
  const GadgetDetails = AllAppleGadgetsList.find(item => item.slug === slug);

  return (
    <main className={styles.container}>
      <GadgetsBrands />
      <div className={styles.mobile_blog}>
        <GadgetProductSpecification GadgetDetails={GadgetDetails} />
      </div>
    </main>
  );
}