import { sort } from '@package-json/sort'
import { basename } from 'node:path'
import { cwd } from 'node:process'

import type { PackageJson } from './config'

import { config } from './config'
import { getScope } from './utils'

export const create = () =>
  sort({
    name: getScope(config.name) + basename(cwd()),
    private: config.private,
    type: config.type,
    version: config.version,
  }) satisfies PackageJson
