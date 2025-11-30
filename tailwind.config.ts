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
        // Premium Design System - Microsoft Copilot Summit inspired
        'bg-page': '#F3F4F6',
        'bg-elevated': '#FFFFFF',
        'bg-hero-from': '#F9FAFF',
        'bg-hero-to': '#F3F4FF',

        primary: {
          DEFAULT: '#2563EB',
          soft: '#DBEAFE',
        },

        accent: {
          teal: '#14B8A6',
          purple: '#8B5CF6',
          amber: '#F59E0B',
        },

        // Legacy fluent colors for compatibility
        fluent: {
          blue: '#2563EB',
          teal: '#14B8A6',
          purple: '#8B5CF6',
          orange: '#F59E0B',
        },

        background: {
          DEFAULT: '#ffffff',
          secondary: '#f9fafb',
        },

        border: {
          DEFAULT: '#e5e7eb',
          subtle: '#E5E7EB',
          light: '#f3f4f6',
        },

        text: {
          main: '#111827',
          primary: '#111827',
          muted: '#6B7280',
          secondary: '#6b7280',
          soft: '#9CA3AF',
          tertiary: '#9ca3af',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      fontSize: {
        // Clear typography hierarchy
        'hero': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'h1': ['34px', { lineHeight: '1.25', fontWeight: '600' }],
        'h2': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'eyebrow': ['12px', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.05em' }],
      },

      borderRadius: {
        'card': '18px',
        'pill': '9999px',
        'fluent': '12px',
        'fluent-lg': '16px',
      },

      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'elevated': '0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 2px 6px 0 rgba(0, 0, 0, 0.04)',
        'fluent-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.06)',
        'fluent': '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'fluent-lg': '0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 8px 24px 0 rgba(0, 0, 0, 0.10)',
        'fluent-hover': '0 8px 24px 0 rgba(37, 99, 235, 0.12), 0 2px 8px 0 rgba(0, 0, 0, 0.08)',
      },

      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse at top, #F9FAFF 0%, #F3F4FF 100%)',
        'gradient-pill': 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },

      backdropBlur: {
        'glass': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
