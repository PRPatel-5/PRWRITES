import Link from 'next/link';
import Image from "next/image";

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
  ],
  content: [
    { name: 'Blog', href: '/blog' },
    { name: 'Gaming', href: '/gaming' },
    { name: 'News', href: '/news' },
    { name: 'Archives', href: '/blog' },
  ],
  resources: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Sitemap', href: '/sitemap.xml' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '▶️' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-gold-400">
                Stay Updated
              </h3>
              <p className="text-slate-300 text-lg">
                Get the latest articles and news delivered to your inbox weekly
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
                <Image
                  src="/logo.png"         // or "/images/logo.png"
                  alt="PRWRITES Logo"
                  width={240}
                  height={160}
                  priority
                />
            </Link>
            
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Your premier destination for expertly crafted content spanning gaming, 
              technology, and breaking news. Where storytelling meets innovation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">Content</h4>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} PRWRITES. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Cookies
              </Link>
            </div>

            <p className="text-slate-400 text-sm">
              Made with <span className="text-gold-500">♥</span> by PRWRITES Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}