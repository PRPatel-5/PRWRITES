import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

interface LatestPostsProps {
  posts: Post[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-4">
            Latest Stories
          </h2>
          <p className="text-slate text-lg">
            Stay updated with our newest content
          </p>
        </div>
        <Link href="/blog">
          <Button variant="outline">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="group overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || '/blog/default.jpg'}
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
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-primary dark:text-secondary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-slate text-sm line-clamp-3 mb-4">
                {post.excerpt}
              </p>
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
    </section>
  );
};

export default LatestPosts;