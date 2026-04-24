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
        charcoal: {
          50:  '#F5F5F4',
          100: '#E8E7E5',
          200: '#C9C7C2',
          300: '#A8A49D',
          400: '#7E7A72',
          500: '#5C5850',
          600: '#403D37',
          700: '#2C2925',
          800: '#1E1C19',
          900: '#141210',
          950: '#0D0C0A',
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
    },
  },
  plugins: [],
}
