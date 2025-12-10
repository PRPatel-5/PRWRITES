import { Post } from '@/types';

export const cx = (...classNames: (string | undefined | null | boolean)[]): string => 
  classNames.filter(Boolean).join(' ');

export const sortBlogs = (blogs: Post[]): Post[] => {
  return blogs
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
};