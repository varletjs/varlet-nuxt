import type { Options } from '@varlet/unplugin-icon-builder/types'

export interface ModuleOptions {
  modulePath?: string
  exclude?: string[]
  icon?: Options
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    varlet?: Partial<ModuleOptions>
  }
}
