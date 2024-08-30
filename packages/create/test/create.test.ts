import sort from '@package-json/sort'
import { describe, expect, it } from 'vitest'

import { create } from '../src'

describe('create', () => {
  it('basics', () => {
    const json = create()

    expect(json).toStrictEqual(sort({
      name: '@package-json/create',
      type: 'module',
    }))
  })
})
