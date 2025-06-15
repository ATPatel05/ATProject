import YsenseBusiness from '@/components/YsenseBusiness'
import { YsensePageSEO } from '../../../../Data/YsenseSEO';

export async function generateMetadata() {
   const blog = YsensePageSEO

   if (!blog) {
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
   } = blog;

   const siteUrl = "https://www.skilluplines.com";
   const fullUrl = `${siteUrl}/business-blog/ideas/ySense`;
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
      category: "Business, Small Business, Business Blog",
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

const page = () => {
  return (
    <>
    <YsenseBusiness />
    </>
  )
}

export default page
