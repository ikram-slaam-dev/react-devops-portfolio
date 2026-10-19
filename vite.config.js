import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration. The production build is written to the "dist" folder,
// which is exactly what AWS Amplify publishes (see amplify.yml).
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
