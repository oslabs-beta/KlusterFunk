import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/user': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        secure: false,
      },
      '/metrics': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        secure: false,
      },
    },
    port: 8080,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
