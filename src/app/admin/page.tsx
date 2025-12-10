'use client';

import { useState } from 'react';

const stats = [
  { label: 'Total Posts', value: '127', change: '+12%', icon: '📝' },
  { label: 'Total Views', value: '45.2K', change: '+23%', icon: '👁️' },
  { label: 'Comments', value: '892', change: '+8%', icon: '💬' },
  { label: 'Subscribers', value: '3.4K', change: '+15%', icon: '👥' },
];

const recentPosts = [
  { id: 1, title: 'The Future of Game Development', status: 'Published', date: '2024-03-15', views: '2.3K' },
  { id: 2, title: 'Web3 Revolution', status: 'Published', date: '2024-03-14', views: '1.8K' },
  { id: 3, title: 'AI in Content Creation', status: 'Draft', date: '2024-03-13', views: '-' },
  { id: 4, title: 'Cloud Gaming Trends', status: 'Scheduled', date: '2024-03-16', views: '-' },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-500 to-navy-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-slate-200 mt-2">Manage your content and monitor performance</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {['overview', 'posts', 'create', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-navy-500 to-navy-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="premium-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{stat.icon}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-navy-600 dark:text-slate-200 mb-2">{stat.value}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="premium-card p-6">
              <h2 className="text-2xl font-bold text-navy-600 dark:text-slate-200 mb-6">Recent Posts</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-600">
                      <th className="text-left py-3 text-slate-600 dark:text-slate-400">Title</th>
                      <th className="text-left py-3 text-slate-600 dark:text-slate-400">Status</th>
                      <th className="text-left py-3 text-slate-600 dark:text-slate-400">Date</th>
                      <th className="text-left py-3 text-slate-600 dark:text-slate-400">Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPosts.map((post) => (
                      <tr key={post.id} className="border-b border-slate-100 dark:border-slate-700">
                        <td className="py-4 text-navy-600 dark:text-slate-200 font-medium">{post.title}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            post.status === 'Published' ? 'bg-green-100 text-green-700' :
                            post.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="py-4 text-slate-600 dark:text-slate-400">{post.date}</td>
                        <td className="py-4 text-slate-600 dark:text-slate-400">{post.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div className="premium-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-navy-600 dark:text-slate-200">All Posts</h2>
              <button className="btn-premium">New Post</button>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Post management interface would go here...</p>
          </div>
        )}

        {/* Create Tab */}
        {activeTab === 'create' && (
          <div className="premium-card p-6">
            <h2 className="text-2xl font-bold text-navy-600 dark:text-slate-200 mb-6">Create New Post</h2>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Post title..."
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-gold-500 focus:outline-none"
              />
              <textarea
                rows={10}
                placeholder="Write your content here..."
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-gold-500 focus:outline-none resize-none"
              />
              <div className="flex space-x-4">
                <button className="btn-premium">Publish</button>
                <button className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="premium-card p-6">
            <h2 className="text-2xl font-bold text-navy-600 dark:text-slate-200 mb-6">Analytics</h2>
            <div className="h-64 bg-gradient-to-br from-navy-100 to-gold-100 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">Analytics charts would go here...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}