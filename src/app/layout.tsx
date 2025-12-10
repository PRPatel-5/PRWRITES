import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRWRITES - Crafted Narratives",
  description: "Your premier destination for expertly crafted content spanning gaming, technology, and breaking news.",
  keywords: ["blog", "gaming", "technology", "news", "articles"],
  authors: [{ name: "PRWRITES Team" }],
  openGraph: {
    title: "PRWRITES - Crafted Narratives",
    description: "Expertly crafted content spanning gaming, technology, and breaking news",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}