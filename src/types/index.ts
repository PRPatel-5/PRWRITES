export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  category: 'Blog' | 'Gaming' | 'Tech' | 'News' | 'Article';
  tags: string[];
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  featured: boolean;
  image?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}