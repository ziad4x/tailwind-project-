/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px'
    },
    extend: {
      colors: {
      primary: '#010a5e'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem'
        }
      },
      keyframes:{
        move:{
          "50%":{transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        "movingY": 'move 2s linear infinite'
      }
    },
  },
  plugins: [],
}

