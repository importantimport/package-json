import type { PackageExportsEntry, PackageExportsEntryObject1, PackageExportsFallback, PackageExportsFallback1 } from '../types'

/**
 * The "exports" field is used to restrict external access to non-exported module files, also enables a module to import itself using "name".
 */
export type PatchedExports =
  | {
    /**
     * The module path that is resolved when the module specifier matches "name", shadows the "main" field.
     */
    '.'?: PackageExportsEntry | PackageExportsFallback
    './package.json'?: './package.json'
    /**
     * The module path prefix that is resolved when the module specifier starts with "name/", set to "./*" to allow external modules to import any subpath.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^\./.+".
     */
    [k: `./${string}` | ({} & string)]: PackageExportsEntry | PackageExportsFallback
  }
  | (null | string)
  | PackageExportsEntryObject1
  | PackageExportsFallback1
