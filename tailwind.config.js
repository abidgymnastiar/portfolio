/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "F6A64F",
        secondary: "#b56141",
        background: "#FFFCF8",
        white: "#FBFBFB",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #F4a44f, #ac573f)",
      },
    },
  },
  plugins: [],
};
