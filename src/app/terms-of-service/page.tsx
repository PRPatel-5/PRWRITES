import type { Metadata } from 'next';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...defaultMetadata(),
  title: 'Terms of Service - PRWRITES',
  description: 'Read the Terms of Service for PRWRITES. Understand the rules, guidelines, and legal terms for using our blog and news platform.',
  alternates: {
    canonical: 'https://prwrites.vercel.app/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-navy-600 to-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-300">Last updated: December 2025</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 prose prose-lg max-w-none">
          
          <p className="text-lg text-slate-700 mb-8">
            By accessing or using <strong>PRWRITES</strong>, you agree to be bound by these Terms of Service.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">1. Use of Website</h2>
          <p className="text-slate-700 mb-4">
            PRWRITES provides blogs, articles, gaming news, and informational content for educational and informational purposes only.
          </p>
          <p className="text-slate-700 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Copy or republish content without permission</li>
            <li>Use the website for illegal or harmful activities</li>
            <li>Attempt to disrupt website security</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">2. Intellectual Property</h2>
          <p className="text-slate-700 mb-4">
            All content on PRWRITES, including articles, logos, graphics, and design, is the intellectual property of PRWRITES unless otherwise stated.
          </p>
          <p className="text-slate-700 mb-6">Unauthorized reproduction is strictly prohibited.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">3. Content Accuracy</h2>
          <p className="text-slate-700 mb-4">
            We strive to provide accurate and updated information, but we do not guarantee completeness or correctness at all times.
          </p>
          <p className="text-slate-700 mb-6">
            PRWRITES is not responsible for any losses resulting from reliance on our content.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">4. External Links</h2>
          <p className="text-slate-700 mb-6">
            Our website may contain links to third-party websites. We are not responsible for their content or practices.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">5. Termination</h2>
          <p className="text-slate-700 mb-6">
            We reserve the right to restrict or terminate access to our website without notice if users violate these terms.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">6. Limitation of Liability</h2>
          <p className="text-slate-700 mb-6">
            PRWRITES shall not be held liable for any direct or indirect damages arising from the use of this website.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">7. Changes to Terms</h2>
          <p className="text-slate-700 mb-6">
            We may update these Terms at any time. Continued use of the website means acceptance of updated terms.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">8. Governing Law</h2>
          <p className="text-slate-700 mb-6">These Terms shall be governed by the laws of India.</p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-navy-600 mb-4">9. Contact Information</h2>
          <p className="text-slate-700 mb-4">For any questions regarding these Terms, contact us at:</p>
          <p className="text-slate-700">📧 Email: prwrites33@gmail.com</p>

        </div>
      </div>
    </div>
  );
}