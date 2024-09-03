// eslint-disable-next-line ts/consistent-type-definitions
type PackageJsonMain = {
  name?: string
  private?: boolean
  /** @default 'undefined' */
  type?: 'commonjs' | 'module'
  version?: string
}

// eslint-disable-next-line ts/consistent-type-definitions
export type PackageJsonExport = {
  types?: string
  // eslint-disable-next-line perfectionist/sort-object-types
  import?: string
  require?: string
  // eslint-disable-next-line perfectionist/sort-object-types
  default?: string
}

// eslint-disable-next-line ts/consistent-type-definitions
export type PackageJsonExports = {
  exports?: Record<string, PackageJsonExport | Record<string, PackageJsonExport> | string>
  /**
   * @default
   * ```ts
   * ['dist']
   * ```
   */
  files?: string[]
  /**
   * @default
   * ```ts
   * type === 'module' ? './dist/index.mjs' : './dist/index.cjs'
   * ```
   */
  main?: string
  /**
   * @default
   * ```ts
   * type === undefined ? './dist/index.mjs' : undefined
   * ```
   */
  module?: string
  /** @default './dist/index.d.ts' */
  types?: string
}

export type PackageJson = PackageJsonExports & PackageJsonMain & Record<string, unknown>
