import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gaming' | 'tech' | 'news' | 'blog' | 'article';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-slate/20 text-slate dark:bg-slate/30 dark:text-slate',
    gaming: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    tech: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    news: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    blog: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    article: 'bg-accent/20 text-accent dark:bg-accent/30 dark:text-accent'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;