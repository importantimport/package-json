import { describe, expect, it } from 'vitest'

import { sort } from '../src'

describe('sort', () => {
  it('basics', () => {
    const json = sort({
      name: '@package-json/test',
      private: true,
      type: 'module',
    })

    expect(Object.keys(json)).toStrictEqual(['name', 'type', 'private'])
  })
})
