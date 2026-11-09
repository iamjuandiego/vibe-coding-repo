/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#07090f",
        panel: "#0e121b",
        accent: "#f59e0b",
        accentSoft: "#fbbf24",
        spaceBlue: "#1e3a5f",
        missionRed: "#c2410c"
      },
      boxShadow: {
        glow: "0 12px 50px rgba(245, 158, 11, 0.15)",
        "glow-soft": "0 8px 30px rgba(245, 158, 11, 0.08)"
      },
      backgroundImage: {
        "premium-gradient":
          "radial-gradient(circle at top left, rgba(245,158,11,0.12), transparent 45%), radial-gradient(circle at bottom right, rgba(30,58,95,0.25), transparent 40%)",
        "space-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
      },
      backgroundSize: {
        "space-grid": "40px 40px"
      }
    }
  },
  plugins: []
};
