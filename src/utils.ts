import { genImport } from 'knitwork'
import { moduleName } from './config'

export function genStylePath(dirName: string) {
  return genImport(`${moduleName}/es/${kebabCase(dirName)}/style/index.mjs`)
}

export function pascalCase(str: string): string {
  return str
    .split(/[^a-z0-9]/i)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .trim()
}
