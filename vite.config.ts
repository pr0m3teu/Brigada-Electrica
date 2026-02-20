import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/Brigada-Electrica/',
  build: {
    rollupOptions : {
      input: {
        main: resolve(__dirname, "index.html"),
        servicii: resolve(__dirname, "servicii.html")
      },
    },
  },
});