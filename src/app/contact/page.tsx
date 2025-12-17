import ContactClient from "./ContactClient";
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...defaultMetadata(),
   title: "Contact Us | PRWRITES",
  description:
    "Have questions, suggestions, or business inquiries? Get in touch with PRWRITES — your trusted platform for blogs, gaming news, tech updates, and articles.",
  keywords: [
    "contact PRWRITES",
    "PRWRITES support",
    "blog contact page",
    "gaming news inquiries",
    "tech article collaboration",
    "write for us PRWRITES",
    "business inquiries PRWRITES",
  ],
  alternates: {
    canonical: "https://prwrites.vercel.app/contact",
  },
  openGraph: {
    title: "Contact PRWRITES",
    description:
      "Reach out to our team for collaborations, support, feedback, or partnership opportunities.",
    url: "https://prwrites.vercel.app/contact",
    siteName: "PRWRITES",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://prwrites.vercel.app/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "PRWRITES Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PRWRITES",
    description:
      "Have a question? Contact PRWRITES for collaborations, support, or media inquiries.",
    images: [
      "https://prwrites.vercel.app/images/contact-og.jpg",
    ],
  },
};



export default function ContactPage() {
  return <ContactClient />;
}