import { Article } from '@/types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Evolution of Gaming AI: From NPCs to Neural Networks',
    slug: 'evolution-gaming-ai-npcs-neural-networks',
    category: 'Gaming',
    excerpt: 'Exploring how artificial intelligence has transformed gaming experiences, from simple scripted behaviors to sophisticated machine learning systems.',
    imageUrl: '/api/placeholder/600/400',
    author: 'Sarah Chen',
    publishedAt: '2024-01-15T10:00:00Z',
    readTimeMinutes: 8,
    tags: ['AI', 'Gaming', 'Technology', 'Machine Learning'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Hardware Review: RTX 4090 Ti - The Ultimate Gaming Beast',
    slug: 'rtx-4090-ti-ultimate-gaming-review',
    category: 'Review',
    excerpt: 'An in-depth analysis of NVIDIA\'s flagship graphics card, testing performance across 4K gaming, ray tracing, and content creation workflows.',
    imageUrl: '/api/placeholder/600/400',
    author: 'Marcus Rodriguez',
    publishedAt: '2024-01-12T14:30:00Z',
    readTimeMinutes: 12,
    tags: ['Hardware', 'GPU', 'Gaming', 'Review'],
    isFeatured: true
  },
  {
    id: '3',
    title: 'The Rise of Indie Gaming: How Small Studios Are Changing the Industry',
    slug: 'rise-indie-gaming-small-studios-industry',
    category: 'Article',
    excerpt: 'A deep dive into the indie gaming revolution, examining how independent developers are challenging AAA dominance with innovative gameplay.',
    imageUrl: '/api/placeholder/600/400',
    author: 'Elena Vasquez',
    publishedAt: '2024-01-10T09:15:00Z',
    readTimeMinutes: 10,
    tags: ['Indie Games', 'Industry', 'Game Development'],
    isFeatured: true
  },
  {
    id: '4',
    title: 'Breaking: Major Gaming Studio Announces Revolutionary VR Platform',
    slug: 'major-studio-announces-vr-platform',
    category: 'News',
    excerpt: 'Industry giant reveals plans for next-generation virtual reality ecosystem, promising unprecedented immersion and cross-platform compatibility.',
    imageUrl: '/api/placeholder/600/400',
    author: 'David Kim',
    publishedAt: '2024-01-08T16:45:00Z',
    readTimeMinutes: 5,
    tags: ['VR', 'News', 'Gaming Industry'],
    isFeatured: false
  },
  {
    id: '5',
    title: 'Productivity Tools for Content Creators: 2024 Edition',
    slug: 'productivity-tools-content-creators-2024',
    category: 'Tech',
    excerpt: 'Comprehensive guide to the best software, hardware, and workflows for streamers, YouTubers, and digital content creators.',
    imageUrl: '/api/placeholder/600/400',
    author: 'Alex Thompson',
    publishedAt: '2024-01-05T11:20:00Z',
    readTimeMinutes: 15,
    tags: ['Productivity', 'Content Creation', 'Tools'],
    isFeatured: false
  },
  {
    id: '6',
    title: 'The Psychology of Game Design: What Makes Players Engaged',
    slug: 'psychology-game-design-player-engagement',
    category: 'Blog',
    excerpt: 'Understanding the psychological principles behind addictive gameplay mechanics and how developers use them to create compelling experiences.',
    imageUrl: '/api/placeholder/600/400',
    author: 'Dr. Rachel Foster',
    publishedAt: '2024-01-03T13:00:00Z',
    readTimeMinutes: 7,
    tags: ['Psychology', 'Game Design', 'Player Behavior'],
    isFeatured: false
  }
];

export const categories = [
  { name: 'Articles', slug: 'article', description: 'In-depth analysis and insights', count: 24, color: 'primary-navy' },
  { name: 'Gaming', slug: 'gaming', description: 'Gaming news and reviews', count: 18, color: 'accent-soft' },
  { name: 'Tech & Reviews', slug: 'tech', description: 'Hardware and software reviews', count: 15, color: 'primary-gold' },
  { name: 'News', slug: 'news', description: 'Latest industry updates', count: 12, color: 'primary-blue' },
  { name: 'Blogs', slug: 'blog', description: 'Personal insights and opinions', count: 8, color: 'muted-gray' }
];