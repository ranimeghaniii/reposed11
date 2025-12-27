/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        handwriting: ['"Pacifico"', 'cursive'], // For a cozy, dessert-like feel
      },
      colors: {
        primary: {
          light: '#FFF0D9', // Light cream
          DEFAULT: '#F9E2AF', // Soft yellow-cream
          dark: '#E8C581', // Deeper cream
        },
        secondary: {
          light: '#B2DFDB', // Mint green
          DEFAULT: '#80CBC4', // Tealish green
          dark: '#4DB6AC', // Darker teal
        },
        accent: {
          pink: '#FFC0CB', // Cherry blossom pink
          brown: '#8B4513', // Chocolate brown
          berry: '#E91E63', // Raspberry red
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')", // Example background for hero
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '0%': {
            opacity: '0',
            transform: 'scale3d(.3, .3, .3)',
          },
          '20%': {
            transform: 'scale3d(1.1, 1.1, 1.1)',
          },
          '40%': {
            transform: 'scale3d(.9, .9, .9)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale3d(1.03, 1.03, 1.03)',
          },
          '80%': {
            transform: 'scale3d(.97, .97, .97)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 1s ease-out forwards',
        'pop-in': 'popIn 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}
