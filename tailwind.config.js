module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.2)' },
          '28%': { transform: 'scale(1.4)' },
          '42%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1.2)' },
          '84%': { transform: 'scale(1.4)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out forwards',
        heartbeat: 'heartbeat 1.5s infinite',
         scroll: "scroll 25s linear infinite",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
      },
      colors: {
        primary: '#003B70',
        secondary: '#0784C9',
        black: "#000000",
        light: '#dff3f9',
        gray: {
          650: '#6A6A6A',
        },
      },

    },
  },
  plugins: [],
};