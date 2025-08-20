import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Updated brand colors to match the exact logo colors
        'novitrail-blue': '#004583',
        'novitrail-orange': '#E45D1C',
        'novitrail-blue-light': '#1E5BA8',
        'novitrail-blue-dark': '#003366',
        'novitrail-orange-light': '#FF7B47',
        'novitrail-orange-dark': '#CC4A15',
      },
      fontFamily: {
        'tomorrow': ['Tomorrow', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'brand': '0 10px 40px rgba(0, 69, 131, 0.2)',
        'brand-orange': '0 10px 40px rgba(228, 93, 28, 0.2)',
        'brand-xl': '0 20px 60px rgba(0, 69, 131, 0.3)',
        'brand-orange-xl': '0 20px 60px rgba(228, 93, 28, 0.3)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #004583 0%, #E45D1C 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #E45D1C 0%, #004583 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;