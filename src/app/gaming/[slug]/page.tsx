import { notFound } from 'next/navigation';
import { gamingNews } from '@/data/gamingnews';
import type { Metadata } from 'next';

interface GamingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: GamingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const gaming = gamingNews.find(g => g.slug === slug);
  
  if (!gaming) {
    return {
      title: 'Gaming News Not Found - PRWRITES'
    };
  }

  return {
    title: gaming.seo?.title || `${gaming.title} - PRWRITES`,
    description: gaming.seo?.description || gaming.excerpt,
    keywords: gaming.seo?.keywords,
  };
}

export default async function GamingPage({ params }: GamingPageProps) {
  const { slug } = await params;
  const gaming = gamingNews.find(g => g.slug === slug);

  if (!gaming) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gaming Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-semibold">
              Gaming
            </span>
            {gaming.featured && (
              <span className="ml-3 px-2 py-1 bg-gold-500 text-navy-900 rounded-full text-xs font-bold">
                ⭐ Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-navy-600 mb-6 leading-tight">
            {gaming.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-slate-600 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                {gaming.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-navy-600">{gaming.author.name}</div>
                <div className="text-sm text-slate-500">{gaming.author.bio}</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-slate-500 mb-8">
            <span>{new Date(gaming.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{gaming.readTime}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {gaming.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Gaming Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="gaming-content"
            dangerouslySetInnerHTML={{ 
              __html: gaming.content
                .replace(/^# /gm, '## ')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/- \*\*(.*?)\*\*/g, '• <strong>$1</strong>')
                .replace(/### (.*?)$/gm, '<h3 class="text-2xl font-bold text-navy-600 mt-8 mb-4">$1</h3>')
                .replace(/## (.*?)$/gm, '<h2 class="text-3xl font-bold text-navy-600 mt-12 mb-6">$1</h2>')
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<h|<p|•)(.*?)$/gm, '<p class="mb-4">$1</p>')
                .replace(/• /g, '<li>')
                .replace(/<li>(.*?)(?=<li>|<p|<h|$)/g, '<ul class="list-disc pl-6 mb-6"><li>$1</li></ul>')
            }}
          />
        </div>

        {/* Gaming Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-gold-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {gaming.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-lg font-bold text-navy-600">{gaming.author.name}</div>
                <div className="text-slate-600">{gaming.author.bio}</div>
              </div>
            </div>
            
            <a
              href="/gaming"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              ← Back to Gaming
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}