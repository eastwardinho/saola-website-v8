import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Orange - Logo/Wordmark ONLY
        'saola-orange': '#FFA400',
        // CTA Colors
        'saola-coral': '#FF7F32',
        'saola-gold': '#FFB81C',
        // Supporting colors
        'saola-cream': '#F3CFB3',
        'saola-blush': '#F5D0C4',
        'saola-brown': '#5A4522',
        'saola-dark': '#3D3935',
        'saola-charcoal': '#2A2725',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight-heading': '-0.05em',
        'loose-body': '0.01em',
        'caps': '0.1em',
      },
    },
  },
  plugins: [],
};

export default config;
