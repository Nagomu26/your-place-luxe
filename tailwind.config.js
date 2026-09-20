/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        noir: "#0B0908",
        coal: "#141019",
        panel: "#1A1510",
        line: "#2C231A",
        gold: "#C4A05C",
        goldlight: "#E5CA92",
        golddark: "#8F713C",
        ivory: "#F2EAD8",
        fog: "#A79B85",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      boxShadow: {
        goldglow: "0 0 0 1px rgba(196,160,92,.28), 0 16px 50px -16px rgba(196,160,92,.30)",
        cardglow: "0 30px 70px -30px rgba(0,0,0,.9)",
        hairline: "0 1px 0 0 rgba(196,160,92,.25)",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
}