import type { PackageJson } from '@package-json/types'

import { sort } from '@package-json/sort'
import { basename } from 'node:path'
import { cwd } from 'node:process'

import { config } from './config'
import { createExports } from './create-exports'
import { createRepository } from './create-repository'
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
    ...createRepository(config),
    name: getScope(config.name) + basename(cwd()),
    private: config.private,
    type: config.type,
    version: config.version,
    ...json,
  }) satisfies PackageJson
