import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/EBFSession04/',   // crucial for GitHub Pages
  build: {
    outDir: 'dist',
  },
  server: { port: 3000 }
});