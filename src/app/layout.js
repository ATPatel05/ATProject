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
    default: "SkillUpLines – Business Ideas, Marketing Tips, and Growth Strategies",
    template: "%s | SkillUpLines",
  },
  description: "Discover the best business ideas, smart marketing strategies, and expert management tips to grow your business with SkillUpLines.",
  keywords: [
    "business ideas",
    "small business",
    "startups",
    "marketing strategies",
    "branding",
    "SkillUpLines",
    "management tips",
    "entrepreneurship",
    "online business",
    "growth hacking"
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
    nocache: false,
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
    title: "SkillUpLines – Business Ideas & Marketing Tips",
    description: "Explore SkillUpLines for the latest in business ideas, entrepreneurship tips, marketing strategies, and financial insights.",
    url: "https://www.skilluplines.com",
    siteName: "SkillUpLines",
    images: [
      {
        url: "https://www.skilluplines.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkillUpLines – Smart Business & Marketing Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillUpLines – Smart Business Ideas & Marketing Tips",
    description: "Get the latest and most innovative ideas in business, growth, branding, and strategy – only on SkillUpLines.",
    images: ["https://www.skilluplines.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Business, Marketing, Entrepreneurship",
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
