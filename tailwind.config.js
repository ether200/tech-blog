module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js, jsx}",
    ".index/html",
    "./public/**/*.html",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0.5: "1px",
        97: "25rem",
        98: "30rem",
        99: "35rem",
      },
      zIndex: {
        "-1": "-1",
      },
      screens: {
        ll: "1170px",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, 200px)",
      },
    },
  },
  variants: {
    typography: ["dark"],
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
