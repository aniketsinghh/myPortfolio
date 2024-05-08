/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'faint-white': 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
}