module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'float-in': {
          '0%': { opacity: '0', transform: 'translateY(130px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(130px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-in': 'float-in 0.8s ease-out forwards',
        'slide-in': 'slide-in 0.8s ease-out forwards',
      },
      screens: {
        android: {
          raw: '(max-width: 480px) and (pointer: coarse) and (hover: none)',
        },
      },
    },
  },
  plugins: [],
};
