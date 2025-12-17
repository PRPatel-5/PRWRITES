import { MetadataRoute } from 'next';
import { posts } from '@/data/posts';
import siteMetadata from '@/utils/siteMetaData';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${siteMetadata.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${siteMetadata.siteUrl}/gaming`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${siteMetadata.siteUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${siteMetadata.siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteMetadata.siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: 'https://prwrites.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://prwrites.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://prwrites.vercel.app/news',
      lastModified: new Date(),
    },
  ];

  const blogPosts = posts.map((post) => ({
    url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}