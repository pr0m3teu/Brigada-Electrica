import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/',
  build: {
    rollupOptions : {
      input: {
        main: resolve(__dirname, "index.html"),
        servicii: resolve(__dirname, "servicii.html")
      },
    },
    cssCodeSplit: true,
    minify: true,
    cssMinify: true,
    sourcemap: true
  },
});