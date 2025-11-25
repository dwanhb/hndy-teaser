import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hndy-teaser/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8003,
    strictPort: false
  }
})
