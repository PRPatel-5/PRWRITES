import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // <-- IMPORTANT
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { generateSEO, generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo";
import siteMetadata from "@/utils/siteMetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSEO({
  title: "PRWRITES - Your Premier Blog & News Platform",
  description: "Discover expertly crafted content on gaming, technology, and breaking news. Join thousands of readers exploring quality articles, reviews, and insights.",
  keywords: ["blog", "gaming news", "technology articles", "breaking news", "tech reviews", "gaming reviews"],
  url: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={generateWebsiteJsonLd()} />
        <JsonLd data={generateOrganizationJsonLd()} />
        <link rel="canonical" href={siteMetadata.siteUrl} />
          {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5VQ75C5RTJ"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VQ75C5RTJ');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    
  );
}