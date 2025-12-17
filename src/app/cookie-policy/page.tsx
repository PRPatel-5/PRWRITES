import type { Metadata } from 'next';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...defaultMetadata(),
  title: 'Cookie Policy - PRWRITES',
  description: 'Learn about how PRWRITES uses cookies and similar technologies. Understand what cookies we use and how to manage your cookie preferences.',
  alternates: {
    canonical: 'https://prwrites.vercel.app/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-navy-600 to-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-lg text-slate-300">Last updated: December 2025</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 prose prose-lg max-w-none">
          
          <p className="text-lg text-slate-700 mb-8">
            This Cookie Policy explains how <strong>PRWRITES</strong> uses cookies and similar technologies.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">1. What Are Cookies?</h2>
          <p className="text-slate-700 mb-6">
            Cookies are small text files stored on your device to help websites function properly and improve user experience.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">2. How We Use Cookies</h2>
          <p className="text-slate-700 mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Analyze website traffic and performance</li>
            <li>Understand visitor behavior</li>
            <li>Improve content quality</li>
            <li>Enable analytics tools</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand user behavior</li>
            <li><strong>Advertising Cookies:</strong> Used by third-party services (future)</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">4. Third-Party Cookies</h2>
          <p className="text-slate-700 mb-6">
            Third-party services like Google Analytics may place cookies on your device. Their use is governed by their own policies.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">5. Managing Cookies</h2>
          <p className="text-slate-700 mb-6">
            You can control or disable cookies through your browser settings. Disabling cookies may affect website functionality.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">6. Updates to This Policy</h2>
          <p className="text-slate-700 mb-6">
            We may update this Cookie Policy at any time. Changes will be posted on this page.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">7. Contact Us</h2>
          <p className="text-slate-700 mb-4">If you have questions about this Cookie Policy, contact us at:</p>
          <p className="text-slate-700">📧 Email: prwrites33@gmail.com</p>

        </div>
      </div>
    </div>
  );
}