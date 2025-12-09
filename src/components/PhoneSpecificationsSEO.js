export function PhoneSpecificationsSEO({ slug, list }) {
  const PhoneSEO = list.find((item) => item.slug === slug);

  if (!PhoneSEO) {
    return {
      title: "Not Found | SkillUpLines",
      description: "This page does not exist on SkillUpLines.",
    };
  }

  const {
    title,
    description,
    image,
    folderPath,
    phoneHeading
  } = PhoneSEO;

  const siteUrl = "https://www.skilluplines.com";
  const fullUrl = `${siteUrl}/${folderPath}/${slug}`;
  const imageUrl = `${siteUrl}${image}`;

  return {
    title,
    description,
    keywords: [
      `${phoneHeading}`,
      `${phoneHeading} Specifications`,
      `${phoneHeading} Full Specifications`,
      `${phoneHeading} Features`,
      `${phoneHeading} Review`,
      `${phoneHeading} Specs`,
      `${phoneHeading} Launch Date`,
      `${phoneHeading} 5G`,
      `${phoneHeading} Camera`,
      `${phoneHeading} Battery`,
      `${phoneHeading} Display`,
      `${phoneHeading} Performance`,
      `${phoneHeading} Processor`,
      `${phoneHeading} Storage`,
      `${phoneHeading} RAM`,
      `${phoneHeading} ROM`,
      `${phoneHeading} Online`,
      `${phoneHeading} Buy`,
      `${phoneHeading} Details`,
      `${phoneHeading} Full Details`,
      `${phoneHeading} Mobile Phone`,
      `${phoneHeading} India Price`,
      `${phoneHeading} USA Price`,
      `${phoneHeading} Canada Price`,
      `${phoneHeading} Germany Price`,
      `${phoneHeading} Price in India`,
      `${phoneHeading} Price in USA`,
      `${phoneHeading} Price in Canada`,
      `${phoneHeading} Price in Germany`,
      `${phoneHeading} Unboxing`,
      `${phoneHeading} Pros and Cons`,
      `${phoneHeading} Alternatives`,
    ],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    authors: [{ name: "SkillUpLines Team", url: `${siteUrl}/about` }],
    creator: "SkillUpLines Team",
    publisher: "SkillUpLines",
    category: `${phoneHeading} full Specifications`,
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
    },
  };
}
