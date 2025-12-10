import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // PRWRITES Brand Colors
        primary: '#1A2B4A', // Deep navy
        secondary: '#FFFFFF', // White
        accent: '#D4AF37', // Premium gold
        cream: '#F9FAFB', // Soft cream
        slate: '#64748B', // Slate gray
        charcoal: '#1F2937', // Charcoal
        // Legacy colors for compatibility
        dark: '#1A2B4A',
        light: '#FFFFFF',
        accentDark: '#D4AF37',
        gray: '#64748B',
      },
      fontFamily: {
        mr: ['var(--font-mr)'],
        in: ['var(--font-in)']
      },
      animation: {
        roll: 'roll 24s linear infinite'
      },
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      screens: {
        sxl: '1180px',
        xs: '480px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;