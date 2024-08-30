import { sort } from '@package-json/sort'
import { basename } from 'node:path'
import { cwd } from 'node:process'

import type { PackageJson } from './config'

import { config } from './config'

export const create = () =>
  sort({
    /** TODO: @scope */
    name: basename(cwd()),
    version: config.version,
  }) satisfies PackageJson
