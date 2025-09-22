const baseUrl = "https://www.skilluplines.com";

import { AllSamsungPhonesList } from '@/PhoneData/SamsungPhonesList';

const staticPages = [
   { path: "/", changefreq: "daily", priority: 1.0 },
   { path: "/Gadgets", changefreq: "weekly", priority: 0.9 },
   { path: "/LuxuryProducts", changefreq: "weekly", priority: 0.9 },
   { path: "/SamsungPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/ApplePhones", changefreq: "weekly", priority: 0.9 },
   { path: "/GooglePixelPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/OnePlusPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/OppoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/VivoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/RealmePhones", changefreq: "weekly", priority: 0.9 },
   { path: "/IQOOPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/XiaoMIPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/InfinixPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/SonyPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/LenovoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/MotarolaPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/XoloPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/LavaPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/PocoPhones", changefreq: "weekly", priority: 0.9 },
   { path: "/NokiaPhones", changefreq: "weekly", priority: 0.9 },
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


