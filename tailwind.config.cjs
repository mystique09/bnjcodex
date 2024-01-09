/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#495E57',
        secondary: '#EAF0EE',
        accent: '#F4CE14',
        "text-content": '#45474B'
      },
      fontFamily: {
        "space-grotesk": "Space Grotesk Variable, sans-serif",
        "poppins": "Poppins, sans-serif"
      }
    }
  },
  plugins: []
};
