/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505', // Lebih pekat mendekati VSPO
        surface: '#121212', // Untuk kartu/elemen di atas background
        primary: '#00d8ff', // Cyan (tetap)
        secondary: '#8b5cf6', // Purple
        accent: '#ffffff', // Putih tajam untuk teks utama
        muted: '#94a3b8', // Abu-abu untuk teks sekunder
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Pastikan Inter ter-load di index.html/css
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 216, 255, 0.15)',
      }
    },
  },
  plugins: [],
}