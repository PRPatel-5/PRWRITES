import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { articles } from "@/data/articles";
import Image from "next/image";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found - PRWRITES",
      robots: "noindex,nofollow",
    };
  }

  return {
    title: article.seo?.title || `${article.title} - PRWRITES`,
    description: article.seo?.description || article.excerpt,
    keywords: article.seo?.keywords,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with SVG Background */}
      <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 py-20 overflow-hidden">
        {/* SVG Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#0f172a", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#1e3a5f", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#fbbf24", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            {/* Starfield effect */}
            <circle cx="120" cy="60" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="340" cy="90" r="1.5" fill="#60a5fa" opacity="0.7" />
            <circle cx="580" cy="50" r="2" fill="#fbbf24" opacity="0.6" />
            <circle cx="820" cy="80" r="1.5" fill="#a78bfa" opacity="0.7" />
            <circle cx="1050" cy="70" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="200" cy="320" r="1.5" fill="#60a5fa" opacity="0.6" />
            <circle cx="950" cy="300" r="2" fill="#fbbf24" opacity="0.7" />

            {/* Decorative curves */}
            <path
              d="M 0 280 Q 200 250 400 280"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M 800 280 Q 1000 250 1200 280"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />

            {/* Accent circles */}
            <circle cx="320" cy="320" r="6" fill="#fbbf24" opacity="0.5" />
            <circle cx="880" cy="100" r="8" fill="#60a5fa" opacity="0.4" />
            <circle cx="1100" cy="100" r="60" fill="#fbbf24" opacity="0.08" />
            <circle cx="100" cy="100" r="80" fill="#60a5fa" opacity="0.06" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-gold-400 transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold-400">Article</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold">
              Article
            </span>
            {article.featured && (
              <span className="ml-3 px-3 py-1 bg-gold-500 text-navy-900 rounded-full text-sm font-bold">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">
                  {article.author.name}
                </p>
                <p className="text-sm">{article.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.tags.length} tags</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative -mt-16 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* If article has a featured image, use it. Otherwise, show dynamic SVG based on category */}
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            ) : (
              <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-navy-600 to-navy-800">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1200 500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id={`bg-${article.id}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#0f172a", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#1e3a5f", stopOpacity: 1 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id={`gold-${article.id}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#fbbf24", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
                      />
                    </linearGradient>
                    <filter id={`shadow-${article.id}`}>
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="8"
                        floodOpacity="0.3"
                      />
                    </filter>
                  </defs>

                  {/* Background */}
                  <rect
                    width="1200"
                    height="500"
                    fill={`url(#bg-${article.id})`}
                  />

                  {/* Starfield */}
                  <circle cx="120" cy="80" r="2" fill="#fbbf24" opacity="0.8" />
                  <circle
                    cx="340"
                    cy="120"
                    r="1.5"
                    fill="#60a5fa"
                    opacity="0.7"
                  />
                  <circle cx="580" cy="70" r="2" fill="#fbbf24" opacity="0.6" />
                  <circle
                    cx="820"
                    cy="100"
                    r="1.5"
                    fill="#a78bfa"
                    opacity="0.7"
                  />
                  <circle
                    cx="1050"
                    cy="90"
                    r="2"
                    fill="#fbbf24"
                    opacity="0.8"
                  />
                  <circle
                    cx="200"
                    cy="400"
                    r="1.5"
                    fill="#60a5fa"
                    opacity="0.6"
                  />
                  <circle
                    cx="950"
                    cy="380"
                    r="2"
                    fill="#fbbf24"
                    opacity="0.7"
                  />

                  {/* Article icon */}
                  <g transform="translate(500, 150)">
                    <g filter={`url(#shadow-${article.id})`}>
                      <rect
                        width="200"
                        height="160"
                        rx="16"
                        fill="#1e293b"
                        opacity="0.9"
                      />
                      <text x="100" y="100" fontSize="80" textAnchor="middle">
                        ✍️
                      </text>
                      <text
                        x="100"
                        y="140"
                        fontFamily="sans-serif"
                        fontSize="18"
                        fill="#f59e0b"
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        ARTICLE
                      </text>
                    </g>
                  </g>

                  {/* Decorative elements */}
                  <g opacity="0.6">
                    <path
                      d="M 0 350 Q 200 320 400 350"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.4"
                    />
                    <path
                      d="M 800 350 Q 1000 320 1200 350"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.4"
                    />
                    <circle
                      cx="320"
                      cy="400"
                      r="6"
                      fill="#fbbf24"
                      opacity="0.5"
                    />
                    <circle
                      cx="880"
                      cy="120"
                      r="8"
                      fill="#60a5fa"
                      opacity="0.4"
                    />
                  </g>

                  {/* Bottom accent wave */}
                  <path
                    d="M 0 430 C 300 410, 500 450, 800 430 C 1000 415, 1100 445, 1200 430 L 1200 500 L 0 500 Z"
                    fill="#f59e0b"
                    opacity="0.15"
                  />
                </svg>
              </div>
            )}

            {/* Image Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg prose-navy max-w-none">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/^# /gm, "## ")
                .replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="font-bold text-navy-700">$1</strong>'
                )
                .replace(
                  /- \*\*(.*?)\*\*/g,
                  '• <strong class="font-bold text-navy-700">$1</strong>'
                )
                .replace(
                  /### (.*?)$/gm,
                  '<h3 class="text-2xl font-bold text-navy-600 mt-8 mb-4">$1</h3>'
                )
                .replace(
                  /## (.*?)$/gm,
                  '<h2 class="text-3xl font-bold text-navy-600 mt-12 mb-6">$1</h2>'
                )
                .replace(
                  /\n\n/g,
                  '</p><p class="mb-4 text-slate-700 leading-relaxed">'
                )
                .replace(
                  /^(?!<h|<p|•)(.*?)$/gm,
                  '<p class="mb-4 text-slate-700 leading-relaxed">$1</p>'
                )
                .replace(/• /g, '<li class="mb-2">')
                .replace(
                  /<li class="mb-2">(.*?)(?=<li class="mb-2">|<p|<h|$)/g,
                  (match, content) => {
                    return `<ul class="list-disc pl-6 mb-6 space-y-2"><li class="mb-2 text-slate-700">${content}</li></ul>`;
                  }
                ),
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-navy-600 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
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
              {article.author.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-600 mb-2">
                About {article.author.name}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {article.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-navy-600 mb-4">
            Share this article
          </h3>
          <div className="flex flex-wrap gap-4">
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

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-cream-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <article
                  key={relatedArticle.id}
                  className="premium-card overflow-hidden card-hover-effect group"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-500 to-navy-700">
                    {relatedArticle.image && (
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-navy-600">
                        Article
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>
                        {new Date(
                          relatedArticle.publishedAt
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{relatedArticle.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-600 group-hover:text-gold-600 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>

                    <p className="text-slate-600 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>

                    <Link
                      href={`/articles/${relatedArticle.slug}`}
                      className="inline-flex items-center text-navy-600 font-semibold hover:text-gold-600 transition-colors"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
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
      <section className="relative py-20 bg-gradient-to-r from-navy-600 to-navy-800 overflow-hidden">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="120" cy="60" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="340" cy="90" r="1.5" fill="#60a5fa" opacity="0.7" />
            <circle cx="1050" cy="70" r="2" fill="#fbbf24" opacity="0.8" />
            <path
              d="M 0 280 Q 200 250 400 280"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M 800 280 Q 1000 250 1200 280"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Enjoyed this Article?
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
