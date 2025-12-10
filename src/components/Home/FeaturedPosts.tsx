import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-4">
          Featured Articles
        </h2>
        <p className="text-slate text-lg max-w-2xl mx-auto">
          Discover our handpicked selection of the most engaging and insightful content
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.slice(0, 2).map((post, index) => (
          <Card key={post.id} className="group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={post.image || '/blog/default.jpg'}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant={post.category.toLowerCase() as any}>
                  {post.category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-slate mb-3">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
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
  );
};

export default FeaturedPosts;