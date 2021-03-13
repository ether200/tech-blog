module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        97: "25rem",
        99: "30rem",
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
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
