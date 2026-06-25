import { resolve } from "path";
import { defineConfig } from 'vite';
 
export default defineConfig({
  root: "src",
  build: {
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        projects: resolve(__dirname, "src/pages/projects.html"),
        kinetics: resolve(__dirname, "src/pages/projects/kinetics.html"),
        langford: resolve(__dirname, "src/pages/projects/langford.html"),
        mypace: resolve(__dirname, "src/pages/projects/mypace.html"),
        och: resolve(__dirname, "src/pages/projects/och.html"),
        valto: resolve(__dirname, "src/pages/projects/valto.html"),
      },
    },
    outDir: "../build",
  },
  base: '/portfolio/',
});