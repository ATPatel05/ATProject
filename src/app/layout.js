import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Latest Mobile phones buy online in India, USA, Canada | SkillUpLines",
    template: "%s | SkillUpLines",
  },
  description: "Buy All Brand Mobile Phones with Full Specifications Online at Best Prices on Amazon. Shop Top Mobiles, Headphones, Cameras, Smart Watches & Accessories in India, USA, Canada, Germany & UK.",
  keywords: [
    "mobile",
    "phone",
    "Samsung",
    "Apple",
    "Google Pixel",
    "OnePlus",
    "Oppo",
    "XiaoMI",
    "Vivo",
    "Realme",
    "Doogoo",
    "IQOO",
    "Blackview",
    "Motarola",
    "Lava",
    "Poco",
    "Samsung latest Phone",
    "Apple latest Phone",
    "Google Pixel latest Phone",
    "OnePlus latest Phone",
    "Oppo latest Phone",
    "XiaoMI latest Phone",
    "Vivo latest Phone",
    "Realme latest Phone",
    "Doogoo latest Phone",
    "IQOO latest Phone",
    "Blackview latest Phone",
    "Motarola latest Phone",
    "Lava latest Phone",
    "Poco latest Phone",
    "cellphone",
    "information",
    "info",
    "specs",
    "specification",
    "Latest Mobile Phones",
    "All Mobile Phones",
    "Latest Phones",
    "Latest Phones Specification",
    "Latest 2025 Phones ",
    "All Brands Mobile Phones",
    "Latest Smart Phones",
    "Phone Full Specifications",
    "Phone Details",
    "phone Price",
    "phone Prices",
    "low price phones",
    "low price phone",
    "Best Phone",
    "Best Phones",
  ],
  metadataBase: new URL("https://www.skilluplines.com"),
  alternates: {
    canonical: "https://www.skilluplines.com",
  },
  authors: [{ name: "SkillUpLines Team", url: "https://www.skilluplines.com/about" }],
  creator: "SkillUpLines Team",
  publisher: "SkillUpLines",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Latest Mobile phones buy online Amazon in india, USA, Canada",
    description: "Buy All Brand Mobile Phones with Full Specifications Online at Best Prices on Amazon. Shop Top Mobiles, Headphones, Cameras, Smart Watches & Accessories in India, USA, Canada, Germany & UK.",
    url: "https://www.skilluplines.com",
    siteName: "SkillUpLines",
    // images: [
    //   {
    //     url: "https://www.skilluplines.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "SkillUpLines – Smart Business & Marketing Tips",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillUpLines – Latest Mobile phones buy online Amazon in india, USA, Canada",
    description: "Buy All Brand Mobile Phones with Full Specifications Online at Best Prices on Amazon. Shop Top Mobiles, Headphones, Cameras, Smart Watches & Accessories in India, USA, Canada, Germany & UK.",
    // images: ["https://www.skilluplines.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  category: "Latest Mobile Phones, amazon price, Phone Full Specification, Phone Details, Phone Price, Phone Full Details, detailed Description",
  applicationName: "SkillUpLines",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
