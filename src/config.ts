import * as varletComponents from '@varlet/ui'

export const moduleName = '@varlet/ui'

export const nameSpace = 'var'

export const functionComponents: string[] = [
  'Snackbar',
  'ActionSheet',
  'Dialog',
  'LoadingBar',
  'ImagePreview',
  'StyleProvider',
  'Picker'
]

const allDirectives = {
  Ripple: ['ripple', 'VRipple'],
  Lazy: ['lazy', 'VLazy'],
  Hover: ['hover', 'VHover']
}

const allComponents = [
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
