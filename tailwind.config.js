/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'ken-burns': 'kenBurns 14s ease-in-out infinite',
        float0: 'float 3s ease-in-out 0s infinite',
        float1: 'float 3s ease-in-out 1s infinite',
        float2: 'float 3s ease-in-out 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenBurns: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-9px)' },
        },
      },
    },
  },
  plugins: [],
}

