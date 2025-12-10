import React from 'react';
import ArticleCard from '@/components/ui/ArticleCard';
import { mockArticles } from '@/data/articles';

const FeaturedStories: React.FC = () => {
  const featuredArticles = mockArticles.filter(article => article.isFeatured);

  return (
    <section className="py-16 bg-gradient-light dark:bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark dark:text-text-light mb-4">
            Featured Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gold to-primary-blue mx-auto mb-4"></div>
          <p className="text-muted-gray text-lg max-w-2xl mx-auto">
            Handpicked narratives that showcase the best of gaming, technology, and digital culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;