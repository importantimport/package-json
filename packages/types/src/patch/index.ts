import type { JSONSchemaForNPMPackageJsonFiles } from '../types'
import type { PatchedExports } from './exports'

export type PackageJson = {
  exports?: PatchedExports
} & Omit<JSONSchemaForNPMPackageJsonFiles, 'exports'>
