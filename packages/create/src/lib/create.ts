import { sort } from '@package-json/sort'
import { basename } from 'node:path'
import { cwd } from 'node:process'

import type { PackageJson } from './types'

import { config } from './config'
import { createExports } from './create-exports'
import { getScope } from './utils'

/**
 * Create package json
 * @param json package json overrides
 * @returns package json
 */
export const create = (json: PackageJson = {}) =>
  sort({
    ...config,
    ...createExports(config),
    name: getScope(config.name) + basename(cwd()),
    private: config.private,
    type: config.type,
    version: config.version,
    ...json,
  }) satisfies PackageJson
