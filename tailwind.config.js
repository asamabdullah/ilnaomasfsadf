// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }






// tailwind.config.js
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         zoom: 'zoom 4s ease-in-out infinite',
//         'slide-diagonal': 'slideDiagonal 5s ease-in-out infinite',
//       },
//       keyframes: {
//         zoom: {
//           '0%, 100%': { transform: 'scale(1)' },
//           '50%': { transform: 'scale(1.1)' },
//         },
//         slideDiagonal: {
//           '0%': { transform: 'translate(-20px, -20px)' },
//           '50%': { transform: 'translate(20px, 20px)' },
//           '100%': { transform: 'translate(-20px, -20px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };








// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         zoom: 'zoom 4s ease-in-out infinite',
//         'slide-diagonal': 'slideDiagonal 5s ease-in-out infinite',
//       },
//       keyframes: {
//         zoom: {
//           '0%, 100%': { transform: 'scale(1)' },
//           '50%': { transform: 'scale(1.1)' },
//         },
//         slideDiagonal: {
//           '0%': { transform: 'translate(-20px, -20px)' },
//           '50%': { transform: 'translate(20px, 20px)' },
//           '100%': { transform: 'translate(-20px, -20px)' },
//         },
//       },
//       colors: {
//         'romantic-pink': '#ff88c2',
//         'romantic-red': '#ff5a5f',
//       },
//       backgroundImage: {
//         'romantic-gradient': 'linear-gradient(to right, #ff88c2, #ff5a5f)',
//       },
//     },
//   },
//   plugins: [],
// };








module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        zoom: 'zoom 4s ease-in-out infinite',
        'slide-diagonal': 'slideDiagonal 5s ease-in-out infinite',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        slideDiagonal: {
          '0%': { transform: 'translate(-20px, -20px)' },
          '50%': { transform: 'translate(20px, 20px)' },
          '100%': { transform: 'translate(-20px, -20px)' },
        },
      },
      colors: {
        'romantic-pink': '#ff88c2',
        'romantic-red': '#ff5a5f',
      },
      backgroundImage: {
        'romantic-gradient': 'linear-gradient(to right, #ff88c2, #ff5a5f)',
      },
    },
  },
  plugins: [],
};
