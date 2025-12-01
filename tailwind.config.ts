import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Microsoft Fluent Color System
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222 47% 11%)",

        primary: {
          DEFAULT: "hsl(237 70% 58%)", // Fluent Blue
          50: "hsl(237 70% 98%)",
          100: "hsl(237 70% 94%)",
          200: "hsl(237 70% 88%)",
          300: "hsl(237 70% 78%)",
          400: "hsl(237 70% 68%)",
          500: "hsl(237 70% 58%)",
          600: "hsl(237 70% 48%)",
          700: "hsl(237 70% 38%)",
          800: "hsl(237 70% 28%)",
          900: "hsl(237 70% 18%)",
        },

        accent: {
          teal: "hsl(173 80% 40%)",
          green: "hsl(142 76% 36%)",
          amber: "hsl(38 92% 50%)",
          rose: "hsl(346 77% 50%)",
          purple: "hsl(271 81% 56%)",
        },

        neutral: {
          50: "hsl(0 0% 98%)",
          100: "hsl(0 0% 96%)",
          200: "hsl(0 0% 90%)",
          300: "hsl(0 0% 83%)",
          400: "hsl(0 0% 64%)",
          500: "hsl(0 0% 45%)",
          600: "hsl(0 0% 32%)",
          700: "hsl(0 0% 25%)",
          800: "hsl(0 0% 15%)",
          900: "hsl(0 0% 9%)",
        },

        border: "hsl(0 0% 90%)",
        input: "hsl(0 0% 90%)",
        ring: "hsl(237 70% 58%)",

        success: "hsl(142 76% 36%)",
        warning: "hsl(38 92% 50%)",
        error: "hsl(0 84% 60%)",
        info: "hsl(207 90% 54%)",
      },

      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },

      boxShadow: {
        fluent: "0 4px 16px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.04)",
        "fluent-elevated": "0 8px 32px rgba(0, 0, 0, 0.12), 0 16px 64px rgba(0, 0, 0, 0.08)",
        "fluent-hover": "0 8px 24px rgba(0, 0, 0, 0.12), 0 12px 48px rgba(0, 0, 0, 0.08)",
      },

      fontFamily: {
        sans: ['"Segoe UI"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(79, 70, 229, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
