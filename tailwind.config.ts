import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#fcf9f4",
        "surface-dim": "#dcdad5",
        "surface-bright": "#fcf9f4",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3ee",
        "surface-container": "#f0ede9",
        "surface-container-high": "#ebe8e3",
        "surface-container-highest": "#e5e2dd",
        "on-surface": "#1c1c19",
        "on-surface-variant": "#554336",
        "inverse-surface": "#18181b",
        "inverse-on-surface": "#f3f0eb",
        outline: "#887364",
        "outline-variant": "#dbc2b0",
        primary: {
          DEFAULT: "#d97706",
          dark: "#8d4b00",
          light: "#ffdcc3",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#20bd5a",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      boxShadow: {
        ambient: "0 12px 32px -8px rgba(217, 119, 6, 0.15), 0 4px 12px -2px rgba(24, 24, 27, 0.04)",
        "ambient-lg": "0 20px 48px -10px rgba(217, 119, 6, 0.22), 0 6px 16px -4px rgba(24, 24, 27, 0.06)",
        glow: "0 0 25px rgba(217, 119, 6, 0.35)",
        card: "0 2px 10px rgba(24, 24, 27, 0.04)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
