import path from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        enter: path.resolve(__dirname, 'index.html'),
        home: path.resolve(__dirname, 'pages/home/index.html'),
        sample: path.resolve(__dirname, 'pages/sample/index.html')
      },
    },
  },
  plugins: [
    pluginPurgeCss(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngquant()
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
  },
})
