/** name: export name from the library, as: the name you want to use in your project, from: the name of library */
export type PresetImport = string | [name: string, as?: string, from?: string]

/** Used to filter files that need to automatically import styles and other functions */
export interface TransformOptions {
  include: RegExp[]
  exclude: RegExp[]
}

export interface ModuleOptions extends TransformOptions {
  /**
   * Whether to automatically load lazyLoad directives and components.
   *
   * @default false
   *
   * @example
   * ```ts
   * lazyLoad: true,
   * // or
   * lazyLoad: { lazyComponent: true },
   * ```
   */
  lazyLoad: boolean | { lazyComponent?: boolean; lazyImage?: boolean }
  /**
   * If there are components that are not imported automatically from varlet, you need to add the component here.
   */
  components: PresetImport[]
  /**
   * If you wish to add automatically import content from varlet, you can add it here.
   */
  imports: PresetImport[]
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    varlet?: Partial<ModuleOptions>
  }
  interface NuxtOptions {
    varlet?: Partial<ModuleOptions>
  }
}
