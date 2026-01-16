import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Hardcode the base path for GitHub Pages deployment.
  // This should match your repository name.
  base: '/receiving-journey/',
})
