import Link from 'next/link';

const breakingNews = [
  {
    id: 1,
    title: 'Major Tech Company Announces Groundbreaking AI Innovation',
    excerpt: 'Revolutionary artificial intelligence system promises to transform multiple industries',
    category: 'Tech',
    date: '2 hours ago',
  },
  {
    id: 2,
    title: 'Global Gaming Conference Reveals Industry Trends',
    excerpt: 'Industry leaders gather to discuss the future of interactive entertainment',
    category: 'Gaming',
    date: '5 hours ago',
  },
];

const latestNews = [
  {
    id: 3,
    title: 'New Streaming Platform Launches with Exclusive Content',
    excerpt: 'Entertainment giant enters the streaming wars with innovative features',
    category: 'Entertainment',
    date: '1 day ago',
  },
  {
    id: 4,
    title: 'Cybersecurity Alert: Major Data Breach Discovered',
    excerpt: 'Security researchers uncover vulnerability affecting millions of users',
    category: 'Security',
    date: '1 day ago',
  },
  {
    id: 5,
    title: 'Space Exploration Milestone Achieved',
    excerpt: 'Historic achievement marks new era in commercial space travel',
    category: 'Science',
    date: '2 days ago',
  },
];

const categories = [
  { name: 'Technology', icon: '💻', count: 45 },
  { name: 'Gaming', icon: '🎮', count: 38 },
  { name: 'Science', icon: '🔬', count: 32 },
  { name: 'Business', icon: '💼', count: 28 },
  { name: 'Entertainment', icon: '🎬', count: 24 },
  { name: 'Security', icon: '🔒', count: 20 },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-7xl">📰</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest <span className="text-gold-400">News</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Stay informed with breaking news and industry updates
          </p>
        </div>
      </section>

      {/* Breaking News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white shadow-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
              🔴 BREAKING NEWS
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {breakingNews.map((news) => (
              <Link
                key={news.id}
                href={`/blog/${news.id}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <p className="text-sm text-gold-300 mb-2">{news.date}</p>
                <h3 className="text-2xl font-bold mb-3">{news.title}</h3>
                <p className="text-slate-200">{news.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold gradient-text">Latest Updates</h2>
            
            {latestNews.map((news) => (
              <article key={news.id} className="premium-card p-6 card-hover-effect group">
                <div className="flex items-start space-x-6">
                  <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-navy-500 to-navy-700 flex-shrink-0" />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-navy-500 text-white rounded-full text-sm font-semibold">
                        {news.category}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{news.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-navy-600 dark:text-slate-200 group-hover:text-gold-600 transition-colors">
                      {news.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400">{news.excerpt}</p>
                    
                    <Link
                      href={`/blog/${news.id}`}
                      className="inline-flex items-center text-navy-600 dark:text-slate-300 font-semibold hover:text-gold-600 transition-colors"
                    >
                      Read Full Story
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="premium-card p-6">
              <h3 className="text-2xl font-bold gradient-text mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/news?category=${category.name.toLowerCase()}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-navy-50 dark:hover:bg-slate-700 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-semibold text-navy-600 dark:text-slate-300 group-hover:text-gold-600 transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}