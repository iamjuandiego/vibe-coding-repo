/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#080a08",
        panel: "#0f1410",
        accent: "#4ade80",
        accentSoft: "#86efac"
      },
      boxShadow: {
        glow: "0 12px 50px rgba(74, 222, 128, 0.12)"
      },
      backgroundImage: {
        "premium-gradient":
          "radial-gradient(circle at top left, rgba(74,222,128,0.16), transparent 45%), radial-gradient(circle at bottom right, rgba(22,163,74,0.12), transparent 40%)"
      }
    }
  },
  plugins: []
};
