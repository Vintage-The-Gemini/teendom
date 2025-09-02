// File Path: frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure all assets are properly hashed for cache busting
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    },
    // Ensure build works in production
    minify: 'esbuild',
    sourcemap: false
  },
  // Base path for assets
  base: '/',
  // Ensure proper resolution
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  }
})