import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import siteMetadata from '@/utils/siteMetaData';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          manrope.variable,
          'font-mr bg-cream dark:bg-charcoal text-primary dark:text-secondary'
        )}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`try {
    if (typeof window !== 'undefined' && (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches))) {
      document.documentElement.classList.add('dark')
    }
  } catch (e) {}`}
        </Script>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}