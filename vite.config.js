import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/metrics': 'http://localhost:3030',
      '/user': 'http://localhost:3030',
    }
  }
})