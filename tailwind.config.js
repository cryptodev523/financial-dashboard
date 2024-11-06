/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#343C6A",
        },
        secondary: {
          500: "#b1b1b1",
        },
      },
    },
  },
  plugins: [],
};
