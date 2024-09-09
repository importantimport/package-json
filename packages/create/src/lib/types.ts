interface PackageJsonMain {
  name?: string
  private?: boolean
  /** @default 'undefined' */
  type?: 'commonjs' | 'module'
  version?: string
}

export interface PackageJsonExport {

  default?: string

  import?: string
  require?: string
  types?: string
}

export interface PackageJsonExports {
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

export interface PackageJsonRepository {
  bugs?: string
  homepage?: string
  repository?: {
    directory?: string
    type?: string
    url?: string
  } | string
}

export type PackageJson = PackageJsonExports & PackageJsonMain & PackageJsonRepository & Record<string, unknown>
