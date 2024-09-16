import type { JSONSchemaForNPMPackageJsonFiles } from '../types'
import type { Exports } from './exports'

export type PackageJson = {
  exports?: Exports
} & JSONSchemaForNPMPackageJsonFiles
