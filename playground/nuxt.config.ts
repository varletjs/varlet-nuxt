import path from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'
import varlet from '..'

const svgIconsDir = path.resolve(__dirname, './assets/svg-icons')

export default defineNuxtConfig({
  modules: [[
    varlet,
    {
      icon: {
        dir: svgIconsDir,
        generatedFilename: './playground/assets/virtual.icons.css',
      },
    },
  ]],
})
