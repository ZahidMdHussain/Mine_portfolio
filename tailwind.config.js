/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      grayscale: {
        20: "20%",
      },
    },
    fontFamily: {
      sign: ["Engagement"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
