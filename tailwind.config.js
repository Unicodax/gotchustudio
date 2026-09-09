/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        paper: "#F6F6F3",
        "paper-dim": "#EFEEE9",
        ink: "#14161C",
        "ink-soft": "#1E2029",
        signal: {
          DEFAULT: "#3546F0",
          dark: "#2635C9",
          light: "#5568FF",
        },
        confirm: "#17B26A",
        muted: "#63666E",
        "muted-light": "#8B8E96",
        hairline: "#E4E3DD",
        "hairline-dark": "#2B2E38",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1240px",
        prose: "640px",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "18px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,22,28,0.04), 0 8px 24px rgba(20,22,28,0.06)",
      },
      transitionTimingFunction: {
        gotchu: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
