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
        // PRWRITES Brand Colors (from logo)
        'primary-navy': '#14253E',
        'primary-gold': '#D4AF37', 
        'primary-blue': '#1E3A5F',
        'bg-light': '#F5F7FB',
        'bg-dark': '#020617',
        'text-dark': '#0F172A',
        'text-light': '#E5E7EB',
        'muted-gray': '#6B7280',
        'accent-soft': '#38BDF8',
        // Card backgrounds
        'card-light': '#FFFFFF',
        'card-dark': '#0B1220',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #14253E 0%, #1E3A5F 50%, #0F172A 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #B7950B 100%)',
        'gradient-light': 'linear-gradient(135deg, #F5F7FB 0%, #FFFFFF 50%, #E5E7EB 100%)',
        'gradient-dark': 'linear-gradient(135deg, #020617 0%, #0B1220 50%, #14253E 100%)',
        'gradient-card-light': 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
        'gradient-card-dark': 'linear-gradient(135deg, #0B1220 0%, #1E293B 100%)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
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