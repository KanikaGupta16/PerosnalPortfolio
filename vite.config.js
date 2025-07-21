import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize for static hosting and SEO
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    target: 'es2018'
  },
  // Optimize for development
  server: {
    port: 5173,
    open: true
  },
  // Optimize for production
  preview: {
    port: 4173
  }
})
