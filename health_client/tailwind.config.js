module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neonOrange: "#FF8F5E",
        neonYellow: "#FFEB70",
        neonGreen: "#81FF7D",
        neonRed: "#FF5F5F",
        darkBg: "#1A1A1A",
        darkCard: "#222222",
      },
      backgroundImage: {
        neonGradient:
          "linear-gradient(to right, #FF8F5E, #FFEB70, #81FF7D, #FF5F5F)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 191, 128, 0.3)",
        neonStrong: "0 0 30px rgba(255, 191, 128, 0.6)",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
