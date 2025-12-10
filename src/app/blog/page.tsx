import React from 'react';
import { Metadata } from 'next';
import BlogListing from '@/components/Blog/BlogListing';
import { dummyPosts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore our collection of blogs, articles, and insights on technology, gaming, and more.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
            All Articles
          </h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Discover our latest insights, tutorials, and stories across technology, gaming, and lifestyle
          </p>
        </div>
        <BlogListing posts={dummyPosts} />
      </div>
    </div>
  );
}