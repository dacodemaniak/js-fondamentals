import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Dossier racine de vos fichiers sources (où se trouve index.html)
  root: 'src',
  build: {
    // Dossier de sortie pour les fichiers construits (sera créé à la racine du projet)
    outDir: '../dist',
    // Configuration optionnelle pour préciser le point d'entrée de la construction
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // Vous pouvez ajouter d'autres pages HTML ici plus tard
        // about: resolve(__dirname, 'src/about.html'),
      }
    }
  },
  // Optionnel : Configurer l'emplacement des assets (js, css, images)
  // publicDir: 'public', // Par défaut, Vite cherche un dossier 'public' à la racine du projet.
})