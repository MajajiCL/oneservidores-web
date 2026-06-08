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
        // OneServidores brand — orange replaces violet as single chromatic accent
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
          900: "#4D2400",
          glow: "#FFA94D",
          wash: "#FFC785",
          deep: "#3D1F00"
        },
        // Surface palette adapted from dope.security tokens
        void:        "#090909",
        "bone-white":"#f7f9fa",
        ash:         "#f0f0f0",
        slate:       "#6b6b6b",
        graphite:    "#454545",
        smoke:       "#828384",
        iron:        "#333333",
        cinder:      "#1a1212",
        "storm-gray":"#475467"
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif:   ["'Playfair Display'", "Cormorant Garamond", "Georgia", "serif"],
        mono:    ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      fontSize: {
        // Following dope.security scale: 10/14/16/20/24/32/48/64/80/88/146
        "caption":     ["10px", { lineHeight: "1.5", letterSpacing: "0.07em" }],
        "body-sm":     ["14px", { lineHeight: "1.5", letterSpacing: "-0.009em" }],
        "body":        ["16px", { lineHeight: "1.5", letterSpacing: "-0.009em" }],
        "subheading":  ["20px", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-sm":  ["24px", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "heading":     ["32px", { lineHeight: "1.2",  letterSpacing: "-0.03em" }],
        "heading-lg":  ["48px", { lineHeight: "1.11", letterSpacing: "-0.04em" }],
        "display-sm":  ["64px", { lineHeight: "0.95", letterSpacing: "-0.05em" }],
        "display":     ["88px", { lineHeight: "0.9",  letterSpacing: "-0.07em" }],
        "display-xl":  ["146px",{ lineHeight: "0.92", letterSpacing: "-0.04em" }]
      },
      borderRadius: {
        "card":  "19.2px",
        "card-lg": "24px",
        "pill":  "9999px",
        "badge": "8px"
      },
      boxShadow: {
        // Mostly flat (dope principle) — elevation via glass + glow only
        subtle:  "rgba(16, 24, 40, 0.05) 0px 1px 2px 0px",
        glow:    "0 0 0 1px rgba(255,120,0,0.4), 0 0 32px rgba(255,120,0,0.35)",
        glowSoft:"0 0 28px rgba(255,120,0,0.22)",
        glass:   "inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.4)"
      },
      backgroundImage: {
        "orchid-radial":
          "radial-gradient(circle closest-corner at 10% 50%, rgba(255,120,0,0.45), rgba(0,0,0,0) 55%)",
        "amber-band":
          "linear-gradient(90deg, #3D1F00, #B35200 50%, #FF8C1A)",
        "void-fade":
          "linear-gradient(180deg, #090909 0%, #0c0606 100%)",
        "card-gradient-a":
          "linear-gradient(135deg, #3D1F00 0%, #FF7800 100%)",
        "card-gradient-b":
          "linear-gradient(135deg, #1a1212 0%, #B35200 100%)",
        "card-gradient-c":
          "linear-gradient(135deg, #4D2400 0%, #FFA94D 100%)",
        "card-gradient-d":
          "linear-gradient(135deg, #271635 0%, #FF7800 100%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,120,0,0.45)" },
          "50%":     { boxShadow: "0 0 0 14px rgba(255,120,0,0)" }
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        pulseGlow: "pulseGlow 2.2s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
