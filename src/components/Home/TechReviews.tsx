import React from 'react';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import Button from '@/components/ui/Button';
import { mockArticles } from '@/data/articles';

const TechReviews: React.FC = () => {
  const techArticles = mockArticles.filter(article => 
    article.category === 'Tech' || article.category === 'Gaming'
  );

  return (
    <section className="py-16 bg-gradient-light dark:bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark dark:text-text-light mb-4">
            Tech & Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gold to-primary-navy mx-auto mb-4"></div>
          <p className="text-muted-gray text-lg max-w-2xl mx-auto">
            In-depth hardware reviews, software analysis, and tools for creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techArticles.map((article) => (
            <div key={article.id} className="relative">
              <ArticleCard article={article} />
              {article.category === 'Tech' && (
                <div className="absolute top-4 right-4 bg-primary-gold text-primary-navy px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <span>★</span>
                  <span>4.8</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Review Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Hardware Reviews', desc: 'GPUs, CPUs, and gaming gear', icon: '🔧' },
            { title: 'Game Reviews', desc: 'Latest releases and classics', icon: '🎮' },
            { title: 'Creator Tools', desc: 'Software and apps for creators', icon: '🎨' }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-card-light dark:bg-gradient-card-dark p-6 rounded-lg border border-primary-gold/20 text-center hover:border-primary-gold/40 transition-all duration-200 shadow-md hover:shadow-lg">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-heading font-semibold text-text-dark dark:text-text-light mb-2">
                {item.title}
              </h3>
              <p className="text-muted-gray text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/tech">
            <Button variant="outline">
              View All Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechReviews;