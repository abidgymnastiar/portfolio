/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6A64F",
        secondary: "#b56141",
        background: "#FFFCF8",
        white: "#FBFBFB",
        bg_img: "#c100b6",

        primaryy: {
          100: "#feffff",
          200: "#eff3fd",
          300: "#a6a8d8",
        },
        secondaryy: {
          100: "#31d1ff",
          200: "#1fbeff",
          300: "#1caefd",
          400: "#1fa0ff",
        },
        tertiary: {
          100: "#2b2c69",
          200: "#242460",
          300: "#363c93",
          400: "#5f6bd9",
          500: "#242663",
          600: "#0b1145",
          700: "#03093b"
        },
        quaternary: {
          100: "#d3facd",
          200: "#08a2e3",
          300: "#31d1ff",
          400: "#1fa0ff",
          
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #31d1ff, #1fa0ff)",
        "gradient-secondary": "linear-gradient(to right, #242663, #0b1145)",
      },
    },
  },
  plugins: [],
};
