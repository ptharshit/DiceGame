/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soft-radial': 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(214,214,214,1) 35%, rgba(169,169,169,1) 100%)',
      },
      colors: {
        'custom-red': '#ff0000',
      },
    },
  },
  plugins: [],
}