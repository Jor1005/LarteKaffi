import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // 👈 Agrega esta línea con el nombre de tu repositorio
})
