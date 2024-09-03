import { sort } from '@package-json/sort'
import { basename } from 'node:path'
import { cwd } from 'node:process'

import type { PackageJson } from './types'

import { config } from './config'
import { createExports } from './create-exports'
import { getScope } from './utils'

export const create = () =>
  sort({
    ...config,
    ...createExports(config),
    name: getScope(config.name) + basename(cwd()),
    private: config.private,
    type: config.type,
    version: config.version,
  }) satisfies PackageJson
