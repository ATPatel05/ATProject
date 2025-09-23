const baseUrl = "https://www.skilluplines.com";

import { AllSamsungPhonesList } from '@/PhoneData/SamsungPhonesList';

const staticPages = [
   { path: "/", changefreq: "daily", priority: 1.0 },
   { path: "/Gadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/LuxuryProducts", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/SamsungPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/ApplePhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/GooglePixelPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/OnePlusPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/OppoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/VivoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/RealmePhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/IQOOPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/XiaoMIPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/InfinixPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/SonyPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/LenovoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/MotarolaPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/XoloPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/LavaPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/PocoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllPhoneBrands/NokiaPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/AmazonBasisGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/AppleGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/BoatGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/DigitekGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/GoboultGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/JBLGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/MiviGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/NoiseGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/OnePlusGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/OppoGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/PortonicsGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/SamsungGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/SonyGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/SoundcoreGadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/AllGadgets/ZebronicsGadgets", changefreq: "weekly", priority: 0.9 },
];

const blogUrls = [
   ...AllSamsungPhonesList,
];

export async function GET() {
   const urls = [];

   for (const page of staticPages) {
      urls.push(`
      <url>
        <loc>${baseUrl}${page.path}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `);
   }

   for (const blog of blogUrls) {
      urls.push(`
      <url>
        <loc>${baseUrl}/${blog.folderPath}/${blog.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `);
   }

   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

   return new Response(sitemap, {
      headers: {
         "Content-Type": "application/xml",
      },
   });
}


