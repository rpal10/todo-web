module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      green: {
        light: "#E6EFF0",
        DEFAULT: "#207073",
        dark: "#153F41",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
