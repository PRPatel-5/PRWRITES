import Link from 'next/link';

const gamingNews = [
  {
    id: 1,
    title: 'Top 10 Most Anticipated Games of 2025',
    excerpt: 'From AAA blockbusters to innovative indies, here are the games everyone is talking about',
    platform: 'Multi-platform',
    date: 'March 15, 2024',
  },
  {
    id: 2,
    title: 'PlayStation 6 Rumors: What We Know So Far',
    excerpt: 'Industry insiders hint at groundbreaking features for the next generation console',
    platform: 'PlayStation',
    date: 'March 14, 2024',
  },
  {
    id: 3,
    title: 'Xbox Game Pass Gets Major Expansion',
    excerpt: 'Microsoft announces 50+ new titles coming to the subscription service',
    platform: 'Xbox',
    date: 'March 13, 2024',
  },
];

const platforms = [
  { name: 'PC', icon: '💻', color: 'from-blue-500 to-cyan-500' },
  { name: 'PlayStation', icon: '🎮', color: 'from-blue-600 to-blue-800' },
  { name: 'Xbox', icon: '🎯', color: 'from-green-500 to-green-700' },
  { name: 'Nintendo', icon: '🔴', color: 'from-red-500 to-pink-500' },
  { name: 'Mobile', icon: '📱', color: 'from-purple-500 to-indigo-500' },
  { name: 'VR', icon: '🥽', color: 'from-orange-500 to-red-500' },
];

export default function GamingPage() {
  return (
    <div className="min-h-screen">
      {/* Gaming Hero */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 animate-float">
            <span className="text-7xl">🎮</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gaming <span className="text-gold-400">News</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Latest updates, reviews, and insights from the gaming world
          </p>
        </div>
      </section>

      {/* Trending Games */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold gradient-text mb-8">Trending Now</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamingNews.map((news) => (
            <article
              key={news.id}
              className="premium-card overflow-hidden card-hover-effect group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-purple-600">
                    {news.platform}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">{news.date}</p>
                
                <h3 className="text-xl font-bold text-navy-600 dark:text-slate-200 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                  {news.excerpt}
                </p>
                
                <Link
                  href={`/blog/${news.id}`}
                  className="inline-flex items-center text-navy-600 dark:text-slate-300 font-semibold hover:text-gold-600 transition-colors"
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
      </section>

      {/* Platform Categories */}
      <section className="bg-gradient-to-b from-white to-cream-100 dark:from-slate-900 dark:to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">
            Browse by Platform
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={`/gaming?platform=${platform.name.toLowerCase()}`}
                className="premium-card p-6 text-center card-hover-effect group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {platform.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-600 dark:text-slate-200">{platform.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}