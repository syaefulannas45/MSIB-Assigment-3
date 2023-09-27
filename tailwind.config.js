/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#383636",
        brown: "#806f66",
        cream: "#fff2bc",
        orange: "#ff5a0b",
        red: "#ff0000",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
