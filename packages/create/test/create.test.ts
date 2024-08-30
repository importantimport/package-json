import { describe, expect, it } from 'vitest'

import { create } from '../src'

describe('create', () => {
  it('basics', () => {
    const json = create()

    expect(json).toStrictEqual({
      name: 'create',
      version: undefined,
    })
  })
})
