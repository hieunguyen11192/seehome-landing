/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        foreground: '#334155',
        primary: '#64748B',
        accent: '#EA580C',
        card: '#FFFFFF',
        border: '#E2E8F0',
        muted: '#EBF0F5',
      },
      fontFamily: {
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Rubik', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
