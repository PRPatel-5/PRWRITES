export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  source: string;
  url: string;
}

export const breakingNews: NewsItem[] = [
  {
    id: '11',
    title: 'UN chief appeals for urgent humanitarian access in Gaza region',
    excerpt: 'United Nations Secretary-General calls for immediate humanitarian corridors and access to provide critical aid to civilians in conflict-affected areas.',
    category: 'International',
    date: '1 hour ago',
    source: 'UN News',
    url: 'https://news.un.org/en/story/placeholder-1'
  },
  {
    id: '12',
    title: 'UN agency issues report on climate change impact on global food security',
    excerpt: 'New United Nations report highlights the severe impact of climate change on agricultural production and food security worldwide.',
    category: 'Environment',
    date: '2 hours ago',
    source: 'UN News',
    url: 'https://news.un.org/en/story/placeholder-2'
  },
  {
    id: '1',
    title: 'Goa nightclub fire updates: Initial questioning of Luthra brothers finished; they were detained after fleeing Thailand.',
    excerpt: 'Breaking news on the Goa nightclub fire case as authorities complete initial questioning of the Luthra brothers who were detained after attempting to flee to Thailand.',
    category: 'Breaking',
    date: '2 hours ago',
    source: 'NDTV',
    url: 'https://www.ndtv.com/india-news/goa-nightclub-fire-live-updates-saurabh-luthra-gaurav-luthra-news-updates-luthra-brothers-detained-over-goa-club-fire-deportation-next-9789461'
  },
  {
    id: '2',
    title: 'Modi-Putin car photo sparks international reaction: US lawmakers use it to warn about India–US ties under Trump.',
    excerpt: 'A photograph of PM Modi and President Putin in a car has generated significant international attention, with US lawmakers using it to discuss India-US relations.',
    category: 'Politics',
    date: '3 hours ago',
    source: 'NDTV',
    url: 'https://www.ndtv.com/world/pm-modi-putin-car-ride-becomes-warning-shot-over-trumps-handling-of-india-ties-9788993'
  },
];

export const latestNews: NewsItem[] = [
  {
    id: '3',
    title: 'India–US trade deal focus: Markets and investors see trade pact talks as bigger driver for rupee & stocks than Fed moves.',
    excerpt: 'Financial markets are showing more interest in India-US trade deal negotiations than Federal Reserve policy changes, indicating the potential impact on rupee and stock performance.',
    category: 'Business',
    date: '4 hours ago',
    source: 'Hindustan Times',
    url: 'https://www.hindustantimes.com/business/a-india-us-trade-deal-not-fed-rate-cut-matters-more-for-indias-stock-market-rupee-101765427743074.html'
  },
  {
    id: '4',
    title: 'Tech & business: Microsoft partners with Indian IT majors to expand AI capacity; significant investment push.',
    excerpt: 'Microsoft announces strategic partnerships with major Indian IT companies including TCS, Infosys, and Wipro to accelerate AI development and capacity in India.',
    category: 'Technology',
    date: '6 hours ago',
    source: 'Hindustan Times',
    url: 'https://www.hindustantimes.com/business/microsoft-ties-up-with-tcs-infosys-wipro-to-accelerate-agentic-ai-in-india-101765432931126.html'
  },
  {
    id: '5',
    title: 'Cultural news: Diwali (Deepavali) added to UNESCO\'s intangible heritage list.',
    excerpt: 'In a significant cultural milestone, Diwali (Deepavali) has been officially inscribed on UNESCO\'s Representative List of the Intangible Cultural Heritage of Humanity.',
    category: 'Culture',
    date: '8 hours ago',
    source: 'The Times of India',
    url: 'https://timesofindia.indiatimes.com/life-style/travel/news/with-deepavali-now-inscribed-by-unesco-indias-intangible-heritage-count-reaches-16-a-look-at-5-key-festivals-and-traditions/photostory/125890287.cms'
  },
  {
    id: '6',
    title: 'Bilateral talks: India, US officials step up negotiations on a bilateral trade agreement.',
    excerpt: 'Indian and US officials are intensifying discussions on bilateral trade agreements, focusing on strengthening economic ties between the two nations.',
    category: 'Politics',
    date: '10 hours ago',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/india/india-us-officials-discuss-trade-ties-bilateral-deal-2025-12-10/'
  },
  {
    id: '7',
    title: 'National politics & state visits: President Droupadi Murmu begins a key visit to Manipur aimed at peace and development.',
    excerpt: 'President Droupadi Murmu has commenced a significant two-day visit to Manipur, marking her first comprehensive itinerary focused on peace initiatives and development projects.',
    category: 'Politics',
    date: '12 hours ago',
    source: 'The Times of India',
    url: 'https://timesofindia.indiatimes.com/india/president-in-manipur-murmu-to-begin-two-day-visit-her-first-full-itinerary/articleshow/125907096.cms'
  },
  {
    id: '8',
    title: 'Foreign relations: PM Modi reaffirms support for Gaza peace plan in call with Israeli PM Netanyahu.',
    excerpt: 'Prime Minister Narendra Modi has reaffirmed India\'s support for peace initiatives in Gaza during a telephonic conversation with Israeli Prime Minister Benjamin Netanyahu.',
    category: 'International',
    date: '14 hours ago',
    source: 'The Times of India',
    url: 'https://timesofindia.indiatimes.com/india/india-israel-ties-pm-modi-receives-call-from-netanyahu-reaffirms-support-for-gaza-peace-plan/articleshow/125892677.cms'
  },
  {
    id: '9',
    title: 'Ongoing IndiGo airline disruptions: Compensation in the form of ₹10,000 travel vouchers for stranded passengers after massive cancellations.',
    excerpt: 'IndiGo Airlines announces ₹10,000 travel vouchers as compensation for severely impacted customers following widespread flight cancellations and operational disruptions.',
    category: 'Business',
    date: '16 hours ago',
    source: 'NDTV',
    url: 'https://www.ndtv.com/india-news/indigos-rs-10-000-travel-vouchers-for-severely-impacted-customers-9790742'
  },
  {
    id: '10',
    title: 'US immigration comments: Trump criticizes current rules and remarks about Indian students in the US.',
    excerpt: 'Former President Trump has made critical remarks about current US immigration policies, specifically commenting on the situation of Indian students in America.',
    category: 'International',
    date: '18 hours ago',
    source: 'Hindustan Times',
    url: 'https://www.hindustantimes.com/world-news/us-news/shame-indian-students-have-to-leave-trump-on-need-for-new-immigration-rules-101765430487098.html'
  },
];