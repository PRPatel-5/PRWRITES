export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://prwrites.vercel.app/sitemap.xml',
  };
}
