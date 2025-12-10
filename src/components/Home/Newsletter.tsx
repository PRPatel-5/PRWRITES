'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-navy relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Decorative gold line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-primary-gold"></div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 pt-8">
            Don't miss the next story
          </h2>
          <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
            Get PRWRITES in your inbox. Curated narratives, gaming insights, and tech reviews 
            delivered weekly to passionate readers like you.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
            <Button 
              type="submit" 
              variant="secondary"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          {isSubmitted && (
            <div className="text-primary-gold font-medium mb-4">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          )}

          <p className="text-text-light/70 text-sm">
            Join 10,000+ readers. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;