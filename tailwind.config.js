/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#FFAD0F",
        secondary: "#6C757D",
        success: "#198754",
        danger: "#DC3545",
        warning: "#FFC107",
        info: "#0DCAF0",
        black: "#252016",
        white: "#F9F8F7",
        purple: "#9D0191",
        orange: "#FE8824",
        pink: "#F49B95",
        "yellow-400": "#FFCD39",
        cyan: "#B3EBEA",
        "cyan-9FC2C5": "#9FC2C5",
        "cyan-darkest": "#437372",
        gray: "#A9ABAA",
        "gray-400": "#ADB5BD",
        "gray-500": "#CED4DA",
      },
    },
  },
  plugins: [],
};

