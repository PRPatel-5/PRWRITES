import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import FeaturedStories from '@/components/Home/FeaturedStories';
import LatestArticles from '@/components/Home/LatestArticles';
import GamingNews from '@/components/Home/GamingNews';
import TechReviews from '@/components/Home/TechReviews';
import Newsletter from '@/components/Home/Newsletter';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedStories />
      <LatestArticles />
      <GamingNews />
      <TechReviews />
      <Newsletter />
    </div>
  );
}