/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        },
      },

      colors: {
        'light-gray': "#3B3B3B"
      },

      fontFamily: {
        'space-grotesk': "'space grotesk,sans-serif",

      },

      fontSize: {
        'custom-xl': "28px",
        'custom-5xl': "56px",
      },

      lineHeight: {
        'custom-2xl': "25.2px",
        'custom-4xl': "60px",
        'custom-5xl': "69.56px",
      },

      backgroundImage: {
        'hero-layer': "url('/public/assets/images/webp/hero-gray-layer.webp')",
      },
    },
  },
  plugins: [],
}

