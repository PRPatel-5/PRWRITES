'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/data/posts';

// Remove categories filter since this page only shows Blog posts

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // Only show Blog category posts
      const isBlogPost = post.category === 'Blog';
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return isBlogPost && matchesSearch;
    });
  }, [searchQuery]);

  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }));
  };

  const getCategoryGradient = (category: string) => {
    switch(category) {
      case 'Gaming': return 'from-purple-500 to-purple-700';
      case 'Tech': return 'from-blue-500 to-blue-700';
      case 'News': return 'from-green-500 to-green-700';
      case 'Article': return 'from-orange-500 to-orange-700';
      default: return 'from-navy-500 to-navy-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Gaming': return '🎮';
      case 'Tech': return '💻';
      case 'News': return '📰';
      case 'Article': return '📝';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with SVG Background */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-32 overflow-hidden">
        {/* Animated SVG Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mainBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#1e3a5f', stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:'#0f1d30', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#1e3a5f', stopOpacity:1}} />
              </linearGradient>
              
              <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#fbbf24', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#f59e0b', stopOpacity:1}} />
              </linearGradient>
              
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#fbbf24" opacity="0.15"/>
              </pattern>
            </defs>
            
            <rect width="1200" height="400" fill="url(#mainBg)"/>
            <rect width="1200" height="400" fill="url(#dots)"/>
            
            <g opacity="0.6" className="animate-pulse-slow">
              <circle cx="200" cy="200" r="150" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
              <circle cx="200" cy="200" r="120" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4"/>
              
              <circle cx="1000" cy="200" r="150" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3"/>
              <circle cx="1000" cy="200" r="120" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.4"/>
            </g>
            
            <g transform="translate(400, 100)">
              <rect x="0" y="0" width="400" height="200" rx="10" fill="#f8fafc" opacity="0.95"/>
              <rect x="0" y="0" width="40" height="200" rx="10" fill="url(#goldShine)"/>
              
              <g opacity="0.7">
                <line x1="60" y1="40" x2="360" y2="40" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"/>
                <line x1="60" y1="60" x2="360" y2="60" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"/>
                <line x1="60" y1="80" x2="320" y2="80" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"/>
                <line x1="60" y1="110" x2="360" y2="110" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"/>
                <line x1="60" y1="130" x2="360" y2="130" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"/>
                <line x1="60" y1="150" x2="300" y2="150" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"/>
              </g>
              
              <text x="20" y="45" fontSize="24" fill="#1e3a5f" textAnchor="middle">📝</text>
              <text x="20" y="100" fontSize="24" fill="#1e3a5f" textAnchor="middle">💡</text>
              <text x="20" y="155" fontSize="24" fill="#1e3a5f" textAnchor="middle">✨</text>
            </g>
            
            <g opacity="0.8">
              <g transform="translate(150, 80)">
                <rect x="0" y="0" width="100" height="40" rx="20" fill="#8b5cf6"/>
                <text x="50" y="26" fontFamily="sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Gaming</text>
              </g>
              
              <g transform="translate(900, 280)">
                <rect x="0" y="0" width="80" height="40" rx="20" fill="#3b82f6"/>
                <text x="40" y="26" fontFamily="sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">Tech</text>
              </g>
              
              <g transform="translate(950, 90)">
                <rect x="0" y="0" width="85" height="40" rx="20" fill="#10b981"/>
                <text x="42" y="26" fontFamily="sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">News</text>
              </g>
            </g>
            
            <g fill="#fbbf24" opacity="0.6">
              <circle cx="330" cy="280" r="4"/>
              <circle cx="880" cy="180" r="3"/>
              <circle cx="250" cy="150" r="3"/>
              <circle cx="1080" cy="250" r="4"/>
            </g>
          </svg>
        </div>

        {/* Decorative animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-center space-x-2 text-slate-400 text-sm">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Blog</span>
          </div>

          {/* Main heading with animation */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
            Explore Our
            <span className="block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent animate-gradient">
              Stories & Insights
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Discover insights, tutorials, and stories from our expert writers covering the latest in technology, gaming, and digital innovation.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-1">{posts.filter(p => p.category === 'Blog').length}+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Blog Posts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-1">5+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-1">10K+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Readers</div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1125,90 1200,80 L1200,120 L0,120 Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white shadow-xl relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar with icon */}
            <div className="relative flex-1 max-w-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="relative w-full px-4 py-4 pl-12 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all shadow-sm hover:shadow-md"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-gold-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Blog Category Info */}
            <div className="flex items-center gap-3">
              <div className="px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-navy-600 to-navy-700 text-white shadow-lg">
                📝 Blog Posts
              </div>
            </div>
          </div>

          {/* Results Count with better styling */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
            <div className="text-slate-600 font-medium">
              <span className="text-navy-600 font-bold text-lg">{filteredPosts.length}</span>
              <span className="ml-2">article{filteredPosts.length !== 1 ? 's' : ''}</span>
              <span className="ml-1">
                in <span className="text-gold-600 font-semibold">Blog</span>
              </span>
              {searchQuery && (
                <span className="ml-1">
                  matching <span className="text-gold-600 font-semibold">"{searchQuery}"</span>
                </span>
              )}
            </div>
            
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-slate-500 hover:text-navy-600 font-medium flex items-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear search
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-navy-500 via-gold-500 to-gold-600 rounded-full flex items-center justify-center text-5xl text-white shadow-2xl animate-bounce-slow">
                📝
              </div>
              <h3 className="text-3xl font-bold text-navy-600 mb-4">No articles found</h3>
              <p className="text-slate-600 mb-8 text-lg">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-700 text-white rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-slate-200 hover:border-gold-400 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Post Image */}
                  <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${getCategoryGradient(post.category)}`}>
                    {post.image && !imageErrors[post.id] ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={() => handleImageError(post.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-7xl mb-3 animate-pulse-slow">{getCategoryIcon(post.category)}</div>
                          <div className="text-sm font-bold opacity-90 uppercase tracking-wider">{post.category}</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm ${
                        post.category === 'Gaming' ? 'bg-purple-500/90 text-white' :
                        post.category === 'Tech' ? 'bg-blue-500/90 text-white' :
                        post.category === 'News' ? 'bg-green-500/90 text-white' :
                        post.category === 'Article' ? 'bg-orange-500/90 text-white' :
                        'bg-slate-500/90 text-white'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Featured badge */}
                    {post.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1.5 bg-gold-500 text-navy-900 rounded-full text-xs font-bold shadow-lg animate-pulse-slow backdrop-blur-sm">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6 space-y-4">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-navy-700 group-hover:text-gold-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium hover:bg-gold-100 hover:text-gold-700 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-navy-600 to-gold-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                          {post.author.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-sm text-slate-700 font-semibold block">
                            {post.author.name}
                          </span>
                          <span className="text-xs text-slate-500">Author</span>
                        </div>
                      </div>
                      {post.externalUrl ? (
                        <a
                          href={post.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-navy-600 font-bold hover:text-gold-600 transition-colors group/link"
                        >
                          Read
                          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-navy-600 font-bold hover:text-gold-600 transition-colors group/link"
                        >
                          Read
                          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
              Stay Connected
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Never Miss an <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Update</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, exclusive insights, and expert tips delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-slate-900 placeholder-slate-400 shadow-xl"
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-lg font-bold hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          
          <p className="mt-6 text-slate-400 text-sm">
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-25px) translateX(5px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}