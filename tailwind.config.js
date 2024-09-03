/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '70': '70rem', // Adiciona uma altura personalizada
      },
      width: {
        '64': '16rem', // Adiciona uma largura personalizada
        '220': '220px', // Adiciona uma largura personalizada de 300px
      },
      margin: {
        '100': '12.75rem', // Adiciona uma margem personalizada
        '13': '3.25rem', 
      },
    },
  },
  plugins: [],
}