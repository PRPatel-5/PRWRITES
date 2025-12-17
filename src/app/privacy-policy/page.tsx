import type { Metadata } from 'next';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...defaultMetadata(),
  title: 'Privacy Policy - PRWRITES',
  description: 'Learn how PRWRITES collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.',
  alternates: {
    canonical: 'https://prwrites.vercel.app/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-navy-600 to-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-300">Last updated: December 2025</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 prose prose-lg max-w-none">
          
          <p className="text-lg text-slate-700 mb-8">
            Welcome to <strong>PRWRITES</strong> (https://prwrites.vercel.app).<br />
            Your privacy is important to us. This Privacy Policy document explains what information we collect, how we use it, and how we protect it.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">1. Information We Collect</h2>
          <p className="text-slate-700 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Personal information (such as name or email) when you contact us</li>
            <li>Usage data such as pages visited, time spent on pages, browser type</li>
            <li>Cookies and tracking technologies for analytics and performance</li>
          </ul>
          <p className="text-slate-700 mb-6">We do <strong>not</strong> collect sensitive personal data.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-700 mb-4">We use collected data to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Improve website performance and content quality</li>
            <li>Understand audience interests (gaming, tech, news)</li>
            <li>Respond to user inquiries</li>
            <li>Monitor traffic and detect security issues</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">3. Cookies and Tracking Technologies</h2>
          <p className="text-slate-700 mb-4">PRWRITES uses cookies to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>Analyze website traffic (Google Analytics, Vercel Analytics)</li>
            <li>Understand user behavior and improve experience</li>
          </ul>
          <p className="text-slate-700 mb-6">You can disable cookies through your browser settings.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">4. Third-Party Services</h2>
          <p className="text-slate-700 mb-4">We may use third-party services such as:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>Google Analytics</li>
            <li>Google AdSense (future)</li>
            <li>Vercel Analytics</li>
          </ul>
          <p className="text-slate-700 mb-6">These services may collect data according to their own privacy policies.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">5. Data Security</h2>
          <p className="text-slate-700 mb-6">We take reasonable steps to protect your information but cannot guarantee absolute security.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">6. External Links</h2>
          <p className="text-slate-700 mb-6">Our website may contain links to external websites. We are not responsible for the privacy policies of those sites.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">7. Children's Information</h2>
          <p className="text-slate-700 mb-6">PRWRITES does not knowingly collect personal information from children under 13.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">8. Your Consent</h2>
          <p className="text-slate-700 mb-6">By using our website, you consent to this Privacy Policy.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">9. Updates to This Policy</h2>
          <p className="text-slate-700 mb-6">We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">10. Contact Us</h2>
          <p className="text-slate-700 mb-4">If you have any questions about this Privacy Policy, contact us at:</p>
          <p className="text-slate-700">
            📧 Email: prwrites33@gmail.com<br />
            🌐 Website: https://prwrites.vercel.app
          </p>

        </div>
      </div>
    </div>
  );
}