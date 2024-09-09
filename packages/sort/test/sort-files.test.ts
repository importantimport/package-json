import { describe, expect, it } from 'vitest'

import { sortFiles } from '../src/lib/sort-files'

describe('sortFiles', () => {
  it('sortDependencies', () => {
    const json = sortFiles(['dist', 'foo', 'bar'])

    expect(json).toStrictEqual(['bar', 'dist', 'foo'])
  })
})
