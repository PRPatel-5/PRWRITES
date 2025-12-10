import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-light dark:bg-gradient-dark overflow-hidden">
      {/* Cinematic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-gold opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-navy opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark dark:text-text-light mb-6 leading-tight">
              Crafted Narratives,{' '}
              <span className="text-primary-gold">Curated Gaming</span>{' '}
              & News
            </h1>
            <p className="text-lg md:text-xl text-muted-gray mb-8 leading-relaxed max-w-2xl">
              PRWRITES delivers premium editorial content spanning in-depth articles, 
              gaming insights, and tech reviews. Where storytelling meets expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/articles">
                <Button size="lg" className="w-full sm:w-auto">
                  Read Latest Articles
                </Button>
              </Link>
              <Link href="/gaming">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                >
                  Gaming & Esports News
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Featured Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'The Future of Gaming AI', category: 'Gaming', image: '/api/placeholder/300/200' },
              { title: 'Tech Review: Latest Hardware', category: 'Tech', image: '/api/placeholder/300/200' },
              { title: 'Industry Deep Dive', category: 'Article', image: '/api/placeholder/300/200' },
              { title: 'Breaking: Major Update', category: 'News', image: '/api/placeholder/300/200' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-gradient-card-light dark:bg-gradient-card-dark rounded-lg overflow-hidden border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                <div className="h-32 bg-gradient-to-br from-primary-navy/20 to-primary-blue/20 flex items-center justify-center">
                  <span className="text-primary-gold font-heading font-semibold">{item.category}</span>
                </div>
                <div className="p-3">
                  <h3 className="font-heading font-semibold text-sm text-text-dark dark:text-text-light group-hover:text-primary-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;