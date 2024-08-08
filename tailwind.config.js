/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0063C7',
        'custom-bg': 'rgba(0, 99, 199, 0.5)', // Agregar el color con transparencia
        'trfondo' :'rgba(255, 255, 255, 0.2)', //fundo de la fila creada de la clase
        'boton-iniciar':'#0082D6',
        'boton-borrar':'#FF4C4C',
        'modalbg':'rgba(0, 0, 0, 0.5)',
        'custom-blue2': '#56AEFF'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(10deg, #0045BA 10%, #001F54 70%)',
        'fondoaula': "url('./images/background-1.png')"
      },
      maxWidth: {
        '3000': '3000px',
      },
      margin: {
        'autom': 'auto',
      },
      translate: {
        '-1/2': '-50%',
      },
      backgroundColor: {
        'custom-focus': 'rgba(0, 99, 199, 0.5)', // Define el color con opacidad al 50%
      },
    },
  },
  plugins: [],
}