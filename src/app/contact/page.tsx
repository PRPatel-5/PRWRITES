'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-gold-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="premium-card p-8 space-y-6">
              <h2 className="text-3xl font-bold gradient-text">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-gold-500 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold text-navy-600 dark:text-slate-200">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">contact@prwrites.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-gold-500 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <p className="font-semibold text-navy-600 dark:text-slate-200">Phone</p>
                    <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-gold-500 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-navy-600 dark:text-slate-200">Office</p>
                    <p className="text-slate-600 dark:text-slate-400">123 Media Street, Content City, CC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="premium-card p-8">
              <h3 className="text-xl font-bold text-navy-600 dark:text-slate-200 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['𝕏', 'in', '📷', '▶️'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-navy-500 to-gold-500 rounded-lg flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="premium-card p-8">
            <h2 className="text-3xl font-bold gradient-text mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-navy-600 dark:text-slate-200 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-600 dark:text-slate-200 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-600 dark:text-slate-200 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-600 dark:text-slate-200 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-premium text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}