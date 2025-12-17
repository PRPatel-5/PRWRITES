import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | PRWRITES',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex,nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="text-8xl mb-8">🔍</div>
        <h1 className="text-4xl font-bold gradient-text mb-4">Page Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link href="/" className="btn-premium block">
            Go Home
          </Link>
          <Link href="/blog" className="block text-navy-600 hover:text-gold-600 transition-colors">
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}