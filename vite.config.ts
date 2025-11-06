import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // 👇 completely ignore convex directory during build
      external: [/^convex\//],
    },
  },
  optimizeDeps: {
    exclude: ['convex'],
  },
})
