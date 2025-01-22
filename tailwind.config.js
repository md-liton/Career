/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '10px',
        screens: {
            xl: '1240px',
            '2xl': '1400px'
        }
    },
    screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    colors: {
      'primary': '#081b29',
    },
    },
  },
  plugins: [],
}

