interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  socialBanner: string;
  author: string;
  email: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    dribbble: string;
  };
}

const siteMetadata: SiteMetadata = {
  title: 'PRWRITES',
  description: 'Your premier destination for blogs, long-form articles, gaming news, and general news. Discover engaging content across technology, gaming, and lifestyle.',
  siteUrl: 'https://prwrites.com',
  socialBanner: '/social-banner.png',
  author: 'PRWRITES Team',
  email: 'hello@prwrites.com',
  social: {
    twitter: 'https://twitter.com/prwrites',
    github: 'https://github.com/prwrites',
    linkedin: 'https://linkedin.com/company/prwrites',
    dribbble: 'https://dribbble.com/prwrites'
  }
};

export default siteMetadata;