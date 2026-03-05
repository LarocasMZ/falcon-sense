import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // FalconSense Brand Colors - Tech/Futuristic Palette
        falcon: {
          black: '#0a0a0a',      // Main background (dark feathers)
          dark: '#111111',       // Secondary background
          surface: '#1a1a1a',    // Cards, surfaces
          border: '#2a2a2a',     // Borders
          gray: '#888888',       // Muted text
          silver: '#e8e8e8',     // Light text (white feathers)
          white: '#ffffff',
          // Primary red glow (eye/circuits)
          red: {
            DEFAULT: '#ff3333',
            dark: '#cc2929',
            glow: '#ff6666',
          },
          // Accent cyan for tech feel
          cyan: {
            DEFAULT: '#00d4aa',
            dark: '#00aa88',
          },
        },
      },
      fontFamily: {
        // Modern, tech-inspired fonts
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom sizing for impactful headings
        'hero': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'circuit': 'circuit-pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(255, 51, 51, 0.5), 0 0 40px rgba(255, 51, 51, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 212, 170, 0.5), 0 0 40px rgba(0, 212, 170, 0.3)',
        'glow-subtle': '0 0 30px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
