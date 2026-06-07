import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", lg: "2rem" },
      screens: { "2xl": "1280px" }
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF7800",
          50:  "#FFF3E6",
          100: "#FFE0BF",
          200: "#FFC080",
          300: "#FFA040",
          400: "#FF8C1A",
          500: "#FF7800",
          600: "#E66B00",
          700: "#B35200",
          800: "#803B00",
          900: "#4D2400"
        },
        ink: {
          950: "#070808",
          900: "#0B0D0E",
          800: "#111416",
          700: "#171B1E",
          600: "#1F2429",
          500: "#2A3036",
          400: "#3B434B",
          300: "#5C6770",
          200: "#8A949D",
          100: "#C4CACF",
          50:  "#EEF1F3"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,120,0,0.25), 0 10px 40px -10px rgba(255,120,0,0.35)",
        soft: "0 10px 30px -10px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(255,120,0,0.10), transparent 60%), linear-gradient(180deg,#070808 0%, #0B0D0E 100%)",
        "brand-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,120,0,0.25), transparent 50%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,120,0,0.4)" },
          "50%":     { boxShadow: "0 0 0 14px rgba(255,120,0,0)" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        pulseGlow: "pulseGlow 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
