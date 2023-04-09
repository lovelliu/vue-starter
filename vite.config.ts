import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: pathResolve('src') },
      { find: '#', replacement: pathResolve('types') },
    ],
  },
})
