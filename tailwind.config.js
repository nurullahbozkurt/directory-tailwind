module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/img/image3.jpeg')",
      },
      fontFamily: {
        logo: ["Indie Flower", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
