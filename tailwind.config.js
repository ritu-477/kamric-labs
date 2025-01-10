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
        'light-gray': "#3B3B3B",
        'border-white': "#FFFFFF33",
        'border-gray': "#343434",
        'dark-gray': "#4d4d4d",
        'dusk-black': "#FFFFFF1A",
      },

      fontFamily: {
        'space-grotesk': "'space Grotesk',sans-serif",
      },

      fontSize: {
        'custom-xl': "28px",
        'custom-4xl': "56px",
        'custom-5xl': "64px",
      },

      lineHeight: {
        'custom-2xl': "25.2px",
        'custom-3xl': "21.74px",
        'custom-4xl': "60px",
        'custom-5xl': "69.56px",
      },

      backgroundImage: {
        'hero-layer': "url('/public/assets/images/webp/hero-gray-layer.webp')",
        'project-bg': "url('/public/assets/images/webp/project-bg.webp')",
      },

      boxShadow: {
        'shadow-xl': "0px_4px 15px_0px_#FFFFFF1A",
        'shadow-2xl': "0px_-1px_11px_0px_#ffffff1a",
        'shadow-3xl': "0px_4px_16px_0px_#FFFFFF1A",
      },

      backgroundSize: {
        'hero-bg-set': '100% 726px'
      },
    },
  },
  plugins: [],
}

