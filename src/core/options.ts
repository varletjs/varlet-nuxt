import { useNuxt } from '@nuxt/kit'
import { moduleName } from '../config'

export function resolveOptions() {
  const nuxt = useNuxt()

  nuxt.options.build.transpile.push(moduleName)
}
