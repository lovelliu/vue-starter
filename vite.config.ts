import { resolve } from 'path'

import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir)

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      { find: '@', replacement: pathResolve('src') },
      { find: '#', replacement: pathResolve('types') },
    ],
  },
})
