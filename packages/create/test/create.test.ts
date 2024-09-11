import sort from '@package-json/sort'
import { describe, expect, it } from 'vitest'

import { version } from '../package.json'
import { create } from '../src'

describe('create', () => {
  it('basics', () => {
    const json = create()

    expect(json).toStrictEqual(sort({
      author: '藍+85CD',
      bugs: 'https://github.com/importantimport/package-json/issues',
      exports: {
        '.': {
          default: './dist/index.mjs',
          types: './dist/index.d.mts',
        },
        './package.json': './package.json',
      },
      files: ['dist'],
      homepage: 'https://github.com/importantimport/package-json',
      license: 'MIT',
      main: './dist/index.mjs',
      name: '@package-json/create',
      repository: {
        directory: 'packages/create',
        type: 'git',
        url: 'https://github.com/importantimport/package-json.git',
      },
      type: 'module',
      types: './dist/index.d.ts',
      version,
    }))
  })
})
