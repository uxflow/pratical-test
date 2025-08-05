import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',
  server: {
    open: './index.html',
  },
  plugins: [react()],
})
