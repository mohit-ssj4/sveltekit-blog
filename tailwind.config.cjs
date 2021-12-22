const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};

module.exports = config;
