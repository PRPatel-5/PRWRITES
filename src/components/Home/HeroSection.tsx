import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-charcoal text-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to{' '}
            <span className="text-accent">PRWRITES</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate mb-8 max-w-3xl mx-auto">
            Your premier destination for blogs, long-form articles, gaming news, and general news. 
            Discover engaging content across technology, gaming, and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/blog">
              <Button size="lg" className="w-full sm:w-auto">
                Read Latest Stories
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;