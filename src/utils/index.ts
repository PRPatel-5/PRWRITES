import { compareDesc, parseISO } from 'date-fns';
import { Post } from '@/types';

export const cx = (...classNames: (string | undefined | null | boolean)[]): string => 
  classNames.filter(Boolean).join(' ');

export const sortBlogs = (blogs: Post[]): Post[] => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );
};