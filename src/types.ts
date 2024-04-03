export interface ModuleOptions {
  modulePath?: string
  exclude?: string[]
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    varlet?: Partial<ModuleOptions>
  }
  interface NuxtOptions {
    varlet?: Partial<ModuleOptions>
  }
}
