import type { JSONSchemaForNPMPackageJsonFiles } from '../types'
import type { Author } from './author'
import type { Exports } from './exports'

export interface PackageJson extends JSONSchemaForNPMPackageJsonFiles {
  author?: Author
  engines?: {
    [k: string]: string | undefined
    node?: string
  }
  /**
   * A module ID with untranspiled code that is the primary entry point to your program.
   */
  esnext?:
    | string
    | {
      [k: string]: string | undefined
      browser?: string
      main?: string
    }
  exports?: Exports
  /**
   * Defines which tools and versions are expected to be used when Volta is installed.
   */
  volta?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "(node|npm|pnpm|yarn)".
     */
    [k: string]: string | undefined
    /**
     * The value of that entry should be a path to another JSON file which also has a "volta" section
     */
    extends?: string
  }
}
