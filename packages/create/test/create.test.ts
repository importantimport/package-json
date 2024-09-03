import sort from '@package-json/sort'
import { describe, expect, it } from 'vitest'

import { create } from '../src'

describe('create', () => {
  it('basics', () => {
    const json = create()

    expect(json).toStrictEqual(sort({
      exports: {
        '.': {
          default: './dist/index.mjs',
          types: './dist/index.d.mts',
        },
        './package.json': './package.json',
      },
      files: ['dist'],
      main: './dist/index.mjs',
      name: '@package-json/create',
      type: 'module',
    }))
  })
})
