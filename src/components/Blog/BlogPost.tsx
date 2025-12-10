import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

interface BlogPostProps {
  post: Post;
  relatedPosts: Post[];
}

const BlogPost: React.FC<BlogPostProps> = ({ post, relatedPosts }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="mb-16">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant={post.category.toLowerCase() as any}>
              {post.category}
            </Badge>
            <span className="text-slate text-sm">{formatDate(post.publishedAt)}</span>
            <span className="text-slate text-sm">•</span>
            <span className="text-slate text-sm">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-secondary mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <div className="font-medium text-primary dark:text-secondary">
                  {post.author.name}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image || '/blog/default.jpg'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-primary dark:text-secondary leading-relaxed">
            <p className="mb-6">
              This is where the full article content would be rendered. In a real implementation, 
              you would use MDX or another markdown processor to render the content from the 
              post.content field.
            </p>
            <p className="mb-6">
              The content would include proper typography, code blocks, images, and other rich 
              content elements that make for an engaging reading experience.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8">Sample Heading</h2>
            <p className="mb-6">
              More content would follow here, properly formatted and styled for optimal readability.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate/20">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate/10 text-slate rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate/20">
          <h3 className="text-lg font-semibold text-primary dark:text-secondary mb-4">
            Share this article
          </h3>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="group overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={relatedPost.image || '/blog/default.jpg'}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary dark:text-secondary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-slate text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;