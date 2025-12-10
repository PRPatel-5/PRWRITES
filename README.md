# PRWRITES - TypeScript Blog & News Platform

A modern, production-ready website built with Next.js 15, TypeScript, and Tailwind CSS. PRWRITES is your premier destination for blogs, long-form articles, gaming news, and general news.

## 🎨 Design & Branding

- **Primary Color**: Deep Navy (#1A2B4A)
- **Secondary Color**: White (#FFFFFF)
- **Accent Color**: Premium Gold (#D4AF37)
- **Support Colors**: Soft Cream (#F9FAFB), Slate Gray (#64748B), Charcoal (#1F2937)

## 🚀 Features

- **Modern TypeScript-first architecture**
- **Responsive design** (mobile-first approach)
- **Dark/Light mode toggle**
- **SEO optimized** with proper meta tags
- **Component-based architecture**
- **Search and filtering functionality**
- **Category-based content organization**
- **Admin UI for content management** (frontend only)
- **Contact form with validation**
- **Social media integration**

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admin/             # Admin dashboard (UI only)
│   ├── blog/              # Blog listing and individual posts
│   ├── contact/           # Contact page with form
│   ├── gaming/            # Gaming news page
│   ├── news/              # General news page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Blog/              # Blog-related components
│   ├── Contact/           # Contact form components
│   ├── Home/              # Homepage components
│   ├── Layout/            # Layout components (Navbar, Footer)
│   └── ui/                # UI components (Button, Card, Badge, etc.)
├── data/                  # Dummy data and content
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── utils/                 # Site metadata and utilities
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Manrope (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Content**: Velite (for MDX processing)

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install TypeScript dependencies**:
   ```bash
   npm install -D typescript @types/node @types/react @types/react-dom clsx tailwind-merge
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run content` - Process content with Velite

## 📄 Pages Overview

### 🏠 Homepage (/)
- Hero section with PRWRITES branding
- Featured articles showcase
- Categories grid with icons
- Latest stories section

### 📝 Blog (/blog)
- Filterable and searchable article listing
- Category filters (Blog, Gaming, Tech, News, Article)
- Pagination support
- Individual article pages (/blog/[slug])

### 🎮 Gaming (/gaming)
- Dedicated gaming news layout
- Top gaming headlines
- Platform-based browsing (PC, Console, Mobile, etc.)
- Upcoming releases section

### 📰 News (/news)
- Breaking news section
- News categories with icons
- Latest updates grid
- Tech and industry focus

### ℹ️ About (/about)
- Company story and mission
- Values and principles
- Timeline of growth
- Call-to-action sections

### 📞 Contact (/contact)
- Contact form with validation
- Contact information
- Social media links
- FAQ section

### 🔧 Admin (/admin)
- Content creation interface (UI only)
- Post management dashboard
- Category and tag management
- Draft and publish workflow

## 🎨 Component Library

### UI Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Flexible card component with header, content, footer
- **Badge**: Category badges with color variants
- **SearchBar**: Search functionality with form handling
- **ThemeToggle**: Dark/light mode switcher

### Layout Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Site footer with links and social media
- **Layout**: Page wrapper with consistent styling

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: "#1A2B4A",    // Deep navy
  secondary: "#FFFFFF",   // White
  accent: "#D4AF37",      // Premium gold
  cream: "#F9FAFB",       // Soft cream
  slate: "#64748B",       // Slate gray
  charcoal: "#1F2937",    // Charcoal
}
```

### Content
- Update dummy data in `src/data/posts.ts`
- Modify site metadata in `src/utils/siteMetaData.ts`
- Add real content processing with Velite

### Styling
- All components use Tailwind CSS classes
- Dark mode support with `dark:` prefixes
- Responsive design with mobile-first approach

## 🚀 Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - Vercel (recommended for Next.js)
   - Netlify
   - AWS Amplify
   - Docker container

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large screens**: Optimized for large displays (1280px+)

## 🔍 SEO Features

- Proper meta tags and Open Graph
- Semantic HTML structure
- Optimized images with Next.js Image component
- Sitemap generation
- Structured data ready

## 🎯 Performance

- Server-side rendering (SSR)
- Static site generation (SSG) where applicable
- Optimized images and fonts
- Code splitting and lazy loading
- Minimal bundle size

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact us through the contact form on the website or reach out via social media.

---

**Made with ❤️ by the PRWRITES Team**