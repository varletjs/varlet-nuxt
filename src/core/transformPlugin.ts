import { createUnplugin } from 'unplugin'
import MagicString from 'magic-string'
import { bigCamelize } from '@varlet/shared'

import { moduleName } from '../config'
import { genSideEffectsImport } from '../gen'

import type { PresetImport, TransformOptions } from '../types'

interface PluginOptions extends TransformOptions {
  sourcemap?: boolean
  transformStyles: (name: string) => undefined | string
}
// transformDirectives: (name: string) => undefined | [name: string, styles?: string]

const componentsRegExp = /(?<=[ (])_?resolveComponent\(\s*["'](lazy-|Lazy)?([^'"]*?)["'][\s,]*[^)]*\)/g
// const importsRegExp = new RegExp(`\\b(${[].join('|')})\\b`, 'g')
// const directivesRegExp = /(?<=[ (])_?resolveDirective\(\s*["']([^'"]*?)["'][\s,]*[^)]*\)/g

export const transformPlugin = createUnplugin((options: PluginOptions) => {
  const { include, exclude, transformStyles } = options

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
      // const directives: PresetImport[] = []
      const s = new MagicString(code)

      const addStyles = (styles?: string) => {
        styles && imports.add(genSideEffectsImport(styles))
      }

      s.replace(componentsRegExp, (full, lazy, name) => {
        addStyles(transformStyles(bigCamelize(name)))
        return full
      })

      // s.replace(importsRegExp, (full, name) => {
      //   addStyles(transformStyles(name))
      //   return full
      // })

      // if (directives.length) {
      //   imports.add(genLibraryImport(directives))
      // }

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
