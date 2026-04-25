/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#D4A84B',
          400: '#C4952E',
          500: '#B3852D',
          600: '#9A6E22',
          700: '#7A5518',
        },
        // Navy scale — replaces all dark charcoal tones
        navy: {
          50:  '#F0F3F8',
          100: '#D8E0EE',
          200: '#B0C0DC',
          300: '#7E97BC',
          400: '#506E99',
          500: '#324F78',
          600: '#1F3559',
          700: '#152540',
          800: '#0F1B30',
          900: '#0A1220',
          950: '#060C16',
        },
        // Cream scale — warm off-white for main backgrounds
        cream: {
          50:  '#FAFAF7',
          100: '#F4F3EE',
          200: '#EAE8E0',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      screens: {
        nav: '820px',
      },
    },
  },
  plugins: [],
}
