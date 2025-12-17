import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import JsonLd from "@/components/SEO/JsonLd";
import { generateBlogPostSEO, generateArticleJsonLd } from "@/lib/seo";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found - PRWRITES", robots: "noindex,nofollow" };
  }

  return generateBlogPostSEO(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const jsonLd = generateArticleJsonLd(post);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />

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
                  href="/blog"
                  className="hover:text-gold-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold-400">{post.category}</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                post.category === "Gaming"
                  ? "bg-purple-500 text-white"
                  : post.category === "Tech"
                  ? "bg-blue-500 text-white"
                  : post.category === "News"
                  ? "bg-green-500 text-white"
                  : post.category === "Article"
                  ? "bg-orange-500 text-white"
                  : "bg-slate-500 text-white"
              }`}
            >
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

      {/* Featured Image Section */}
      <section className="relative -mt-16 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* If post has a featured image, use it. Otherwise, show dynamic SVG based on category */}
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
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
                      id={`bg-${post.id}`}
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
                      id={`gold-${post.id}`}
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
                    <filter id={`shadow-${post.id}`}>
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
                    fill={`url(#bg-${post.id})`}
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

                  {/* Category-specific icon */}
                  <g transform="translate(500, 150)">
                    <g filter={`url(#shadow-${post.id})`}>
                      {post.category === "Gaming" && (
                        <>
                          <rect
                            width="200"
                            height="160"
                            rx="16"
                            fill="#1e293b"
                            opacity="0.9"
                          />
                          <text
                            x="100"
                            y="100"
                            fontSize="80"
                            textAnchor="middle"
                          >
                            🎮
                          </text>
                          <text
                            x="100"
                            y="140"
                            fontFamily="sans-serif"
                            fontSize="18"
                            fill="#8b5cf6"
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            GAMING
                          </text>
                        </>
                      )}
                      {post.category === "Tech" && (
                        <>
                          <rect
                            width="200"
                            height="160"
                            rx="16"
                            fill="#1e293b"
                            opacity="0.9"
                          />
                          <text
                            x="100"
                            y="100"
                            fontSize="80"
                            textAnchor="middle"
                          >
                            💻
                          </text>
                          <text
                            x="100"
                            y="140"
                            fontFamily="sans-serif"
                            fontSize="18"
                            fill="#3b82f6"
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            TECH
                          </text>
                        </>
                      )}
                      {post.category === "News" && (
                        <>
                          <rect
                            width="200"
                            height="160"
                            rx="16"
                            fill="#1e293b"
                            opacity="0.9"
                          />
                          <text
                            x="100"
                            y="100"
                            fontSize="80"
                            textAnchor="middle"
                          >
                            📰
                          </text>
                          <text
                            x="100"
                            y="140"
                            fontFamily="sans-serif"
                            fontSize="18"
                            fill="#10b981"
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            NEWS
                          </text>
                        </>
                      )}
                      {post.category === "Article" && (
                        <>
                          <rect
                            width="200"
                            height="160"
                            rx="16"
                            fill="#1e293b"
                            opacity="0.9"
                          />
                          <text
                            x="100"
                            y="100"
                            fontSize="80"
                            textAnchor="middle"
                          >
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
                        </>
                      )}
                      {!["Gaming", "Tech", "News", "Article"].includes(
                        post.category
                      ) && (
                        <>
                          <rect
                            width="200"
                            height="160"
                            rx="16"
                            fill="#1e293b"
                            opacity="0.9"
                          />
                          <text
                            x="100"
                            y="100"
                            fontSize="80"
                            textAnchor="middle"
                          >
                            📝
                          </text>
                          <text
                            x="100"
                            y="140"
                            fontFamily="sans-serif"
                            fontSize="18"
                            fill="#fbbf24"
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            {post.category.toUpperCase()}
                          </text>
                        </>
                      )}
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

            {/* Image Overlay with gradient for better text readability if needed */}
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
              __html: post.content
                .replace(/\n/g, "<br />")
                .replace(/#{1,6}\s/g, (match) => {
                  const level = match.trim().length;
                  return `<h${level} class="text-${
                    4 - level
                  }xl font-bold text-navy-600 mt-8 mb-4">`;
                })
                .replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="font-bold text-navy-700">$1</strong>'
                ),
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-cream-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
              Related Blogs
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="premium-card overflow-hidden card-hover-effect group"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-500 to-navy-700">
                    {relatedPost.image && (
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
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
