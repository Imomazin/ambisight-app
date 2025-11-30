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
        // Fluent Design System - Microsoft Copilot inspired
        fluent: {
          blue: '#2563EB',
          teal: '#06B6D4',
          purple: '#8B5CF6',
          orange: '#F59E0B',
        },
        background: {
          DEFAULT: '#ffffff',
          secondary: '#f9fafb',
        },
        border: {
          DEFAULT: '#e5e7eb',
          light: '#f3f4f6',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          tertiary: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'fluent': '12px',
        'fluent-lg': '16px',
      },
      boxShadow: {
        'fluent-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.06)',
        'fluent': '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'fluent-lg': '0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 8px 24px 0 rgba(0, 0, 0, 0.10)',
        'fluent-hover': '0 8px 24px 0 rgba(37, 99, 235, 0.12), 0 2px 8px 0 rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
