import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'
import varletModules from '..'

const svgIconsDir = resolve(__dirname, './assets/svg-icons')

export default defineNuxtConfig({
  modules: [varletModules],
  varlet: {
    icon: {
      dir: svgIconsDir,
      generatedFilename: './playground/assets/virtual.icons.css',
    },
  },
})
