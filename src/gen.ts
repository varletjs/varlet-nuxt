import { moduleName } from './config'
import { PresetImport } from './types'

export function genSideEffectsImport(value: string): string {
  return `import '${value}';`
}

export function genLibraryImport(list: PresetImport[]): string {
  const values = list.map((item) => {
    if (Array.isArray(item)) {
      const [name, as] = item
      return `${name} as ${as}`
    }

    return item
  })

  return `import {${values.join(',')}} from '${moduleName}';`
}
