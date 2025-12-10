import React from 'react';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import Button from '@/components/ui/Button';
import { mockArticles } from '@/data/articles';

const LatestArticles: React.FC = () => {
  const latestArticles = mockArticles.slice(0, 6);
  const categories = ['All', 'Articles', 'Blogs', 'Tech', 'Gaming'];

  return (
    <section className="py-16 bg-gradient-card-light dark:bg-gradient-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark dark:text-text-light mb-4">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-primary-gold mx-auto mb-6"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                index === 0
                  ? 'bg-gradient-gold text-primary-navy shadow-lg'
                  : 'bg-primary-gold/10 text-primary-navy dark:text-text-light hover:bg-gradient-gold hover:text-primary-navy'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/articles">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;