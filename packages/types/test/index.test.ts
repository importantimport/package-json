import type { PackageJson } from '../src'

import { describe, expect, it } from 'vitest'

import pkg from '../package.json'

describe('types', () => {
  it('basics', () => {
    const json: PackageJson = {
      ...pkg,
      type: 'module',
    }

    expect(json.name).toBe('@package-json/types')
    expect(json.type).toBe('module')
  })
})
