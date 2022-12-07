/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      blue: "#2091F9",
    },
    borderRadius: {
      br35: "35px",
      br5: "5px",
    },
    minHeight: {
      mh850: "850px",
    },
    minWidth: {
      mw20p: "20%",
    },
    backgroundImage: {
      bgImage: "url('./assets/background.png')",
    },
  },
  plugins: [],
};
