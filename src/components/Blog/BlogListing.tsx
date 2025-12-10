'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SearchBar from '@/components/ui/SearchBar';
import CategoryFilter from '@/components/Blog/CategoryFilter';
import { formatDate } from '@/lib/utils';

interface BlogListingProps {
  posts: Post[];
}

const BlogListing: React.FC<BlogListingProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  const filteredPosts = useMemo(() => {
    let filtered = posts.filter(post => post.isPublished);

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortBy === 'latest') {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="w-full lg:w-96">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <div className="flex items-center gap-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular')}
            className="px-4 py-2 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      <div className="text-slate">
        {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={post.category.toLowerCase() as any}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-slate mb-3">
                  <span>{formatDate(post.createdAt)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-lg font-bold text-primary dark:text-secondary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate/10 text-slate rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-slate text-lg mb-4">No articles found matching your criteria.</div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-accent hover:text-accent/80 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogListing;