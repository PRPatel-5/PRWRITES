import React from 'react';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import Button from '@/components/ui/Button';
import { mockArticles } from '@/data/articles';

const GamingNews: React.FC = () => {
  const gamingArticles = mockArticles.filter(article => 
    article.category === 'Gaming' || article.tags.includes('Gaming')
  );

  return (
    <section className="py-16 bg-gradient-to-br from-primary-navy/5 via-primary-blue/5 to-accent-soft/5 dark:from-primary-navy/20 dark:via-primary-blue/20 dark:to-accent-soft/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-accent-soft text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              LIVE
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark dark:text-text-light">
              Gaming News & Esports
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-soft to-primary-gold mx-auto mb-4"></div>
          <p className="text-muted-gray text-lg max-w-2xl mx-auto">
            Stay ahead of the game with breaking news, reviews, and insights from the gaming world
          </p>
        </div>

        {/* Platform Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['PC', 'Console', 'Mobile', 'VR', 'Esports', 'Indie'].map((platform) => (
            <span
              key={platform}
              className="px-4 py-2 bg-accent-soft/10 text-accent-soft border border-accent-soft/20 rounded-full text-sm font-medium hover:bg-accent-soft hover:text-white transition-all duration-200 cursor-pointer"
            >
              {platform}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gamingArticles.slice(0, 3).map((article) => (
            <div key={article.id} className="relative">
              {article.tags.includes('AI') && (
                <div className="absolute -top-2 -right-2 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  BREAKING
                </div>
              )}
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gaming">
            <Button className="bg-gradient-to-r from-accent-soft to-primary-blue hover:opacity-90 text-white shadow-xl">
              Explore Gaming News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamingNews;