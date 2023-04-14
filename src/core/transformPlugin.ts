import { createUnplugin } from 'unplugin'
import MagicString from 'magic-string'
import { bigCamelize } from '@varlet/shared'

import { moduleName, functionComponents } from '../config'
import { genLibraryImport, genSideEffectsImport } from '../gen'

import type { PresetImport, TransformOptions } from '../types'

interface PluginOptions extends TransformOptions {
  sourcemap?: boolean
  transformStyles: (name: string) => undefined | string
  transformDirectives: (name: string) => undefined | [name: string, styles?: string]
}
// transformDirectives: (name: string) => undefined | [name: string, styles?: string]

const componentsRegExp = /(?<=[ (])_?resolveComponent\(\s*["'](lazy-|Lazy)?([^'"]*?)["'][\s,]*[^)]*\)/g
const importsRegExp = new RegExp(`\\b(${functionComponents.join('|')})\\b`, 'g')
const directivesRegExp = /(?<=[ (])_?resolveDirective\(\s*["']([^'"]*?)["'][\s,]*[^)]*\)/g

export const transformPlugin = createUnplugin((options: PluginOptions) => {
  const { include, exclude, transformStyles, transformDirectives } = options

  return {
    name: `${moduleName}:transform`,
    enforce: 'post',
    transformInclude (id) {
      if (exclude.some(pattern => id.match(pattern))) {
        return false
      }
      if (include.some(pattern => id.match(pattern))) {
        return true
      }
    },
    transform (code, id) {
      const imports = new Set<string>()
      const directives: PresetImport[] = []
      const s = new MagicString(code)
      let no = 0

      const addStyles = (styles?: string) => {
        styles && imports.add(genSideEffectsImport(styles))
      }

      s.replace(componentsRegExp, (full, lazy, name) => {
        addStyles(transformStyles(bigCamelize(name)))
        return full
      })

      s.replace(importsRegExp, (full, name) => {
        addStyles(transformStyles(name))
        return full
      })

      s.replace(directivesRegExp, (full, name) => {
        const directiveConfig = transformDirectives(bigCamelize(name))

        if (directiveConfig) {
          const [directive, styles] = directiveConfig
          const aliasName = `__v_directive_${no}`

          no += 1

          addStyles(styles)
          directives.push([directive, aliasName])

          return aliasName
        }

        return full
      })

      if (directives.length) {
        imports.add(genLibraryImport(directives))
      }

      if (imports.size) {
        s.prepend([...imports, ''].join('\n'))
      }

      if (s.hasChanged()) {
        return {
          code: s.toString(),
          map: options.sourcemap
            ? s.generateMap({ source: id, includeContent: true })
            : undefined
        }
      }
    }
  }
})
