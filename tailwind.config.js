/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a1a',
          50: '#0d0d22',
          100: '#111128',
          200: '#16163a',
          300: '#1e1e4a',
        },
        accent: {
          cyan: '#00d4ff',
          violet: '#7c3aed',
          purple: '#a855f7',
        },
        muted: '#94a3b8',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 212, 255, 0.15)',
        'glow-sm': '0 0 10px rgba(0, 212, 255, 0.1)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(0, 212, 255, 0.1)',
      },
      screens: {
        xs: '450px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
