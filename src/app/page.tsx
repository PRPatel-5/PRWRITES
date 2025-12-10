import Link from 'next/link';
import { posts } from '@/data/posts';

const featuredPosts = posts.filter(post => post.featured).slice(0, 3);

const categories = [
  {
    name: 'Gaming',
    icon: '🎮',
    count: posts.filter(p => p.category === 'Gaming').length,
    color: 'from-purple-500 to-pink-500',
    href: '/gaming',
  },
  {
    name: 'Technology',
    icon: '💻',
    count: posts.filter(p => p.category === 'Tech').length,
    color: 'from-blue-500 to-cyan-500',
    href: '/blog?category=tech',
  },
  {
    name: 'News',
    icon: '📰',
    count: posts.filter(p => p.category === 'News').length,
    color: 'from-green-500 to-emerald-500',
    href: '/news',
  },
  {
    name: 'Articles',
    icon: '📝',
    count: posts.filter(p => p.category === 'Article').length,
    color: 'from-orange-500 to-red-500',
    href: '/blog?category=article',
  },
];

const stats = [
  { label: 'Articles Published', value: `${posts.length}+` },
  { label: 'Active Readers', value: '50K+' },
  { label: 'Countries Reached', value: '120+' },
  { label: 'Expert Writers', value: '25+' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-gold-300 text-sm font-medium">
                  ✨ Welcome to PRWRITES
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Crafted
                <span className="block text-gold-400 text-glow-gold">
                  Narratives
                </span>
                for Modern Readers
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Discover expertly curated content spanning gaming, technology, and breaking news. 
                Where storytelling meets innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="btn-gold">
                  Explore Stories
                  <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/about"
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-bold text-gold-400">{stat.value}</p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-navy-500/20 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-navy-600 to-navy-800" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-6 max-w-xs animate-float z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center text-2xl">
                    ✍️
                  </div>
                  <div>
                    <p className="text-white font-semibold">New Article</p>
                    <p className="text-slate-300 text-sm">Just Published</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white dark:bg-slate-900 py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-cream-100 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Dive into your favorite topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="premium-card p-8 text-center card-hover-effect group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-600 dark:text-slate-200 mb-2">
                  {category.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  {category.count} articles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Hand-picked articles from our expert writers
              </p>
            </div>
            <Link 
              href="/blog"
              className="hidden md:block text-navy-600 font-semibold hover:text-gold-500 transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="premium-card overflow-hidden card-hover-effect group"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-500 to-navy-700">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-navy-600">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-600 dark:text-slate-200 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{post.author.name}</span>
                    <Link
                      href={`/blog/${post.slug}`}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animated-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join thousands of readers who trust PRWRITES for quality content
          </p>
          <Link href="/contact" className="btn-gold shine-effect text-lg px-8 py-4">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}