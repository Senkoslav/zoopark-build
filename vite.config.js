import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [
    react(),
    viteSingleFile()   // <- вот он
  ],
  base: './',
  build: {
    target: 'es2015',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // всё в один HTML
        format: 'iife',
        name: 'App'
      }
    }
  }
})
