/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF6E8',
          100: '#F5E8C0',
          200: '#EDDA8E',
          300: '#E5CC5C',
          400: '#DDBE2E',
          500: '#D4AF37',
          600: '#B8962E',
          700: '#8C7123',
          800: '#604C18',
          900: '#34280D',
        },
        black: {
          DEFAULT: '#000000',
          50: '#F5F5F5',
          100: '#EBEBEB',
          200: '#D6D6D6',
          300: '#C2C2C2',
          400: '#ADADAD',
          500: '#999999',
          600: '#808080',
          700: '#666666',
          800: '#4D4D4D',
          900: '#333333',
          950: '#1A1A1A',
        },
        offwhite: {
          DEFAULT: '#FAFAFA',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#F0F0F0',
          400: '#E8E8E8',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow-gold': 'glow-gold 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'border-flow': 'border-flow 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-gold': {
          '0%': { boxShadow: '0 0 20px rgba(212,175,55,0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(212,175,55,0.35)' },
        },
        shimmer: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #F5E8C0, #D4AF37)',
        'gradient-gold-dark': 'linear-gradient(135deg, #B8962E, #D4AF37)',
        'gradient-dark': 'linear-gradient(180deg, #000000, #1A1A1A)',
        'gradient-premium': 'linear-gradient(135deg, #D4AF37 0%, #B8962E 50%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
};
