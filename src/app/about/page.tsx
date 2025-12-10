import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about PRWRITES - your premier destination for blogs, articles, gaming news, and storytelling.',
};

export default function AboutPage() {
  const timeline = [
    {
      year: '2023',
      title: 'The Beginning',
      description: 'PRWRITES was founded with a vision to create engaging, high-quality content across multiple domains.'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'We expanded our coverage to include gaming news, tech insights, and in-depth articles.'
    },
    {
      year: 'Future',
      title: 'Innovation',
      description: 'Continuing to innovate in digital storytelling and content creation.'
    }
  ];

  const values = [
    {
      title: 'Quality Content',
      description: 'We believe in creating well-researched, engaging, and valuable content for our readers.',
      icon: '✨'
    },
    {
      title: 'Diverse Perspectives',
      description: 'Our content spans multiple domains, offering diverse viewpoints and insights.',
      icon: '🌍'
    },
    {
      title: 'Community Focus',
      description: 'We build content that brings people together and fosters meaningful discussions.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of trends and embrace new technologies in content creation.',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-6">
            About <span className="text-accent">PRWRITES</span>
          </h1>
          <p className="text-xl text-slate leading-relaxed max-w-3xl mx-auto">
            We are passionate storytellers, tech enthusiasts, and gaming aficionados dedicated to 
            bringing you the most engaging and insightful content across multiple domains.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate leading-relaxed mb-6">
                  PRWRITES began as a simple idea: to create a platform where quality content meets 
                  passionate storytelling. We recognized the need for a space that could seamlessly 
                  blend technology insights, gaming culture, and thoughtful commentary on the digital world.
                </p>
                <p className="text-slate leading-relaxed mb-6">
                  What started as a small blog has evolved into a comprehensive content platform that 
                  serves thousands of readers worldwide. Our team of writers, editors, and content 
                  creators work tirelessly to ensure every piece we publish meets our high standards 
                  of quality and engagement.
                </p>
                <p className="text-slate leading-relaxed">
                  Today, PRWRITES stands as a trusted source for technology news, gaming insights, 
                  and thoughtful articles that help our readers stay informed and entertained in 
                  an ever-evolving digital landscape.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What You'll Find Here */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            What You'll Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-accent text-2xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                  In-Depth Articles
                </h3>
                <p className="text-slate">
                  Comprehensive analysis and insights on technology trends, industry developments, 
                  and digital culture.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-accent text-2xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                  Gaming Coverage
                </h3>
                <p className="text-slate">
                  Latest gaming news, reviews, and insights from the ever-evolving world of 
                  video games and esports.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-accent text-2xl mb-4">📰</div>
                <h3 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                  Breaking News
                </h3>
                <p className="text-slate">
                  Timely updates on technology, startups, and digital innovations that shape 
                  our world.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-accent text-2xl mb-4">💭</div>
                <h3 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                  Personal Blogs
                </h3>
                <p className="text-slate">
                  Thoughtful commentary, personal experiences, and unique perspectives on 
                  technology and digital life.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  {item.year}
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-4">
                Join Our Community
              </h2>
              <p className="text-slate text-lg mb-6">
                Be part of our growing community of readers, writers, and digital enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary rounded-lg font-medium hover:bg-primary hover:text-secondary dark:hover:bg-secondary dark:hover:text-primary transition-colors"
                >
                  Read Our Content
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}