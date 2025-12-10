'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface NewPost {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string;
  image: string;
  isFeatured: boolean;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');
  const [newPost, setNewPost] = useState<NewPost>({
    title: '',
    slug: '',
    category: 'Blog',
    excerpt: '',
    content: '',
    tags: '',
    image: '',
    isFeatured: false
  });

  const categories = ['Blog', 'Gaming', 'News', 'Tech', 'Article'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setNewPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New post created:', newPost);
    // In a real app, this would send data to your backend
    alert('Post created successfully! (This is a demo)');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-4">
            Admin Dashboard
          </h1>
          <p className="text-slate">
            Manage your PRWRITES content (Demo UI - No backend functionality)
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('create')}
            className={cn(
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeTab === 'create'
                ? 'bg-accent text-primary'
                : 'text-slate hover:text-primary dark:hover:text-secondary'
            )}
          >
            Create Post
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={cn(
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeTab === 'manage'
                ? 'bg-accent text-primary'
                : 'text-slate hover:text-primary dark:hover:text-secondary'
            )}
          >
            Manage Posts
          </button>
        </div>

        {activeTab === 'create' && (
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                Create New Post
              </h2>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-secondary mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newPost.title}
                    onChange={handleTitleChange}
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter post title"
                    required
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-secondary mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={newPost.slug}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="post-slug"
                  />
                </div>

                {/* Category and Featured */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary dark:text-secondary mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={newPost.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="isFeatured"
                        checked={newPost.isFeatured}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent border-slate/20 rounded focus:ring-accent"
                      />
                      <span className="text-sm font-medium text-primary dark:text-secondary">
                        Featured Post
                      </span>
                    </label>
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-secondary mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    name="excerpt"
                    value={newPost.excerpt}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-vertical"
                    placeholder="Brief description of the post"
                    required
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-secondary mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={newPost.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="tag1, tag2, tag3"
                  />
                  <p className="text-slate text-sm mt-1">Separate tags with commas</p>
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-secondary mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={newPost.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-secondary mb-2">
                    Content *
                  </label>
                  <textarea
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    rows={12}
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-vertical"
                    placeholder="Write your post content here..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" type="button">
                    Save Draft
                  </Button>
                  <Button type="submit">
                    Publish Post
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'manage' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                  Manage Posts
                </h2>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Demo posts list */}
                  {[
                    { title: 'Next.js 14: Complete Guide', category: 'Tech', status: 'Published', featured: true },
                    { title: 'Cyberpunk 2077 Review', category: 'Gaming', status: 'Published', featured: true },
                    { title: 'AI Revolution 2024', category: 'News', status: 'Draft', featured: false },
                  ].map((post, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-slate/20 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary dark:text-secondary">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={post.category.toLowerCase() as any}>
                            {post.category}
                          </Badge>
                          <span className={cn(
                            'text-xs px-2 py-1 rounded-full',
                            post.status === 'Published' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          )}>
                            {post.status}
                          </span>
                          {post.featured && (
                            <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}