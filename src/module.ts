import { cwd } from 'node:process'
import { addComponentsDir, addImports, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import { createUnplugin } from 'unplugin'
import MagicString from 'magic-string'
import { genImport } from 'knitwork'

import type { ModuleOptions } from './types'
import { directives, excludeDiretries, functional, moduleName, nameSpace } from './config'
import { genStylePath, pascalCase } from './utils'

const componentReg = /_component_(v|V)ar([A-z]|_)+ /g
const functionComponentReg = new RegExp(functional.join('|'), 'g')

const directiveReg = new RegExp(`_resolveDirective\\(\\"(${directives.join('|')})\\"\\)`, 'g')

const CMD = cwd()
const { resolve } = createResolver(import.meta.url)
const relativePath = resolve(CMD, `node_modules/${moduleName}`)

function matchComponentName(componentStr: string): string {
  const componentName = componentStr.replace(/_component_(v|V)ar(|_)+/, '').replaceAll('_', '-')
  return componentName.trim()
}

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
        const componentName = matchComponentName(componentStr)

        if (componentName)
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
              name: pascalCase(directiveName),
            },
          ]))
          code.prepend(genStylePath(directiveName))

          return pascalCase(directiveName)
        }

        return directiveStr
      })

      if (code.hasChanged()) {
        return {
          code: code.toString(),
          map: code.generateMap({ source: moduleName, includeContent: true }),
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
        const componentName = component.pascalName.replace(pascalCase(nameSpace), '')
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
