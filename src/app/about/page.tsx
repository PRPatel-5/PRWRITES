import type { Metadata } from 'next';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...defaultMetadata(),
  title: 'About PRWRITES - Your Premier Blog & News Platform',
  description: 'Learn about PRWRITES mission, our expert team, and why we created the ultimate destination for blogs, gaming news, technology insights, and breaking stories.',
  keywords: ['about PRWRITES', 'blog platform', 'news website', 'content creators', 'technology blog'],
  alternates: {
    canonical: 'https://prwrites.vercel.app/about',
  },
  openGraph: {
    title: 'About PRWRITES - Your Premier Blog & News Platform',
    description: 'Learn about PRWRITES mission, our expert team, and why we created the ultimate destination for blogs, gaming news, technology insights, and breaking stories.',
    url: 'https://prwrites.vercel.app/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-600 to-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gold-400">PRWRITES</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your premier destination for expert content, breaking news, and insightful analysis across technology, gaming, and beyond.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-navy-600 mb-8 text-center">Our Mission</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At PRWRITES, we believe in the power of quality content to inform, educate, and inspire. Our mission is to deliver expertly crafted articles, breaking news, and in-depth analysis that helps our readers stay ahead in an ever-evolving digital world.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We are committed to providing accurate, timely, and engaging content that serves our community of tech enthusiasts, gamers, professionals, and curious minds seeking reliable information.
            </p>
          </div>
        </section>

        {/* Why We Created PRWRITES */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-navy-600 mb-8 text-center">Why We Created PRWRITES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Quality Over Quantity</h3>
              <p className="text-slate-700">
                In a world flooded with information, we focus on delivering high-quality, well-researched content that truly adds value to our readers' lives.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Innovation Focus</h3>
              <p className="text-slate-700">
                We stay at the forefront of technology trends, bringing you the latest insights in AI, gaming, finance, and digital innovation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Global Perspective</h3>
              <p className="text-slate-700">
                Our content covers both local and international perspectives, ensuring our readers get a comprehensive view of current events and trends.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-navy-600 mb-3">Community First</h3>
              <p className="text-slate-700">
                We build content with our community in mind, addressing real questions and providing practical solutions for everyday challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-navy-600 mb-8 text-center">Our Expertise</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The PRWRITES team consists of experienced writers, researchers, and industry experts with deep knowledge across multiple domains:
            </p>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">✓</span>
                <span><strong>Technology & AI:</strong> Covering the latest in artificial intelligence, software development, and tech innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">✓</span>
                <span><strong>Gaming Industry:</strong> Expert analysis of gaming trends, reviews, and industry developments</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">✓</span>
                <span><strong>Finance & Business:</strong> Practical advice on personal finance, investment strategies, and business insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">✓</span>
                <span><strong>Breaking News:</strong> Timely coverage of current events with accurate reporting and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3">✓</span>
                <span><strong>Educational Content:</strong> Guides, tutorials, and resources for students and professionals</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-navy-600 mb-8 text-center">Content Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-xl font-bold mb-2">Gaming</h3>
              <p className="text-purple-100">Latest gaming news, reviews, industry trends, and gaming technology insights.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold mb-2">Technology</h3>
              <p className="text-blue-100">AI developments, software reviews, tech tutorials, and innovation coverage.</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="text-xl font-bold mb-2">News</h3>
              <p className="text-green-100">Breaking news, current events, and timely analysis of global developments.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-bold mb-2">Articles</h3>
              <p className="text-orange-100">In-depth articles, guides, and educational content across various topics.</p>
            </div>
            <div className="bg-gradient-to-br from-gold-500 to-yellow-600 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Finance</h3>
              <p className="text-yellow-100">Personal finance tips, investment strategies, and money management advice.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-indigo-100">Learning resources, study guides, and educational tools for students.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-navy-600 to-navy-800 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-slate-300 mb-6">
              Stay updated with the latest content and be part of our growing community of informed readers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="px-6 py-3 bg-gold-500 text-navy-900 rounded-lg font-bold hover:bg-gold-400 transition-colors"
              >
                Explore Our Blog
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-navy-800 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}