import React from 'react';
import { dummyPosts } from '@/data/posts';
import HeroSection from '@/components/Home/HeroSection';
import FeaturedPosts from '@/components/Home/FeaturedPosts';
import LatestPosts from '@/components/Home/LatestPosts';
import CategoriesGrid from '@/components/Home/CategoriesGrid';

export default function HomePage() {
  const featuredPosts = dummyPosts.filter(post => post.isFeatured);
  const latestPosts = dummyPosts.slice(0, 6);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <FeaturedPosts posts={featuredPosts} />
        <CategoriesGrid />
        <LatestPosts posts={latestPosts} />
      </div>
    </div>
  );
}