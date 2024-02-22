import { join } from 'node:path'
import { addComponentsDir, addImports, defineNuxtModule } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import { createUnplugin } from 'unplugin'
import MagicString from 'magic-string'
import { genImport } from 'knitwork'
import { bigCamelize } from '@varlet/shared'

import type { ModuleOptions } from './types'
import { directives, excludeDiretries, functional, moduleName, nameSpace } from './config'
import { genStylePath } from './utils'

const componentReg = /_component_var(|_)[a-z]+ /g
const functionComponentReg = new RegExp(functional.join('|'), 'g')

const directiveReg = new RegExp(`_resolveDirective\\(\\"(${directives.join('|')})\\"\\)`, 'g')

// eslint-disable-next-line node/prefer-global/process
const CMD = process.cwd()
const relativePath = join(CMD, `node_modules/${moduleName}`)

const transformPathPlugin = createUnplugin(() => {
  return {
    name: `${moduleName}:transform`,
    enforce: 'post',
    transformInclude(id) {
      return !excludeDiretries.some(entry => id.includes(entry))
    },
    transform(_code) {
      const code: MagicString = new MagicString(_code)

      code.replace(componentReg, (componentStr: string) => {
        const componentName = componentStr.split('_component_var_')[1]
        code.prepend(genStylePath(componentName))
        return componentStr
      })

      code.replace(functionComponentReg, (componentStr: string) => {
        code.prepend(genStylePath(componentStr))
        return componentStr
      })

      code.replace(directiveReg, (directiveStr) => {
        const directiveName = directiveStr.match(new RegExp(`${directives.join('|')}`))?.[0]

        if (directiveName) {
          code.prepend(genImport(`${moduleName}`, [
            {
              name: bigCamelize(directiveName),
            },
          ]))
          code.prepend(genStylePath(directiveName))

          return bigCamelize(directiveName)
        }

        return directiveStr
      })

      if (code.hasChanged()) {
        return {
          code: code.toString(),
        }
      }
    },
  }
})

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: moduleName,
    configKey: moduleName,
  },
  setup(_options: ModuleOptions, nuxt: Nuxt) {
    nuxt.options.build.transpile.push(moduleName)

    addComponentsDir({
      path: `${relativePath}/es`,
      prefix: nameSpace,
      pathPrefix: true,
      extensions: ['js', 'vue', 'ts', 'mjs'],
      pattern: ['**/**/index.*'],
      extendComponent(component) {
        const componentName = component.pascalName.replace(bigCamelize(nameSpace), '')
        return {
          ...component,
          export: `_${componentName}Component`,
        }
      },
    })

    addImports(functional.map((name: any) =>
      ({ name, from: `${moduleName}` }),
    ))

    nuxt.hook('vite:extendConfig', (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(transformPathPlugin.vite())
    })

    nuxt.hook('webpack:config', (configs) => {
      configs.forEach((config) => {
        config.plugins.push(transformPathPlugin.webpack())
      })
    })
  },
})
