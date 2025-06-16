import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/generative-art/',
  server: {
    port: 3000,        // ou autre si tu préfères
    open: true         // ouvre automatiquement dans le navigateur
  },
  build: {
    outDir: 'dist',     // dossier de sortie
    emptyOutDir: true   // nettoie avant chaque build
  }
});
