import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream dark:bg-charcoal">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-primary dark:text-secondary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary mb-6">
          Page Not Found
        </h2>
        <p className="text-slate text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </main>
  );
}