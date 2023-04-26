import { join } from 'node:path'
import { addComponentsDir, addImportsDir, addImportsSources, defineNuxtModule } from '@nuxt/kit'
import { Nuxt } from '@nuxt/schema'
import { createUnplugin } from 'unplugin'
import MagicString from 'magic-string'
import { genImport } from 'knitwork'
import { bigCamelize, kebabCase } from '@varlet/shared'

import type { ModuleOptions } from './types'
import { functionComponents, moduleName, nameSpace } from './config'
import { getFunctionComponentsRegExps } from './utils'

const componentReg = /_component_var(|_)[a-z]+ /g
const functionComponentReg = new RegExp(getFunctionComponentsRegExps().map(item => item.source).join('|'), 'g')

const CMD = process.cwd()

const transformPathPlugin = createUnplugin(() => {
  return {
    name: `${moduleName}:transform`,
    enforce: 'post',
    transform(_code, id) {
      const code: MagicString = new MagicString(_code)

      code.replace(componentReg, (componentStr) => {
        const componentName = componentStr.split('_component_var_')[1]
        code.prepend(genImport(`${moduleName}/es/${kebabCase(componentName)}/style`))
        return componentStr
      })

      // code.replace(functionComponentReg, (functionStr) => {
      //   const functionComponent = functionStr.slice(0, functionStr.length - 1)
      //   console.log('functionStr', functionStr, functionComponent, genImport(`${moduleName}`, [functionComponent]));

      //   // code.prepend(genImport(`${moduleName}`, [functionComponent]))
      //   code.prepend(genImport(`${moduleName}/es/${kebabCase(functionComponent)}/index`, bigCamelize(functionComponent)))
      //   code.prepend(genImport(`${moduleName}/es/${kebabCase(functionComponent)}/style`))

      //   return functionStr
      // })

      if (code.hasChanged()) {
        return {
          code: code.toString()
        }
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

    addComponentsDir({
      path: join(CMD, `node_modules/${moduleName}/es`),
      prefix: nameSpace,
      pathPrefix: true,
      extensions: ['js', 'vue', 'ts', 'mjs'],
      pattern: ['**/**/index.*']
    })

    addImportsDir(functionComponents.map(item => `${moduleName}/es/${kebabCase(item)}`))

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
