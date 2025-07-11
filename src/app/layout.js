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
    default: "Best business ideas to start in 2025 | SkillUpLines",
    template: "%s | SkillUpLines",
  },
  description: "Skilluplines provides the best small and successful business ideas to start with low investment and build a profitable business or successful company in 2025.",
  keywords: [
    "business",
    "company",
    "company ideas",
    "side job",
    "side jobs",
    "make money",
    "side jobs in 2025",
    "online business",
    "business ideas",
    "best business ideas",
    "best business idea",
    "business in 2025",
    "business in india",
    "online business ideas",
    "make money online",
    "best business to start in 2025",
    "business ideas to success in 2025",
    "successful business ideas in 2025",
    "low investment business ideas",
    "profitable business ideas in 2025",
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
  icons: {
    icon: "/favicon.ico",
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
