import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/LarteKaffi/", // Agregar el nombre del repositorio
  plugins: [react()],
})
