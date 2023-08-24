/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,scss,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#A4FFAF",
        dark: "#18171F",
        "light-dark": "#24232B",
        "light-grey": "#807D90",
        white: "#E5E4E8",
        black: "#0C0B11",
        grey: "#53525A",
        green: "#62C370",
        red: "#9A031E",
        yellow: "#F6CD6A",
        orange: "#FF7700",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",
      },
    },
  },
  plugins: [],
};
