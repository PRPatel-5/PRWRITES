export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Blog' | 'Gaming' | 'News' | 'Tech' | 'Article';
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  image: string;
  isFeatured: boolean;
  isPublished: boolean;
  readingTime: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
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
    dribbble?: string;
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
  topic: string;
}