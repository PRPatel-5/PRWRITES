import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { dummyPosts } from '@/data/posts';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest tech news, industry updates, and breaking stories from the digital world.',
};

export default function NewsPage() {
  const newsPosts = dummyPosts.filter(post => post.category === 'News' || post.category === 'Tech');
  const breakingNews = newsPosts.slice(0, 1);
  const latestNews = newsPosts.slice(1, 7);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
            Latest News
          </h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Stay informed with breaking news, tech updates, and industry insights
          </p>
        </div>

        {/* Breaking News */}
        {breakingNews.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full animate-pulse">
                BREAKING
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
                Breaking News
              </h2>
            </div>
            
            {breakingNews.map((post) => (
              <Card key={post.id} className="group overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="news">Breaking</Badge>
                      <span className="text-slate text-sm">{formatDate(post.createdAt)}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-4 group-hover:text-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate mb-6 text-lg">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button>Read Full Story</Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </section>
        )}

        {/* News Categories */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8">
            News Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Tech', icon: '💻', count: 24 },
              { name: 'AI & ML', icon: '🤖', count: 18 },
              { name: 'Startups', icon: '🚀', count: 15 },
              { name: 'Crypto', icon: '₿', count: 12 },
              { name: 'Mobile', icon: '📱', count: 20 },
              { name: 'Web Dev', icon: '🌐', count: 16 },
              { name: 'Security', icon: '🔒', count: 14 },
              { name: 'Cloud', icon: '☁️', count: 11 }
            ].map((category) => (
              <Card key={category.name} className="group text-center cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-primary dark:text-secondary group-hover:text-accent transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-slate text-sm">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
              Latest Updates
            </h2>
            <Link href="/blog?category=news">
              <Button variant="outline">View All News</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((post) => (
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
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-slate/10 text-slate rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}