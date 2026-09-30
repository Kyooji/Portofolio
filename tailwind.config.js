/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050A18',
        'bg-dark': '#0A1633',
        blue: '#1565FF',
        electric: '#00A8FF',
        cyan: '#00E5FF',
        'light-blue': '#7DD3FC',
        ink: '#EAF6FF',
        muted: '#8BA9C7',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        pixel: '4px 4px 0 0 #00A8FF',
        'pixel-sm': '3px 3px 0 0 #1565FF',
        glow: '0 0 12px rgba(0, 168, 255, 0.55)',
      },
    },
  },
  plugins: [],
}
