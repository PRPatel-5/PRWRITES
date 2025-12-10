import { Post } from '@/types';

export const dummyPosts: Post[] = [
  {
    id: '1',
    slug: 'next-js-14-complete-guide',
    title: 'Next.js 14: Complete Guide to App Router and Server Components',
    excerpt: 'Explore the latest features in Next.js 14 including App Router, Server Components, and performance optimizations.',
    content: 'Full article content here...',
    category: 'Tech',
    tags: ['Next.js', 'React', 'Web Development'],
    createdAt: '2024-01-15',
    image: '/blogs/nextjs-guide.jpg',
    isFeatured: true,
    isPublished: true,
    readingTime: '8 min read',
    author: {
      name: 'PRWRITES Team',
      avatar: '/authors/team.jpg'
    }
  },
  {
    id: '2',
    slug: 'cyberpunk-2077-phantom-liberty-review',
    title: 'Cyberpunk 2077: Phantom Liberty - A Redemption Story',
    excerpt: 'CD Projekt RED delivers an exceptional expansion that fixes many of the base game issues.',
    content: 'Full article content here...',
    category: 'Gaming',
    tags: ['Cyberpunk 2077', 'RPG', 'Review'],
    createdAt: '2024-01-12',
    image: '/blogs/cyberpunk-review.jpg',
    isFeatured: true,
    isPublished: true,
    readingTime: '12 min read',
    author: {
      name: 'PRWRITES Team'
    }
  },
  {
    id: '3',
    slug: 'ai-revolution-2024',
    title: 'The AI Revolution: How Machine Learning is Transforming Industries',
    excerpt: 'Breaking down the latest AI developments and their impact on various sectors.',
    content: 'Full article content here...',
    category: 'News',
    tags: ['AI', 'Machine Learning', 'Technology'],
    createdAt: '2024-01-10',
    image: '/blogs/ai-revolution.jpg',
    isFeatured: false,
    isPublished: true,
    readingTime: '6 min read',
    author: {
      name: 'PRWRITES Team'
    }
  },
  {
    id: '4',
    slug: 'productivity-hacks-developers',
    title: '10 Productivity Hacks Every Developer Should Know',
    excerpt: 'Boost your coding efficiency with these proven productivity techniques and tools.',
    content: 'Full article content here...',
    category: 'Blog',
    tags: ['Productivity', 'Development', 'Tips'],
    createdAt: '2024-01-08',
    image: '/blogs/productivity-hacks.jpg',
    isFeatured: false,
    isPublished: true,
    readingTime: '5 min read',
    author: {
      name: 'PRWRITES Team'
    }
  },
  {
    id: '5',
    slug: 'gaming-industry-trends-2024',
    title: 'Gaming Industry Trends to Watch in 2024',
    excerpt: 'From cloud gaming to VR innovations, here are the trends shaping the gaming landscape.',
    content: 'Full article content here...',
    category: 'Gaming',
    tags: ['Gaming', 'Trends', 'Industry'],
    createdAt: '2024-01-05',
    image: '/blogs/gaming-trends.jpg',
    isFeatured: true,
    isPublished: true,
    readingTime: '7 min read',
    author: {
      name: 'PRWRITES Team'
    }
  }
];

export const categories = [
  { name: 'Blog', slug: 'blog', description: 'Personal insights and thoughts', count: 15 },
  { name: 'Gaming', slug: 'gaming', description: 'Latest gaming news and reviews', count: 23 },
  { name: 'Tech', slug: 'tech', description: 'Technology articles and tutorials', count: 18 },
  { name: 'News', slug: 'news', description: 'Breaking news and updates', count: 12 },
  { name: 'Article', slug: 'article', description: 'In-depth articles and analysis', count: 8 }
];