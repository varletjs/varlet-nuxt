import { join } from 'node:path'
import { addComponentsDir, addImportsDir, defineNuxtModule } from '@nuxt/kit'
import { Nuxt } from '@nuxt/schema'
import { createUnplugin } from 'unplugin'
import MagicString from 'magic-string'
import { kebabCase } from "@varlet/shared";

import type { ModuleOptions } from './types'
import { moduleName, nameSpace } from './config'
import { getComponents } from './utils'

const packageRegExp = /node_modules\/@varlet\/ui\/es/g
// const packageRegExp = /node_modules\/@varlet\/ui\/es\/[a-z]+(|-[a-z]+){1,3}/g
const CMD = process.cwd()

const transformPathPlugin = createUnplugin(() => {
  return {
    name: `${moduleName}:transform`,
    enforce: 'post',
    transform(_code, id) {
      const code = new MagicString(_code)

      code.replace(packageRegExp, (packageStr, ...args) => {
        console.log('code', code.toString().includes('6666'), packageStr.toString());
        return moduleName
      })

      return {
        code: code.toString()
      }
    }
  }
})

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: moduleName,
    configKey: moduleName
  },
  setup(_options: ModuleOptions, nuxt: Nuxt) {
    nuxt.options.build.transpile.push(moduleName)

    addImportsDir(getComponents().map((item) => {
      return (join(CMD, `/node_modules/${moduleName}/es/${kebabCase(item)}/style`))
    }))

    addComponentsDir({
      path: join(CMD, `/node_modules/${moduleName}/es`),
      prefix: nameSpace,
      pathPrefix: true,
      extensions: ['js', 'vue', 'ts', 'mjs']
    })

    nuxt.hook('vite:extendConfig', (config, { isClient }) => {
      config.plugins = config.plugins || []
      config.plugins.push(transformPathPlugin.vite())
    })

    nuxt.hook('webpack:config', (configs) => {
      configs.forEach((config) => {
        config.plugins.push(transformPathPlugin.webpack())
      })
    })
  }
})
