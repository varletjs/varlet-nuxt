import { kebabCase } from '@varlet/shared'
import { moduleName } from '../config'
import type { ModuleOptions } from '../types'

export function resolveDirectives (
  config: ModuleOptions,
  name: string
): undefined | [name: string, styles?: string] {
  const { directives } = config

  if (directives[name]) {
    const [directive, styleName] = Array.isArray(directives[name]) ? directives[name] : [directives[name]] as any
    if (styleName) {
      return [directive, `${moduleName}/es/${kebabCase(name)}/style`]
    }

    return [directive, styleName]
  }
}
