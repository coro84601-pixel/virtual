// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",  // 👈 muy importante en hosting compartido
  server: {
    host: true,
    port: 5173,
  },
})
