/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "var(--box-shadow)", // or define your actual shadow value
      },
      animation: {
        "slide-up": "slide-up 0.5s ease",
        "slide-down": "slide-down 0.5s ease",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(-5rem)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(5rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      colors: {
        card1: "#b624ff",
        card2: "#32963d",
        card3: "#c41849",
        card4: "#03a5fc",
      },
    },
  },
  plugins: [],
};
