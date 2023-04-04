import * as varletComponents from '@varlet/ui'

import type { ModuleOptions, PresetDirectives, PresetImport } from './types'

export const moduleName = '@varlet/ui'

export const components = Object.keys(varletComponents).filter(key =>
  /^[A-Z][A-Za-z]*[^_][A-Za-z]*$/.test(key)
)

export const functionComponents: string[] = [
  'Snackbar',
  'ActionSheet',
  'Dialog',
  'LoadingBar'
]

const allDirectives: PresetDirectives = {
  Ripple: ['ripple', 'VRipple'],
  Lazy: ['lazy', 'VLazy'],
  Hover: ['hover', 'VHover']
}

const allComponents: PresetImport[] = [
  ...functionComponents
]

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
  imports: allComponents,
  directives: allDirectives
}
