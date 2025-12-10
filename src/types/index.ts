export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'Article' | 'Blog' | 'Gaming' | 'News' | 'Review' | 'Tech';
  excerpt: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  isFeatured?: boolean;
  content?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
  color?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  socialBanner: string;
  author: string;
  email: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface ThemeContextType {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  topic: 'General' | 'Business' | 'Collaboration';
}