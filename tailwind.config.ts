import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C6A87C",
        secondary: "#8B5E3C",
        "bg-light": "#FDFBF7",
        "bg-dark": "#120F0D",
        "surface-dark": "#1C1917",
        "surface-light": "#FFFFFF",
        "accent-brown": "#4A3B32",
        "text-light": "#2D2420",
        "text-dark": "#EAE0D5",
        "gold-accent": "#D4AF37",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-playfair)", "serif"],
        body: ["var(--font-lato)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(198, 168, 124, 0.2)",
      },
      letterSpacing: {
        "widest-xl": "0.25em",
      },
      keyframes: {
        shine: {
          to: { backgroundPosition: "200% center" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
