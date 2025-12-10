import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Post;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default',
  className 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Gaming: 'bg-accent-soft text-white',
      Tech: 'bg-primary-gold text-primary-navy',
      Review: 'bg-primary-blue text-white',
      Article: 'bg-primary-navy text-white',
      News: 'bg-red-500 text-white',
      Blog: 'bg-muted-gray text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-muted-gray text-white';
  };

  if (variant === 'featured') {
    return (
      <Link href={`/articles/${article.slug}`}>
        <article className={cn(
          'group bg-gradient-card-light dark:bg-gradient-card-dark rounded-xl overflow-hidden border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl',
          className
        )}>
          <div className="relative h-64 overflow-hidden">
            <Image
              src={article.image || '/blog/default.jpg'}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className={cn('px-3 py-1 rounded-full text-xs font-medium', getCategoryColor(article.category))}>
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-muted-gray mb-3">
              <span>{formatDate(article.publishedAt)}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
              <span className="mx-2">•</span>
              <span>{article.author.name}</span>
            </div>
            <h3 className="font-heading text-xl font-semibold text-text-dark dark:text-text-light mb-3 group-hover:text-primary-gold transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-muted-gray mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-primary-gold/10 text-primary-gold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`}>
      <article className={cn(
        'group bg-gradient-card-light dark:bg-gradient-card-dark rounded-lg overflow-hidden border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-md hover:shadow-xl',
        className
      )}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image || '/blog/default.jpg'}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className={cn('px-2 py-1 rounded-full text-xs font-medium', getCategoryColor(article.category))}>
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center text-xs text-muted-gray mb-2">
            <span>{formatDate(article.publishedAt)}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="font-heading text-lg font-semibold text-text-dark dark:text-text-light mb-2 group-hover:text-primary-gold transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-gray text-sm line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          <div className="text-xs text-muted-gray">
            By {article.author.name}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;