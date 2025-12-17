'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on search
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-navy-600 to-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gold-400">Articles</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            In-depth articles, guides, and thought-provoking content covering technology, society, finance, and more.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-6 text-center text-slate-600">
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-navy-500 to-gold-500 rounded-full flex items-center justify-center text-4xl text-white">
                📝
              </div>
              <h3 className="text-2xl font-bold text-navy-600 mb-4">No articles found</h3>
              <p className="text-slate-600 mb-6">
                Try adjusting your search terms.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-gradient-to-r from-navy-500 to-navy-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-slate-200"
                >
                  {/* Post Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-2">📝</div>
                          <div className="text-sm font-semibold opacity-80">Article</div>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-500 text-white">
                        Article
                      </span>
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-2 py-1 bg-gold-500 text-navy-900 rounded-full text-xs font-bold">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6 space-y-4">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-navy-600 group-hover:text-gold-600 transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                          +{article.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-navy-500 to-gold-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {article.author.name.charAt(0)}
                        </div>
                        <span className="text-sm text-slate-600 font-medium">
                          {article.author.name}
                        </span>
                      </div>
                      <Link
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center text-navy-600 font-semibold hover:text-gold-600 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}