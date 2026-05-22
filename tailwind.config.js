/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Logo Yellow
        'honey-gold': '#E8B800',
        'honey-dark': '#C49A00',
        'honey-light': '#FFF5CC',
        'lemon-zest': '#FFFBEE',
        'warm-cream': '#FEFCF0',

        // Accent — Logo Red
        'tangerine': '#C8281E',
        'tangerine-dark': '#A01F16',
        'tangerine-light': '#F5E0DE',

        // Green — Primary Base (replaces grayscale)
        'verde': '#1B7A3E',
        'verde-dark': '#145E2F',
        'verde-mid': '#2E9E55',
        'verde-bright': '#3DBE6A',
        'verde-light': '#A8E6BE',
        'verde-pale': '#D4F5E2',
        'verde-mist': '#EBF9F1',

        // Touch of Sage (organic green)
        'sage': '#4A7C59',
        'sage-light': '#E8F2EC',

        // Grayscale (kept for text only — not backgrounds)
        'charcoal': '#1A1A1A',
        'graphite': '#3A3A3A',
        'slate-mid': '#6B6B6B',
        'silver': '#A8A8A8',
        'ash': '#D8D8D8',
        'off-white': '#F5F5F5',

        // Legacy aliases
        'blackberry': '#1A1A1A',
        'blackberry-light': '#3A3A3A',
        'cool-slate': '#6B6B6B',
        'honey-gold-old': '#E8B800',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-gentle': 'pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'warm-sm': '0 2px 12px rgba(232, 184, 0, 0.18)',
        'warm-md': '0 8px 32px rgba(232, 184, 0, 0.22)',
        'warm-lg': '0 16px 48px rgba(232, 184, 0, 0.28)',
        'tangerine-glow': '0 8px 24px rgba(200, 40, 30, 0.30)',
        'verde-glow': '0 8px 24px rgba(27, 122, 62, 0.30)',
        'card': '0 4px 20px rgba(27, 122, 62, 0.08)',
        'card-hover': '0 12px 40px rgba(27, 122, 62, 0.16)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #E8B800 0%, #C8281E 100%)',
        'gradient-lemon': 'linear-gradient(180deg, #FFFBEE 0%, #FEFCF0 100%)',
        'gradient-verde': 'linear-gradient(135deg, #1B7A3E 0%, #2E9E55 100%)',
        'gradient-verde-bright': 'linear-gradient(135deg, #2E9E55 0%, #3DBE6A 100%)',
        'gradient-gold': 'linear-gradient(135deg, #E8B800 0%, #C49A00 100%)',
      },
    },
  },
  plugins: [],
};