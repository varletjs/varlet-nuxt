import { addImportsSources } from '@nuxt/kit'

import { moduleName } from '../config'
import type { ModuleOptions } from '../types'

export function resolveImports(config: ModuleOptions) {
  const { imports } = config

  addImportsSources({
    from: moduleName,
    imports
  })
}
