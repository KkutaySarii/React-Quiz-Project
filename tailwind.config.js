/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right, #8360c3, #2ebf91)",
        "btn-pattern":
          "linear-gradient(90deg, hsla(274, 40%, 51%, 1) 0%, hsla(176, 45%, 66%, 1) 100%)",
        "hvr-btn-pattern":
          "linear-gradient(90deg, hsla(274, 40%, 51%, 1) 29%, hsla(176, 45%, 66%, 1) 56%)",
        "act-btn-pattern":
          "linear-gradient(90deg, hsla(176, 45%, 66%, 1) 20%, hsla(274, 40%, 51%, 1) 90%)",
      },
    },
  },
  plugins: [],
};
