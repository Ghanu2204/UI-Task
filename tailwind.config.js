/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        headerlight: "#F1F1F1",
        headerdark: "#5b5b5b",
        bodySecondary: "#E4E7EB",
        bodydark: "#D1D5D9",
        tablehead: "#DBFFFD",
        tableheaddark: "#AAF3F1",
      },
    },
  },
  plugins: [],
};
