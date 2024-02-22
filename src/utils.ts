import { kebabCase } from '@varlet/shared'
import { genImport } from 'knitwork'
import { moduleName } from './config'

export function genStylePath(dirName: string) {
  return genImport(`${moduleName}/es/${kebabCase(dirName)}/style`)
}
