import { Metadata } from 'next';
import siteMetadata from '@/utils/siteMetaData';

export function siteBase(): string {
  return "https://prwrites.vercel.app";
}

export function defaultMetadata(): Metadata {
  return {
    title: "PRWRITES — Blogs, Reviews & Gaming News",
    description: "PRWRITES: Articles, gaming news, and deep-dive blogs about tech, games and current events.",
    keywords: [
      "PRWRITES","PRWRITES Blog","Gaming News","Tech Articles",
      "Game Reviews","Blog","News","PR Patel"
    ],
    metadataBase: new URL(siteBase()),
    alternates: { canonical: siteBase() },
    openGraph: {
      title: "PRWRITES — Blogs, Reviews & Gaming News",
      description: "PRWRITES: Articles, gaming news, and deep-dive blogs.",
      url: siteBase(),
      siteName: "PRWRITES",
      images: [{ url: `${siteBase()}/images/og-default.jpg`, width: 1200, height: 630 }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "PRWRITES — Blogs, Reviews & Gaming News",
      description: "PRWRITES: Articles, gaming news, and deep-dive blogs.",
      images: [`${siteBase()}/images/og-default.jpg`],
      creator: "@PRWRITES",
    }
  };
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const seoDescription = description || siteMetadata.description;
  const seoImage = image || siteMetadata.socialBanner;
  const seoUrl = url ? `${siteMetadata.siteUrl}${url}` : siteMetadata.siteUrl;

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: [...keywords, 'PRWRITES', 'blog', 'news', 'gaming', 'technology'],
    authors: [{ name: siteMetadata.author }],
    creator: siteMetadata.author,
    publisher: siteMetadata.title,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: seoUrl,
    },
    openGraph: {
      type,
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: siteMetadata.title,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'en_US',
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || [siteMetadata.author],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: '@prwrites',
      site: '@prwrites',
    },
    other: {
      'article:author': authors?.[0] || siteMetadata.author,
      'article:publisher': siteMetadata.title,
    },
  };

  return metadata;
}

export function generateBlogPostSEO(post: {
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  category: string;
  publishedAt: string;
  author: { name: string };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}) {
  return generateSEO({
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || [...post.tags, post.category.toLowerCase()],
    url: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    authors: [post.author.name],
    tags: post.tags,
  });
}

export function generatePageSEO(page: {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
}) {
  return generateSEO({
    title: page.title,
    description: page.description,
    url: page.url,
    keywords: page.keywords,
  });
}

// JSON-LD structured data generators
export function generateArticleJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author: { name: string };
  category: string;
  tags: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.title,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteMetadata.siteUrl}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteMetadata.siteUrl}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}/logo.png`,
    sameAs: [
      siteMetadata.social.twitter,
      siteMetadata.social.github,
      siteMetadata.social.linkedin,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteMetadata.email,
      contactType: 'customer service',
    },
  };
}