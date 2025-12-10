import Link from 'next/link';

const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    description: 'Every piece of content is crafted with care and attention to detail',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We stay ahead of trends to bring you cutting-edge insights',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Building connections through shared stories and experiences',
  },
  {
    icon: '💎',
    title: 'Authenticity',
    description: 'Honest, transparent content you can trust',
  },
];

const team = [
  { name: 'John Doe', role: 'Founder & CEO', specialty: 'Gaming & Tech' },
  { name: 'Jane Smith', role: 'Editor-in-Chief', specialty: 'Content Strategy' },
  { name: 'Mike Johnson', role: 'Senior Writer', specialty: 'AI & Innovation' },
  { name: 'Sarah Williams', role: 'News Editor', specialty: 'Breaking News' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gold-400">PRWRITES</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Where storytelling meets innovation. Crafting narratives that inform, inspire, and engage.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold gradient-text">Our Story</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <p>
                Founded in 2024, PRWRITES began with a simple mission: to create a platform where 
                quality content meets passionate readers. We believe that every story deserves to 
                be told with care, creativity, and authenticity.
              </p>
              <p>
                Today, we're proud to serve thousands of readers worldwide with expertly crafted 
                articles on gaming, technology, and breaking news. Our team of dedicated writers 
                and editors work tirelessly to bring you content that matters.
              </p>
              <p>
                From in-depth gaming reviews to cutting-edge tech analysis, from breaking news to 
                thought-provoking articles—we deliver content that informs, entertains, and inspires.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-500 via-navy-600 to-gold-500 p-1">
              <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-4">✍️</div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">500+</h3>
                  <p className="text-slate-600 dark:text-slate-400">Articles Published</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-cream-100 to-white dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="premium-card p-8 text-center card-hover-effect">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy-600 dark:text-slate-200 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-b from-white to-cream-100 dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              The passionate people behind PRWRITES
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="premium-card p-6 text-center card-hover-effect">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy-500 to-gold-500" />
                <h3 className="text-xl font-bold text-navy-600 dark:text-slate-200 mb-1">{member.name}</h3>
                <p className="text-gold-600 font-semibold mb-2">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 animated-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Be part of a community that values quality content and meaningful connections
          </p>
          <Link href="/contact" className="btn-gold shine-effect text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}