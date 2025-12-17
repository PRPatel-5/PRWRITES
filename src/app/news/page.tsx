import Link from 'next/link';
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import { breakingNews, latestNews } from '@/data/news';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Combine all news items to search for the slug
  const allNews = [...breakingNews, ...latestNews];
  const news = allNews.find(item => item.id === slug);

  if (!news) {
     return {
      title: "Latest News & Breaking Stories | PRWRITES",
  description:
    "Read breaking news, trending stories, politics, technology highlights, and global updates — all curated for you on PRWRITES.",
  keywords: [
    "latest news",
    "breaking news",
    "trending news",
    "India news",
    "world news",
    "tech news",
    "gaming news",
    "PRWRITES news",
  ],
  alternates: {
    canonical: "https://prwrites.vercel.app/news",
  },
  openGraph: {
    title: "PRWRITES — Latest News & Breaking Headlines",
    description:
      "Stay updated with the latest headlines, politics, technology, gaming, entertainment, and international news.",
    url: "https://prwrites.vercel.app/news",
    type: "website",
    images: [
      {
        url: "/images/news-og.jpg",
        width: 1200,
        height: 630,
        alt: "PRWRITES Latest News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRWRITES — Latest News & Breaking Headlines",
    description:
      "Stay updated with the latest headlines, politics, technology, gaming, entertainment, and international news.",
    images: ["/images/news-og.jpg"],
  },
    };
  }

  const cleanTitle = `${news.title} | PRWRITES News`;
  const cleanDescription = news.excerpt.substring(0, 160);

  return {
    title: cleanTitle,
    description: cleanDescription,
    alternates: {
      canonical: `https://prwrites.vercel.app/news/${slug}`,
    },
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: `https://prwrites.vercel.app/news/${slug}`,
      type: "article",
      images: [
        {
          url: "/images/news-og.jpg",
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: cleanDescription,
      images: ["/images/news-og.jpg"],
    },
  };
}

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
              <a
                key={news.id}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <p className="text-sm text-gold-300 mb-2">{news.date}</p>
                <h3 className="text-2xl font-bold mb-3">{news.title}</h3>
                <p className="text-slate-200">{news.excerpt}</p>
              </a>
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
                    
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-navy-600 dark:text-slate-300 font-semibold hover:text-gold-600 transition-colors"
                    >
                      Read Full Story
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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