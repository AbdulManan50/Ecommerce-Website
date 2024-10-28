/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      width: {
        custom: "1280px",
      },
      colors: {
        primary: "#F5F5F5",
        secondary: "#DB4444",
      },
    },
  },
  plugins: [],
};
