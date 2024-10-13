/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#7DCA45',
        'secondary': '#C0C0C0',
        'card-bg': 'rgba(125, 202, 69, 0.1)',
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
