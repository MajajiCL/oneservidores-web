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
          100: "#FFE4C2",
          200: "#FFC785",
          300: "#FFA94D",
          400: "#FF8C1A",
          500: "#FF7800",
          600: "#E66B00",
          700: "#B35200",
          800: "#803B00",
          900: "#4D2400"
        },
        ink: {
          950: "#0B1220",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50:  "#F8FAFC",
          25:  "#FBFCFD"
        },
        // Soft brand backgrounds for icon containers / pill badges
        soft: {
          orange: "#FFF3E6",
          orange2: "#FFE4C2",
          gray: "#F4F6F9",
          blue: "#EEF4FF"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 28px -8px rgba(15,23,42,0.08)",
        cardHover: "0 2px 4px rgba(15,23,42,0.05), 0 18px 40px -10px rgba(15,23,42,0.12)",
        glow: "0 10px 30px -10px rgba(255,120,0,0.45)",
        ring: "0 0 0 6px rgba(255,120,0,0.10)"
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(255,120,0,0.10) 0%, transparent 60%)",
        "page-fade":
          "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,120,0,0.35)" },
          "50%":     { boxShadow: "0 0 0 12px rgba(255,120,0,0)" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-6px)" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        pulseGlow: "pulseGlow 2.2s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
