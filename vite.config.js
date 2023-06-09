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
        auth: path.resolve(__dirname, 'pages/auth/index.html'),
        product: path.resolve(__dirname, 'pages/product/index.html'),
        cart: path.resolve(__dirname, 'pages/cart/index.html'),
        catalog: path.resolve(__dirname, 'pages/catalog/index.html'),
        news: path.resolve(__dirname, 'pages/news/index.html'),
        newsdetail: path.resolve(__dirname, 'pages/newsdetail/index.html'),
        contacts: path.resolve(__dirname, 'pages/contacts/index.html'),
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
