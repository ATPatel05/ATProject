const baseUrl = "https://www.skilluplines.com";

import TopBusinessIdeasBlogsListSitemap from '@/blogData/TopBusinessIdeasBlogsList';
import ManagementStrategiesListSitemap from '@/blogData/ManagementStrategiesBlogsList';
import MarketingStrategiesListSitemap from '@/blogData/MarketingStrategiesBlogsList';
import BuisnessOperationBlogsListSitemap from '@/blogData/OperationsIdeasBlogsList';
import InnovativeBlogsListSitemap from '@/blogData/InnovativeIdeasBlogsList';

const staticPages = [
   { path: "/", changefreq: "daily", priority: 1.0 },
   { path: "/business-blog-pages/Business-management-strategies-blogs", changefreq: "weekly", priority: 0.9 },
   { path: "/business-blog-pages/Business-marketing-strategies-blogs", changefreq: "weekly", priority: 0.9 },
   { path: "/business-blog-pages/Business-operations-blogs", changefreq: "weekly", priority: 0.9 },
   { path: "/business-blog-pages/Business-innovation-ideas-blogs", changefreq: "weekly", priority: 0.9 },
];

const blogUrls = [
   ...TopBusinessIdeasBlogsListSitemap,
   ...ManagementStrategiesListSitemap,
   ...MarketingStrategiesListSitemap,
   ...BuisnessOperationBlogsListSitemap,
   ...InnovativeBlogsListSitemap,
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
        <loc>${baseUrl}${blog.folderPath}/${blog.slug}</loc>
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


