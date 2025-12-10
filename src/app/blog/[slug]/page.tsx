import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '@/data/posts';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - PRWRITES',
    };
  }

  return {
    title: post.seo?.title || `${post.title} - PRWRITES`,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-gold-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold-400">{post.category}</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              post.category === 'Gaming' ? 'bg-purple-500 text-white' :
              post.category === 'Tech' ? 'bg-blue-500 text-white' :
              post.category === 'News' ? 'bg-green-500 text-white' :
              post.category === 'Article' ? 'bg-orange-500 text-white' :
              'bg-slate-500 text-white'
            }`}>
              {post.category}
            </span>
            {post.featured && (
              <span className="ml-3 px-3 py-1 bg-gold-500 text-navy-900 rounded-full text-sm font-bold">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-sm">{post.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.tags.length} tags</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-navy max-w-none">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, (match) => {
                const level = match.trim().length;
                return `<h${level} class="text-${4-level}xl font-bold text-navy-600 mt-8 mb-4">`;
              }).replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-navy-700">$1</strong>')
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-navy-600 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 hover:bg-navy-50 text-slate-700 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-8 bg-gradient-to-r from-cream-100 to-cream-200 rounded-xl">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-gold-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-600 mb-2">
                About {post.author.name}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-navy-600 mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <span>📘</span>
              <span>Facebook</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
              <span>🐦</span>
              <span>Twitter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
              <span>💼</span>
              <span>LinkedIn</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
              <span>🔗</span>
              <span>Copy Link</span>
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-cream-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="premium-card overflow-hidden card-hover-effect group"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-500 to-navy-700">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-navy-600">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{formatDate(relatedPost.publishedAt)}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-navy-600 group-hover:text-gold-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-slate-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-navy-600 font-semibold hover:text-gold-600 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-600 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Subscribe to our newsletter for more insights and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}