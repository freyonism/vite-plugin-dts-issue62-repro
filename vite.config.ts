import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'shared',
      formats: ['es'],
      fileName: () => 'index.js'
    },
  },
  plugins: [
    dts({
      outputDir: "./dist"
    })
  ]
})