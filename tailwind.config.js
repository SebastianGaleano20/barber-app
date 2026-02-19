/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: '#111827',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'float': 'float 4s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out both',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(37, 99, 235, 0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.7), 0 0 40px rgba(220, 38, 38, 0.3)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
