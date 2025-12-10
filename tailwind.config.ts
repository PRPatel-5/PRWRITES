import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EBF0',
          100: '#D1D7E1',
          200: '#A3AFC3',
          300: '#7587A5',
          400: '#475F87',
          500: '#1A2B4A',
          600: '#15223B',
          700: '#10192C',
          800: '#0B111E',
          900: '#05080F',
        },
        gold: {
          50: '#FDF8ED',
          100: '#FBF1DB',
          200: '#F7E3B7',
          300: '#F3D593',
          400: '#EFC76F',
          500: '#D4AF37',
          600: '#C9A961',
          700: '#A68C2C',
          800: '#7D6921',
          900: '#534616',
        },
        cream: {
          50: '#FEFEFE',
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      backgroundImage: {
        'gradient-navy-gold': 'linear-gradient(135deg, #1A2B4A 0%, #2D3E5F 50%, #D4AF37 100%)',
        'gradient-gold-navy': 'linear-gradient(135deg, #D4AF37 0%, #C9A961 50%, #1A2B4A 100%)',
        'gradient-radial-navy': 'radial-gradient(circle at center, #1A2B4A 0%, #15223B 100%)',
        'gradient-mesh': 'linear-gradient(135deg, #1A2B4A 0%, #2D3E5F 25%, #475F87 50%, #C9A961 75%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(to bottom right, #1A2B4A 0%, #2D3E5F 50%, rgba(212, 175, 55, 0.1) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'navy-glow': '0 0 20px rgba(26, 43, 74, 0.4)',
        'premium': '0 10px 40px rgba(26, 43, 74, 0.15)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;