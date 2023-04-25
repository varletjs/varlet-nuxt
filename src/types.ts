export interface ModuleOptions {
  autoImport: boolean
  lazyLoad?: boolean
  include?: RegExp[]
  exclude?: RegExp[]
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    varlet?: Partial<ModuleOptions>
  }
  interface NuxtOptions {
    varlet?: Partial<ModuleOptions>
  }
}
