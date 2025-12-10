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
  title: 'Gaming News',
  description: 'Latest gaming news, reviews, and insights from the world of video games.',
};

export default function GamingPage() {
  const gamingPosts = dummyPosts.filter(post => post.category === 'Gaming');
  const featuredGaming = gamingPosts.filter(post => post.isFeatured);
  const latestGaming = gamingPosts.slice(0, 6);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
            Gaming News
          </h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Stay updated with the latest gaming news, reviews, and industry insights
          </p>
        </div>

        {/* Top Gaming Headlines */}
        {featuredGaming.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8">
              Top Gaming Headlines
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredGaming.slice(0, 2).map((post) => (
                <Card key={post.id} className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="gaming">Gaming</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-slate mb-3">
                      <span>{formatDate(post.createdAt)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary dark:text-secondary mb-3 group-hover:text-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
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
          </section>
        )}

        {/* Platform Tags Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8">
            Browse by Platform
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['PC', 'PlayStation', 'Xbox', 'Nintendo', 'Mobile', 'VR', 'Indie', 'AAA'].map((platform) => (
              <Card key={platform} className="group text-center cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary dark:text-secondary group-hover:text-accent transition-colors">
                    {platform}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Gaming News */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
              Latest Gaming News
            </h2>
            <Link href="/blog?category=gaming">
              <Button variant="outline">View All Gaming</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestGaming.map((post) => (
              <Card key={post.id} className="group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="gaming">Gaming</Badge>
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
                  <p className="text-slate text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Releases */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8">
            Upcoming Releases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Game Title 1', date: '2024-03-15', platform: 'PC, PS5' },
              { title: 'Game Title 2', date: '2024-04-20', platform: 'Xbox, PC' },
              { title: 'Game Title 3', date: '2024-05-10', platform: 'Nintendo Switch' },
              { title: 'Game Title 4', date: '2024-06-05', platform: 'Multi-platform' }
            ].map((game, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary dark:text-secondary mb-2">
                    {game.title}
                  </h3>
                  <p className="text-slate text-sm mb-1">{game.date}</p>
                  <p className="text-slate text-xs">{game.platform}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}