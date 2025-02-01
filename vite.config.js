import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/LarteKaffi/", // Agrega el nombre del repositorio aquí
  plugins: [react()],
})
