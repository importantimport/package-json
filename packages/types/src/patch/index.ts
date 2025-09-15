import type { JSONSchemaForNPMPackageJsonFiles } from '../types'
import type { Exports } from './exports'

export interface PackageJson extends JSONSchemaForNPMPackageJsonFiles {
  exports?: Exports
}
