import * as varletComponents from '@varlet/ui'

import type { ModuleOptions } from './types'

export const moduleName = 'varlet'

export const components = Object.keys(varletComponents).filter(key =>
  /^[A-Z][A-Za-z]*[^_][A-Za-z]*$/.test(key)
)

const defaultInclude: RegExp[] = [
  /\.vue$/,
  /\.vue\?vue/,
  /\.vue\?v=/,
  /\.((c|m)?j|t)sx?$/
]

const defaultExclude: RegExp[] = [
  /[\\/]node_modules[\\/]/,
  /[\\/]\.git[\\/]/,
  /[\\/]\.nuxt[\\/]/
]

export const defaults: ModuleOptions = {
  lazyLoad: false,
  components,
  include: defaultInclude,
  exclude: defaultExclude,
  imports: []
}
