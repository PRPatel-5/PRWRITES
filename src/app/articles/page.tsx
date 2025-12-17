import ArticlesPageClient from "./ArticlesPageClient";
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...defaultMetadata(),
  title: "PRWRITES — Articles, Blogs, Gaming & Tech News",
  description:
    "PRWRITES is your hub for trending blogs, tech insights, gaming news, entertainment stories, tutorials, and creative articles crafted for modern readers.",
  keywords: [
    "PRWRITES",
    "PR WRITES",
    "PRWrites Articles",
    "Articles Platform India",
    "Gaming News",
    "Tech News",
    "Entertainment News",
    "Articles",
    "Creative Writing",
    "Latest Articless",
    "Modern Web Articless",
    "Next.js Articles",
    "React Articles",
    "PR Patel",
    "News Website",
  ],
  metadataBase: new URL("https://prwrites.vercel.app/"),
  alternates: {
    canonical: "https://prwrites.vercel.app/",
  },
  openGraph: {
    title: "PRWRITES — Blogs, Gaming News & Creative Stories",
    description:
      "Discover trending blogs, tutorials, articles, and gaming insights from PRWRITES — crafted for passionate readers.",
    url: "https://prwrites.vercel.app/",
    siteName: "PRWRITES",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/prwrites-og-banner.png", // Add your OG image here
        width: 1200,
        height: 630,
        alt: "PRWRITES — Blogs, Gaming & News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRWRITES — Blogs, Articles & Gaming Insights",
    description:
      "Read the latest blogs, entertainment stories, articles, and gaming news at PRWRITES.",
    creator: "@prwrites",
    images: ["/images/prwrites-og-banner.png"],
  },
};



export default function BlogPage() {
  return <ArticlesPageClient />;
}