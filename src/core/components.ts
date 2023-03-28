import { addComponent } from '@nuxt/kit'
import { kebabCase } from '@varlet/shared'

import { moduleName } from '../config'
import { ModuleOptions } from '../types'

export function resolveComponents (config: ModuleOptions) {
  const { components } = config

  components.forEach((item) => {
    const [name, alias, from] = Array.isArray(item) ? item : [item]

    const filePath =
      !from || from === moduleName
        ? `@${moduleName}/ui/es/${kebabCase(name)}/${name}`
        : from

    addComponent({
      name: alias || `Var${name}`,
      filePath
    })
  })
}

export function resolveStyles (config: ModuleOptions, name: string) {
  const { components } = config

  if (/^Var[A-Z]/.test(name) && components.includes(name.slice(3))) {
    return `@${moduleName.toLocaleLowerCase()}/ui/es/${kebabCase(name.slice(3))}/style`
  }

  return undefined
}
