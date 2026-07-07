/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1E1C',
        card: '#16302B',
        paper: '#F1EDE4',
        ochre: '#C9962B',
        gis: '#4E9A73',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        contour: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%234E9A73' stroke-opacity='0.15' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3Ccircle cx='60' cy='60' r='40'/%3E%3Ccircle cx='60' cy='60' r='58'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
