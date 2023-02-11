/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a202c",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right, #8360c3, #2ebf91)",
        "btn-pattern":
          "linear-gradient(90deg, hsla(274, 40%, 51%, 1) 0%, hsla(176, 45%, 66%, 1) 100%)",
        "hvr-btn-pattern":
          "linear-gradient(90deg, hsla(274, 40%, 51%, 1) 29%, hsla(176, 45%, 66%, 1) 56%)",
        "act-btn-pattern":
          "linear-gradient(90deg, hsla(176, 45%, 66%, 1) 20%, hsla(274, 40%, 51%, 1) 90%)",
      },
      animation: {
        drop: "6s ease-in-out 0s infinite alternate none running animation_drop",
      },
      keyframes: {
        animation_drop: {
          "0%": { transform: "translate3d(0px, 0px, 0px)" },
          "100%": { transform: "translate3d(0px, 20px, 0px)" },
        },
      },
      boxShadow: {
        quiz_card: "10px 10px 30px #484646,-10px -10px 30px #484646",
        but: "0 0 0 5px #2c30365f",
      },
      borderRadius: {
        quiz_card: "50px",
      },
    },
  },
  plugins: [],
};
