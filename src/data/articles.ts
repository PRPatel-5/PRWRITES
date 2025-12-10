import { Post } from '@/types';

export const mockArticles: Post[] = [
  {
    id: '1',
    title: 'The Evolution of Gaming AI: From NPCs to Neural Networks',
    slug: 'evolution-gaming-ai-npcs-neural-networks',
    category: 'Gaming',
    excerpt: 'Exploring how artificial intelligence has transformed gaming experiences, from simple scripted behaviors to sophisticated machine learning systems.',
    content: 'Full article content about gaming AI evolution...',
    image: '/api/placeholder/600/400',
    author: { name: 'Sarah Chen', avatar: '/authors/sarah.jpg' },
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: '8 min read',
    tags: ['AI', 'Gaming', 'Technology', 'Machine Learning'],
    featured: true
  },
  {
    id: '2',
    title: 'Hardware Review: RTX 4090 Ti - The Ultimate Gaming Beast',
    slug: 'rtx-4090-ti-ultimate-gaming-review',
    category: 'Tech',
    excerpt: 'An in-depth analysis of NVIDIA\'s flagship graphics card, testing performance across 4K gaming, ray tracing, and content creation workflows.',
    content: 'Full review content of RTX 4090 Ti...',
    image: '/api/placeholder/600/400',
    author: { name: 'Marcus Rodriguez', avatar: '/authors/marcus.jpg' },
    publishedAt: '2024-01-12T14:30:00Z',
    readTime: '12 min read',
    tags: ['Hardware', 'GPU', 'Gaming', 'Review'],
    featured: true
  },
  {
    id: '3',
    title: 'The Rise of Indie Gaming: How Small Studios Are Changing the Industry',
    slug: 'rise-indie-gaming-small-studios-industry',
    category: 'Article',
    excerpt: 'A deep dive into the indie gaming revolution, examining how independent developers are challenging AAA dominance with innovative gameplay.',
    content: 'Full article about indie gaming industry...',
    image: '/api/placeholder/600/400',
    author: { name: 'Elena Vasquez', avatar: '/authors/elena.jpg' },
    publishedAt: '2024-01-10T09:15:00Z',
    readTime: '10 min read',
    tags: ['Indie Games', 'Industry', 'Game Development'],
    featured: true
  },
  {
    id: '4',
    title: 'Breaking: Major Gaming Studio Announces Revolutionary VR Platform',
    slug: 'major-studio-announces-vr-platform',
    category: 'News',
    excerpt: 'Industry giant reveals plans for next-generation virtual reality ecosystem, promising unprecedented immersion and cross-platform compatibility.',
    content: 'Breaking news about VR platform announcement...',
    image: '/api/placeholder/600/400',
    author: { name: 'David Kim', avatar: '/authors/david.jpg' },
    publishedAt: '2024-01-08T16:45:00Z',
    readTime: '5 min read',
    tags: ['VR', 'News', 'Gaming Industry'],
    featured: false
  },
  {
    id: '5',
    title: 'Productivity Tools for Content Creators: 2024 Edition',
    slug: 'productivity-tools-content-creators-2024',
    category: 'Tech',
    excerpt: 'Comprehensive guide to the best software, hardware, and workflows for streamers, YouTubers, and digital content creators.',
    content: 'Complete guide to productivity tools for creators...',
    image: '/api/placeholder/600/400',
    author: { name: 'Alex Thompson', avatar: '/authors/alex.jpg' },
    publishedAt: '2024-01-05T11:20:00Z',
    readTime: '15 min read',
    tags: ['Productivity', 'Content Creation', 'Tools'],
    featured: false
  },
  {
    id: '6',
    title: 'The Psychology of Game Design: What Makes Players Engaged',
    slug: 'psychology-game-design-player-engagement',
    category: 'Blog',
    excerpt: 'Understanding the psychological principles behind addictive gameplay mechanics and how developers use them to create compelling experiences.',
    content: 'Deep dive into game design psychology...',
    image: '/api/placeholder/600/400',
    author: { name: 'Dr. Rachel Foster', avatar: '/authors/rachel.jpg' },
    publishedAt: '2024-01-03T13:00:00Z',
    readTime: '7 min read',
    tags: ['Psychology', 'Game Design', 'Player Behavior'],
    featured: false
  }
];

export const categories = [
  { name: 'Articles', slug: 'article', description: 'In-depth analysis and insights', count: 24, color: 'primary-navy' },
  { name: 'Gaming', slug: 'gaming', description: 'Gaming news and reviews', count: 18, color: 'accent-soft' },
  { name: 'Tech & Reviews', slug: 'tech', description: 'Hardware and software reviews', count: 15, color: 'primary-gold' },
  { name: 'News', slug: 'news', description: 'Latest industry updates', count: 12, color: 'primary-blue' },
  { name: 'Blogs', slug: 'blog', description: 'Personal insights and opinions', count: 8, color: 'muted-gray' }
];