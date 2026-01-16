/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloudflare-orange': '#F6821F',
        'cloudflare-blue': '#0051C3',
        'masterclass': {
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          gray: '#2A2A2A',
          'light-gray': '#666666',
          white: '#FFFFFF',
          cream: '#F5F5F5',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 25s ease-in-out infinite',
        'float-slow': 'float 30s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) translateX(10px) rotate(5deg)' },
          '50%': { transform: 'translateY(0px) translateX(20px) rotate(0deg)' },
          '75%': { transform: 'translateY(20px) translateX(10px) rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
}
